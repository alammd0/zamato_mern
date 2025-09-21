import cloudinary from "cloudinary";

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


// export const videoUpload = async (file) => {
//     try{
//         const uploadResponse = await cloudinary.uploader.upload(file, {
//             folder : "zamato_mern",
//             resource_type: "auto"
//         })

//         console.log(uploadResponse);
//         return uploadResponse.secure_url;
//     }
//     catch(err){
//         console.error(err);
//         return null;
//     }
// }

// const cloudinary = require('cloudinary').v2

const uploadImageToCloudinary  = async (folder, file,  height, quality) => {

    console.log(file);
    console.log(file.tempFilePath);

    const options = {folder};
    if(height) {
        options.height = height;
    }
    if(quality) {
        options.quality = quality;
    }
    options.resource_type = "auto";

    const uploadResponse = await cloudinary.uploader.upload(file.tempFilePath, options);
    console.log(uploadResponse);
    return uploadResponse;
}

export default uploadImageToCloudinary;