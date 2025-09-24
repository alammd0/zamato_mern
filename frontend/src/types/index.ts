
export type Register = {
    fullname : string,
    email : string,
    password : string
}

export type Login = {
    email : string,
    password : string
}

export type RegisterFoodPartner = {
    ownerName : string,
    email : string,
    contactNumber?: number,
    restaurantName : string,
    profileImage?: string,
    address : string,
    typeofRestaurant?: string,
    password : string
}

export type LoginFoodPartner = {
    email : string,
    password : string
}

export type User = {
    fullname : string,
    email : string,
    password : string
}

export interface FoodPartnerAuthFormProps {
    type : "register" | "login"
}

export interface UserAuthFormProps {
    type : "register" | "login"
}

export type FoodPost = {
    nameOfFood : string,
    description : string,
    tags : string[],
    images : File[],
}

export type FoodReel = {
    nameOfFood : string,
    description : string,
    tags : string[],
    video : File | null
}

export type FoodPosts = {
    nameOfFood : string,
    description : string,
    tags : string[],
    imageUrl : string,
    likes : number,
    comments : number,
    save : number
}

export type FoodReels = {
    nameOfFood : string,
    description : string,
    tags : string[],
    videoUrl : string,
    likes : number,
    comments : number,
    save : number
}