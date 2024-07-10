

export const cartReducer = (state, action) => {
    const {type,payload} = action;

    switch(type){

        case "ADD_TO_CART":
            return {
                ...state, cartList: payload.productAddedToCart, total: payload.total
            }
        
        case "REMOVE_FROM_CART":
            return {
                ...state, cartList: payload.productRemovedFromCart, total: payload.total
            }

        case "CLEAR_CART":
            return {
                ...state, cartList: payload.cartList, total: payload.total
            }

        // case "UPDATE_PRICE":
        //     return {
        //         ...state, total: payload.totalAmount, 
        //     }

        default:
            throw new Error("No case found!");
    }
}