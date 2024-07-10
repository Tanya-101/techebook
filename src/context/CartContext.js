import { createContext, useContext } from "react";
import { useReducer } from "react";
import { cartReducer } from "../reducers";

const cartInitialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialState);

export const CartProvider = ({children}) => {

    const [state,dispatch] = useReducer(cartReducer,cartInitialState);

    const addToCart = (product) => {
        // console.log(product);
        const updatedCart = state.cartList.concat(product);
        const updatedTotal = state.total+product.price;

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                productAddedToCart : updatedCart,
                total: updatedTotal
            }
        })
    }

    const removeFromCart = (product) => {

        const updatedTotal = state.total-product.price;

        
        const updatedCart = state.cartList.filter(current => current.id !== product.id);
        
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                productRemovedFromCart : updatedCart,
                total: updatedTotal
            }
        })

    }

    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART",
            payload: {
                cartList: [],
                total: 0
            }
        })
        // updatePrice()
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}