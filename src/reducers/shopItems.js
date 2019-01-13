import shopItems from '../data/shopItems';

const ADD_ITEM = 'shopitem/ADD_ITEM';
const SORT_ITEMS = 'shopitem/SORT_ITEMs'


const filterItem = (storeItems, filter, items = {}) => {  
    switch (filter) {
        case 'SORT_BY_NAME':            
            items.shopItems = [...storeItems.sort((a, b) => a.name.localeCompare(b.name))];
            return items;
        case 'SORT_BY_NAME_REVERSE':            
            items.shopItems = [...storeItems.sort((a, b) => b.name.localeCompare(a.name))];
            return items;
        case 'SORT_BY_PRICE':            
            items.shopItems = [...storeItems.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))];
            return items;
        case 'SORT_BY_PRICE_REVERSE':            
            items.shopItems = [...storeItems.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))];
            return items;
        default:
            return defaultState;
    }
}

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

// create an object for the default data
const defaultState = {
    shopItems
};

// Recducer
export default function (state = defaultState, action) {
    
    switch (action.type) {
        case ADD_ITEM:           
            return {
                shopItems: [newItem(action.item), ...state.shopItems]
            };
        case SORT_ITEMS:       
            return filterItem(action.storeItems, action.filter);
        default:
            return state;
    }
}

// actions
export const sortShop = (storeItems, filter) => {
    return {
      type: SORT_ITEMS,
      filter,
      storeItems
    }
}


export function addItem(item) {
  return {
    type: ADD_ITEM,
    item
  }
}
  