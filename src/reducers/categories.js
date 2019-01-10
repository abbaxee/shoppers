import categories from '../data/categories';

const ADD_CATEGORY = 'categories/ADD_CATEGORY'

const defaultState = {
    categories,
}

export default function (state = defaultState, {type, ...actionProps}) {
    switch (type) {
        case ADD_CATEGORY:
            return {categories: [...state.categories].concat([actionProps])}
        default:
            return state;
    }  
    
}

export const addCategory = (id, name) => {
    return {
        type: ADD_CATEGORY,
        id,
        name
    }
}


