import cloudinary from "cloudinary";
import streamifier from "streamifier";

const cloudinaryConfig = {
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
}

cloudinary.config(cloudinaryConfig);

// for uploading image
export const fileUpload = async(files) => {
    // console.log(files);
    try{
        const uploadResponse = files.map ( (file) => {
            const base64 = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`
            // console.log(base64);
            return cloudinary.uploader.upload(base64, {
                folder : "zamato_mern",
                resource_type: "auto"
            })
        })

        const result = await Promise.all(uploadResponse);
        return result.map(res => res.secure_url);
    }
    catch(err){
        console.error(err);
        return null;
    }
};

// for uploading video
// export const videoUpload = async(files) => {
//     try{
//         const base64 = `data:${files.mimetype};base64,${files.buffer.toString("base64")}`
//         const uploadResponse = await cloudinary.uploader.upload(base64, {
//             folder : "zamato_mern",
//             resource_type: "auto"
//         })
//         return uploadResponse.secure_url;
//     }
//     catch(err){
//         console.error(err);
//         return null;
//     }
// }


// helper: stream upload from a buffer
const uploadStreamFromBuffer = (file) => {
  return new Promise((resolve, reject) => {

    const uploadOptions = {
      folder:"zamato_mern",
      resource_type: "video",
      timeout: 10 * 60 * 1000,
    };

    const stream = cloudinary.uploader.upload_stream(uploadOptions, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });

    streamifier.createReadStream(file.buffer).pipe(stream);
  });
};

export const videoUpload = async (file) => {
    try{
        if(!file || !file.buffer){
           throw new Error("File not provided");
        }

        const sizeMB = file.size / 1024 / 1024;
        if(sizeMB <= 90){
            const res = await uploadStreamFromBuffer(file);
            return res.url;
        }
        else{
            const res = await uploadLargeFromBuffer(file, { folder: "zamato_mern" });
            return res.secure_url;
        }
    }
    catch(err){
        console.error(err);
        return null;
    }
}
