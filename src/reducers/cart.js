const ADD_TO_CART = 'cart/ADD_TO_CART';

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

export default cart;