import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import { useCart } from "../../context";
import { useEffect,useState } from "react";

export const ProductCard = ({product}) => {


  const {id,name,overview,price,poster,rating,best_seller} = product;
  const {cartList, addToCart, removeFromCart} = useCart();
  const [isInCart, setIsInCart] = useState(false);
  
  useEffect(() => {
    const productIsInCart = cartList.find(element => element.id === id);

    if(productIsInCart){
      setIsInCart(true);
    }
    else{
      setIsInCart(false);
    }
  },[cartList,id])

  function removeHandle(){
    removeFromCart(product);
  }

  function addHandle(){
    addToCart(product);
  }


  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${id}`} className="relative">
        {best_seller && <span className="absolute text-white top-4 left-2 px-2 bg-orange-500 bg-opacity-90 rounded">Bestseller</span>}
        <img className="rounded-t-lg w-full h-64" src={poster} alt={name}/>
      </Link>

      <div className="p-5">
        <Link to={`/products/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>

        <div className="flex gap-1 items-center my-2">
          <Rating rating={rating}/>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$<span></span>{price}</span>
          </span>

          {isInCart ? (<button 
          onClick={removeHandle}
          className="inline-flex items-center px-3 py-2 text-sm font-medium  bg-red-700 text-center text-white rounded-lg hover:bg-red-800">Remove Item <i className="bi bi-trash3"></i></button> ) : (<button
          onClick={addHandle}
          className={`inline-flex items-center px-3 py-2 text-sm font-medium  bg-blue-700 text-center text-white rounded-lg hover:bg-blue-800  ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={product.in_stock ? "" : "disabled"}>Add To Cart <i className="bi bi-plus-lg"></i></button>)}

        </div>

      </div>

    </div>
  )
}
