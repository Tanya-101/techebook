import { useEffect, useState } from "react";
import { useCart } from "../../../context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createOrder,getUser } from "../../../services";

export const Checkout = ({ setCheckout }) => {

    const { cartList, clearCart, total } = useCart();
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try{
            const data = await getUser();
            setUser(data);
            }catch(error){
                toast.error(error.message, { closeButton: true, position: "bottom-center" });
            }
        }
        fetchData();
    }, [])

    async function handleOrderSubmit(event) {
        event.preventDefault();

        try {
            const data = await createOrder(cartList,total,user);
            clearCart();
            navigate("/order-summary", { state: { data: data, status: true } });
        } catch (error) {
            navigate("/order-summary", { state: { status: false } });
        }
    }

    return (
        <section>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
                <div className="fixed top-0 right-0 left-0 z-50 w-full flex items-center justify-center md:h-full mt-5 overflow-y-auto overflow-x-hidden ">
                    <div className="rounded-lg relative p-2 w-full max-w-md h-full md:h-auto overflow-y-auto bg-white shadow dark:bg-gray-700">


                        <i onClick={() => (setCheckout(false))} className="bi bi-x-lg absolute top-10 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 m-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"></i>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className=" mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                <i className="bi bi-credit-card mr-2"></i>CARD PAYMENT
                            </h3>
                            <form onSubmit={handleOrderSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-mediumtext-gray-900 dark:text-gray-300">Name:</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400
                                    dark:text-white"
                                        value={user.name || "Anonymous user"} disabled required="" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email:</label>
                                    <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" value={user.email || "Anonymous email"} disabled required="" />
                                </div>
                                <div>
                                    <label htmlFor="card" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Card Number:</label>
                                    <input type="number" name="card" id="card" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" value="4215625462597845" disabled required="" />
                                </div>
                                <div className="">
                                    <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Expiry Date:</label>
                                    <input type="number" name="month" id="month" className="inline-block w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" value="03" disabled required="" />
                                    <input type="number" name="year" id="year" className="inline-block w-20 ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" value="27" disabled required="" />
                                </div>
                                <div>
                                    <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >Security Code:</label>
                                    <input type="number" name="code" id="code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" value="523" disabled required="" />
                                </div>
                                <p className="mb-4 text-2xl font-semibold text-lime-500 text-center">
                                    ${total}
                                </p>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700" >
                                    <i className="mr-2 bi bi-lock-fill"></i>PAY NOW
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
