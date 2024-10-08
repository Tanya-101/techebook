import { useTitle } from "../hooks/useTitle";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../services";

export const Login = () => {

    useTitle("Login");

    const Navigate = useNavigate();

    const email = useRef();
    const password = useRef();

    async function handleLogin(event) {
        event.preventDefault();
        try {
            const authDetail = {
                email: email.current.value,
                password: password.current.value
            }

            const data = await login(authDetail);
            data.accessToken ? Navigate("/products") : toast.error(data);
        } catch (error) {
            toast.error(error);
        }

    }

    // async function handleLoginGuest() {
    //     email.current.value = process.env.REACT_APP_GUEST_LOGIN;
    //     password.current.value = process.env.REACT_APP_GUEST_PASSWORD;

    //     const data = await login();
    //     data.accessToken ? Navigate("/products") : toast.error(data);
    // }

    return (
        <main className="dark:bg-slate-800">
            <h1 className="mt-6 font-bold text-2xl text-center underline underline-offset-8 text-gray-800 dark:text-gray-200">Login</h1>

            <form onSubmit={handleLogin}>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input ref={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="bharti@example.com" required autoComplete="off" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                    <input ref={password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
            </form>
            {/* <button onClick={handleLoginGuest} className="mt-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:righ-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login As Guest</button>  */}
        </main>
    )
}
