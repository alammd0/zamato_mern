import cloudinary from "cloudinary";

const cloudinaryConfig = {
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
}

cloudinary.config(cloudinaryConfig);

export const fileUpload = async(file, fileName) => {

    // buffer to base64
    const base64 = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`

    const result = await cloudinary.uploader.upload(base64, {
        folder : "zamato_mern",
    })

    return result.secure_url;
};