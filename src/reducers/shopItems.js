import shopItems from '../data/shopItems';

// create an object for the default data
const defaultState = {
    shopItems
};

const ADD_ITEM = 'shopitem/ADD_ITEM';
const EDIT_ITEM = 'shopitem/EDIT_ITEM';
const DELETE_ITEM = 'cart/DELETE_ITEM';


const newItem = (item) => ({
    id: Date.now(),
    name: item.name,
    category: item.category,
    price: parseFloat(item.price) || 0,
    isFeatured: false,
    quantity: {
        small: parseInt(item.small) || 0,
        medium: parseInt(item.medium) || 0,
        large: parseInt(item.large) || 0,
    },
    description: item.description,
    display_src : item.image,
    
});

// Recducer
export default function (state = defaultState, action) {
    
    switch (action.type) {
        case ADD_ITEM:           
            return {
                shopItems: [newItem(action.item), ...state.shopItems]
            };
        case EDIT_ITEM:           
            const items = [...state.shopItems]
            items[action.index] = action.updatedItem; 
            return {shopItems: items }
        case DELETE_ITEM:
            return{
                shopItems: [
                    ...state.shopItems.slice(0, action.index),
                    ...state.shopItems.slice(action.index + 1)
                ]
            }
        default:
            return state;
    }
}

// actions
export function addItem(item) {
  return {
    type: ADD_ITEM,
    item
  }
}

export function editItem(updatedItem, index) {
    return {
      type: EDIT_ITEM,
      updatedItem,
      index
    }
  }

export const removeItem = (index) => {
    return {
        type: DELETE_ITEM,
        index
    }
}