import './user.css'
import {z} from "zod"
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { postUserData } from '../../core/userReq'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const usernameRegex = /^[a-zA-Z0-9]{3,}$/
    const navigate = useNavigate();
    const checkUserCredentials = (email, password) => {

    }

    const loginSchema = z.object({
        email: z.string()
        .min(1, {message: "Username or email is required!"})
        .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
            message: "Must be a valid username or email",
          }),

        password: z.string()
        .min(1, {message: "Password is required!"})
    }).superRefine(async (data, ctx) => {
        const {email, passsword} = data;
        const result = await checkUserCredentials(email, passsword);
        if(result?.error === "email"){
            ctx.addIssue({
                code: "custom",
                message: "Incorrect username or email!",
                path: ["email"], // Show error on email field
            })
        }
        /*TODO: Check if this is working properly with real users*/
        else if(result?.error === "password"){
            ctx.addIssue({
                code: "custom",
                message: "Incorrect password!",
                path: ["password"]
            })
        }
    })

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        resolver: zodResolver(loginSchema)
    });


    const onSubmit = (data) => {
        console.log(data);
        const url = "https://progkitten.pythonanywhere.com/users/login"
        postUserData(data, url, '/products', navigate)

    }
    
    return(
        <div className='login-container'>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='login-form'>
                <label htmlFor="username-email-input">Username or email address</label>
                <input {...register("email")} type="text" id='username-email-input'/>
                {errors.email && (
                    <div style={{color: "red"}}>{errors.email.message}</div>
                )}
                <label htmlFor="password-input">Password</label>
                <input {...register('password')} type="password" id='password-input'/>
                {errors.password && (
                    <div style={{color: "red"}}>{errors.password.message}</div>
                )}
                <div className='submit-holder'>
                    <div className='checkbox-holder'>
                        <input {...register("remember-me-checkbox")} type="checkbox" id='remember-me-checkbox'/>
                        <label htmlFor="remember-me-checkbox">Remember me</label>
                    </div>   
                    <button type='submit' id='login-button' disabled={isSubmitting}>{isSubmitting ? "Logging in..." : "Log in"}</button>
                </div>
            </form>
            <span id='register-forgot-password-span'>New user? <a href="/register">Register here!</a> | <a href="#">Forgot your password?</a></span>
        </div>
    )
}
