import { CartCard } from "./CartCard";
import { useState } from "react";
import { Checkout } from "./Checkout";
import { useCart } from "../../../context";

export const CartList = () => {

    const [checkout, setCheckout] = useState(false);
    const {cartList,total} = useCart();

    return (
        <main>
            <section>
                <div>
                    <h1 className="text-2xl text-center underline underline-offset-8 font-semibold dark:text-slate-100 my-10">My Cart({cartList.length})</h1>
                </div>
            </section>

            <section>
                {
                    cartList.map((product) => (
                        <CartCard key={product.id} product={product} />
                    ))
                }
            </section>

            <section>
                <div className="m-auto flex justify-between items-center max-w-4xl p-2 border-b border-slate-500 my-10">
                    <span className="text-lg font-bold dark:text-slate-100 ">Total Amount:</span>
                    <span className="text-lg font-bold dark:text-slate-100 ">${total}</span>
                </div>
                <div className="text-center my-5">
                    <button onClick={() => setCheckout(true)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                        PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
                    </button>
                </div>
            </section>
            {checkout && <Checkout setCheckout={setCheckout}/>}
        </main>
    )
}
