import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import categories from './categories';
import shopItems from './shopItems';
import cart from './cart'

const rootReducer = combineReducers({shopItems, categories, cart, routing: routerReducer });

export default rootReducer;