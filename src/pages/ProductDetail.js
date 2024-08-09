import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useTitle } from "../hooks/useTitle";
import { Rating } from "../components/";
import { useCart } from "../context";
import { getProduct } from "../services";

export const ProductDetail = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const { cartList, addToCart, removeFromCart } = useCart();
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        const productIsInCart = cartList.find(element => element.id === product.id);

        if (productIsInCart) {
            setIsInCart(true);
        }
        else {
            setIsInCart(false);
        }
    }, [cartList, product.id])

    useTitle(product.name);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const data = await getProduct(id);
                setProduct(data);
            } catch (error) {
                toast.error(error.message, {closeButton: true, position: "bottom-center" });
            }
        }
        fetchProduct()
    }, [id]) 


    function addHandle() {
        addToCart(product);
    }

    function removeHandle() {
        removeFromCart(product);
    }

    return (
        <main className="dark:bg-slate-800">
                    <section>
                        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>

                        <p className="mt-5 mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{product.overview}</p>
                        <div className="flex flex-wrap justify-around">
                            <div className="max-w-xl my-3">
                                <img className="rounded" src={product.poster} alt={product.name} />
                            </div>

                            <div className="max-w-xl my-3">
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-200">${product.price}</h1>
                                <div className="flex gap-1 items-center my-2"><Rating rating={product.rating} /></div>
                                <p className="flex gap-2 items-center my-2">
                                    {product.best_seller && <span className="text-md dark:bg-orange-50 dark:text-orange-500 py-1 px-2 rounded-lg font-bold">BEST SELLER</span>}
                                    {product.in_stock &&
                                        <span className="text-md border dark:bg-green-50 dark:text-green-500 py-1 px-2 rounded-lg font-bold">INSTOCK</span>}
                                    {!product.in_stock &&
                                        <span className="text-md border dark:bg-slate-100 dark:text-rose-700 py-1 px-2 rounded-lg font-bold">OUT OF STOCK</span>}
                                    <span className="text-md border dark:bg-blue-50 dark:text-blue-500 py-1 px-2 rounded-lg font-bold">{product.size} MB</span>
                                </p>

                                {isInCart ?
                                    (<button onClick={removeHandle} className={`mt-3 inline-flex items-center px-3 py-2 text-lg font-medium  bg-red-700 text-center text-white rounded-lg hover:bg-red-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={product.in_stock ? "" : "disabled"}>Remove Item <i className="bi bi-trash3"></i></button>)
                                    :
                                    (<button onClick={addHandle} className={`mt-3 inline-flex items-center px-3 py-2 text-lg font-medium  bg-blue-700 text-center text-white rounded-lg hover:bg-blue-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={product.in_stock ? "" : "disabled"}>Add To Cart <i className="bi bi-plus-lg"></i></button>)}

                                <p className="mt-3 text-lg text-gray-900 dark:text-slate-200">{product.long_description}</p>
                            </div>
                        </div>
                    </section>
        </main>
    )
}
