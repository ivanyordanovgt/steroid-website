import './user.css'
import {z} from "zod"
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'

export const Login = () => {
    const usernameRegex = /^[a-zA-Z0-9]{3,}$/

    const checkUserCredentials = (userIdentifier, password) => {
        const validUsers = [
            {
                username: "testUser",
                email: "user@test.com",
                password: "Testpass1"
            }]

        return (validUsers.some(
            (user) => ((user.username === userIdentifier || user.email === userIdentifier) && user.password === password)
        ))
    }

    const loginSchema = z.object({
        userIdentifier: z.string()
        .min(1, {message: "Username/Email is required!"}),

        password: z.string()
        .min(1, {message: "Password is required!"})
    }).superRefine(async (data, ctx) => {
        const {identifier, passsword} = data;
        const isValid = await checkUserCredentials(identifier, passsword);
        if(!isValid){
            ctx.addIssue({
                code: "custom",
                message: "Invalid username/email or password",
                path: ["identifier"], // Show error on identifier field
            })
        }
    })
/*TODO: Fix this*/

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        resolver: zodResolver(loginSchema)
    });


    const onSubmit = (data) => {
        console.log(data);
    }
    
    return(
        <div className='login-container'>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='login-form'>
                <label htmlFor="username-email-input">Username or email address</label>
                <input {...register("usernameIdentifier")} type="text" id='username-email-input'/>
                {errors.userIdentifier && (
                    <div style={{color: "red"}}>{errors.userIdentifier.message}</div>
                )}
                <label htmlFor="password-input">Password</label>
                <input {...register('password')} type="password" id='password-input'/>
                {errors.password && (
                    <div style={{color: "red"}}>{errors.password.message}</div>
                )}
                <button type='submit' id='login-button' disabled={isSubmitting}>{isSubmitting ? "Logging in..." : "Log in"}</button>
                <input {...register("remember-me-checkbox")} type="checkbox" id='remember-me-checkbox'/>
                <label htmlFor="remember-me-checkbox">Remember me</label>
                <a href="#">Forgot your password?</a>
            </form>
        </div>
    )
}
