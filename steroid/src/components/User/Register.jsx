import { useForm } from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod"
import { z } from 'zod'
import './user.css'

export const Register = () => {
    const registerSchema = z.object({
        username: z.string()
        .min(1, {message: "Please enter an username!"})
        .min(3, {message: "Username must be at least 3 characters long!"})
        .refine(async (username) => await checkUsernameAvailability(username), {message: "Username is already taken!"}),
        
        password: z.string()
        .min(1, { message: "Please enter a password!"})
        .min(8, { message: "Set password must be at least 8 characters" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
        .regex(/[0-9]/, { message: "Password must contain at least one number" }),
    })

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        resolver: zodResolver(registerSchema)
    });

    const onSubmit = async (data) => {
        console.log(data);
    }

    const checkUsernameAvailability = async (username) => {
        /* TODO: Implement users*/
        const takenUsernames = ['testUser'];
        return !takenUsernames.includes(username);
    }

    return(
        <div className='register-container'>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='register-form'>
                <label htmlFor="username-input">Username</label>
                <input {...register("username")} type="text" id='username-input'/>
                {errors.username && (
                    <div style={{color: "red"}}>{errors.username.message}</div>
                )}
                <label htmlFor="password-input">Password</label>
                <input {...register("password")} type="password" id='password-input'/>
                {errors.password && (
                    <div style={{color: "red"}}>{errors.password.message}</div>
                )}
               <div className='promotions-checkbox-holder'>
                    <input type="checkbox" id='promotions-checkbox'/>
                    <label htmlFor="promotions-checkbox">Notify me about sales, promotions, and announcements (optional)</label>
               </div>
                <span id='register-message'>Registration confirmation will be emailed to you.</span>
                <button type='submit' id='register-button' disabled={isSubmitting}>{isSubmitting ? "Registering..." : "Register"}</button>
            </form>
        </div>
    )
}
