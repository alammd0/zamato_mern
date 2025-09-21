import ImageKit from "imagekit";

const imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
})

export const fileUpload = async (file) => {
    try{
        const result = await imagekit.upload({
            file: file.buffer, 
            fileName: file.originalname,
        })
        
        return result;
    }
    catch(err){
        console.error("ImageKit upload error:", err);
        throw err;
    }
}