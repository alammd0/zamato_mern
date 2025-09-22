import type { UserAuthFormProps, User } from "../../types";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../service/api/Auth";
import { useDispatch } from "react-redux";
import { setLoginUser, setRegisterUser, setUserToken } from "../../redux/slice/userAuthSlice";
import toast from "react-hot-toast";

export default function UserAuthForm({ type } : UserAuthFormProps){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<User>();

    const onSubmit: SubmitHandler<User> = async (data) => {
        if(type === "register"){
            const {fullname, email, password} = data;
            const response = await registerUser({fullname, email, password});

            if(response.message !== "User registered successfully"){
                navigate("/user/register");
                toast.error(response.message);
            }else{
                dispatch(setRegisterUser(response.user));
                dispatch(setUserToken(response.token));
                toast.success(response.message);
                navigate("/user/dashboard")
            }
        }
        else{
            const {email, password} = data;
            const response = await loginUser({email, password});
            if(response.message !== "User logged in successfully"){
                navigate("/user/login");
                toast.error(response.message);
            }else{
                dispatch(setLoginUser(response.user));
                dispatch(setUserToken(response.token));
                navigate("/user/dashboard");
                toast.success(response.message);
            }
        }
    }

    return (
        <div className="flex flex-col px-6 py-10 md:w-1/3 w-1/4 bg-card border border-border rounded-lg shadow shadow-accent">
            <header className="flex flex-col gap-2 text-center">
                {
                    type === "register" ?
                    <>
                        <h1 className="text-xl font-serif font-bold text-foreground">User Register</h1>
                    </> : 

                    <>
                        <h1 className="text-xl font-serif font-bold text-foreground">User Login</h1>
                    </>
                }
            </header>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                {
                    type === "register" && 
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-muted-foreground">Full Name <sup className="text-xs font-normal text-muted-foreground">*</sup></label>
                        <input type="text"
                            id="fullname"
                            className="w-full rounded-md border border-border bg-input p-2 text-sm text-foreground"
                            {...register("fullname", { required: true })}
                            placeholder="Full Name"
                        />
                        {errors.fullname && <span className="text-red-400">Full Name is required</span>}
                    </div>
                }

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-muted-foreground">Email <sup className="text-xs font-normal text-muted-foreground">*</sup></label>
                    <input type="email"
                        id="email"
                        className="w-full rounded-md border border-border bg-input p-2 text-sm text-foreground"
                        {...register("email", { required: true })}
                        placeholder="Email"
                    />
                    {errors.email && <span className="text-red-400">Email is required</span>}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-muted-foreground">Password <sup className="text-xs font-normal text-muted-foreground">*</sup></label>
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
                         <button className="w-fit rounded-md bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4" type="submit">Sign Up</button>
                         : 
                         <button className="w-fit rounded-md bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4" type="submit">Login</button>
                    }
                   
                </div>

                {/* already have an account and login */}
                <div>

                </div>
            </form>

            <div>
                <p className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link to={type === "register" ? "/user/login" : "/user/register"} className="text-primary hover:underline font-medium">
                        {
                            type === "register" ? "Sign in" : "Sign up"
                        }
                    </Link>
                </p>
            </div>
        </div>
    )
}