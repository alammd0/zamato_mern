
import { useForm } from "react-hook-form";
import type { SubmitHandler} from "react-hook-form";
import type { FoodPartnerAuthFormProps, RegisterFoodPartner } from "../../types";
import { Link, useNavigate } from "react-router-dom";
import { loginFoodPartner, registerFoodPartner } from "../../service/api/Auth";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setFoodPartnerToken, setLoginFoodPartner, setRegisterFoodPartner } from "../../redux/slice/foodPartnerSlice";

export default function FoodPartnerAuthForm({ type } : FoodPartnerAuthFormProps) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFoodPartner>();

    const onSubmit: SubmitHandler<RegisterFoodPartner> = async (data) => {
        if(type === "register"){
            const {ownerName, email, contactNumber, restaurantName, address, typeofRestaurant, password} = data;
            const response = await registerFoodPartner({ownerName, email, contactNumber, restaurantName, address, typeofRestaurant, password});


            if(response.message !== "Food partner registered successfully"){
                navigate("/food-partner/register");
                toast.error(response.message);
            }else{
                dispatch(setRegisterFoodPartner(response));
                dispatch(setFoodPartnerToken(response.token));
                toast.success(response.message);
                navigate("/food-partner/dashboard")
            }
        }
        else{
            const {email, password} = data;
            const response = await loginFoodPartner({email, password});
            // console.log(response.foodPartner);
            if(response.message !== "Food partner logged in successfully"){
                navigate("/food-partner/login");
            }else{
                dispatch(setLoginFoodPartner(response));
                dispatch(setFoodPartnerToken(response.token));
                navigate("/food-partner/dashboard")
            }
        }
    }

    return (
        <div className="flex flex-col px-6 py-10 md:w-1/3 w-1/4 bg-card border border-border rounded-lg shadow shadow-accent">
            <header className="flex flex-col gap-2 text-center">
                {
                    type === "register" ?
                    <>
                        <h1 className="text-xl font-serif font-bold text-foreground">Join as Food Partner</h1>
                        {/* <p className="">Register your business to showcase your culinary offerings</p> */}
                    </> : 

                    <>
                        <h1 className="text-xl font-serif font-bold text-foreground">Partner Portal</h1>
                        {/* <p>Sign in to your food partner account</p> */}
                    </>
                }  
            </header>

            <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-3 w-full items-center">
                    <div className={`${type === "register" ? "flex flex-col gap-2" : "hidden"} w-full`}>
                        {
                            type === "register" &&
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-muted-foreground">Owner Name <sup className="text-xs font-normal text-muted-foreground">*</sup></label>
                                <input type="text"
                                    id="ownerName"
                                    className="w-full rounded-md border border-border bg-input p-2 text-sm text-foreground"
                                    {...register("ownerName", { required: true })}
                                    placeholder="Owner Name"
                                />
                                {errors.ownerName && <span className="text-red-400">Owner Name is required</span>}
                            </div>
                        }
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-semibold text-muted-foreground" htmlFor="email">Email <sup className="text-xs font-normal text-muted-foreground">*</sup></label>
                        <input type="email"
                            id="email"
                            className="w-full rounded-md border border-border bg-input p-2 text-sm text-foreground"
                            {...register("email", { required: true })}
                            placeholder="Email"
                        />
                        {errors.email && <span className="text-red-400">Email is required</span>}
                    </div>
                </div>

                <div className="flex gap-2 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        {
                            type === "register" &&
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-muted-foreground" htmlFor="contactNumber">Contact Number</label>
                                <input type="number"
                                    id="contactNumber"
                                    className="w-full rounded-md border border-border bg-input p-2 text-sm text-foreground"
                                    {...register("contactNumber")}
                                    placeholder="Contact Number"
                                />
                                {errors.contactNumber && <span className="text-red-400">Contact Number is required</span>}
                            </div>
                        }
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        {
                            type === "register" &&
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-muted-foreground" htmlFor="restaurantName">Restaurant Name <sup className="text-xs font-normal text-muted-foreground">*</sup></label>
                                <input type="text"
                                    id="restaurantName"
                                    className="w-full rounded-md border border-border bg-input p-2 text-sm text-foreground"
                                    {...register("restaurantName", { required: true })}
                                    placeholder="Restaurant Name"
                                />
                                {errors.restaurantName && <span className="text-red-400">Restaurant Name is required</span>}
                            </div>
                        }
                    </div>
                </div>

                {
                    type === "register" &&
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-muted-foreground" htmlFor="address">Address <sup className="text-xs font-normal text-muted-foreground">*</sup></label>
                        <input type="text"
                            id="address"
                            className="w-full rounded-md border border-border bg-input p-2 text-sm text-foreground"
                            {...register("address", { required: true })}
                            placeholder="Address"
                        />
                        {errors.address && <span className="text-red-400">Address is required</span>}
                    </div>
                }

                {
                    type === "register" &&
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-muted-foreground" htmlFor="typeofRestaurant">Type of Restaurant</label>
                        <select id="typeofRestaurant" defaultValue="Fast Food" {...register("typeofRestaurant")} className="w-full rounded-md border border-border bg-input p-2 text-sm text-foreground">
                            <option value="Fast Food">Fast Food</option>
                            <option value="Cafe">Cafe</option>
                            <option value="Restaurant">Restaurant</option>
                            <option value="Bar">Bar</option>
                            <option value="Pub">Pub</option>
                            <option value="Deli">Deli</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Ice Cream">Ice Cream</option>
                            <option value="Cafeteria">Cafeteria</option>
                            <option value="Other">Other</option>
                        </select>
                        {/* enum : ["Fast Food", "Cafe", "Restaurant", "Bar", "Pub", "Deli", "Bakery", "Ice Cream", "Cafeteria", "Other"], */}
                        {errors.typeofRestaurant && <span className="text-red-400">Type of Restaurant is required</span>}
                    </div>
                }

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-muted-foreground" htmlFor="password">Password <sup className="text-xs font-normal text-muted-foreground">*</sup></label>
                    <input type="password"
                        id="password"
                        className="w-full rounded-md border border-border bg-input p-2 text-sm text-foreground"
                        {...register("password", { required: true })}
                        placeholder="Password"
                    />
                    {errors.password && <span className="text-red-400">Password is required</span>}
                </div>

                <div>
                    {
                        type === "register" ?
                        <button className="w-fit rounded-md bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4" type="submit">Sign Up</button> :
                        <button className="w-fit rounded-md bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4" type="submit">Login</button>
                    }
                </div>
            </form>

            <div>
                <p className="text-center text-sm text-muted-foreground">
                    {
                        type === "register" ? "Already have an account?" : "Don't have an account?"
                    }{" "}
                    <Link to={type === "register" ? "/food-partner/login" : "/food-partner/register"} className="text-primary hover:underline font-medium">
                        {
                            type === "register" ? "Sign in" : "Sign up"
                        }
                    </Link>
                </p>
            </div>
        </div>
    )
}