const ADD_TO_CART = 'cart/ADD_TO_CART';
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';

const defaultState = {
    cartItems: []
};

const cartItem = (item) => ({
    id : item.id,
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    totalPrice: parseFloat(item.price * item.quantity),
    image: item.image,
    size: item.size
});

function cart(state = defaultState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cartItems: [cartItem(action.item), ...state.cartItems]
            } 
        case REMOVE_FROM_CART:
            return {
                cartItems: [
                    ...state.cartItems.slice(0, action.index),
                    ...state.cartItems.slice(action.index + 1)
                ]
            }
        default:
            return state;
    }
         
}

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        item
    }
}

export const removeFromCart = (index) => {
    return {
        type: REMOVE_FROM_CART,
        index
    }
}

export default cart;