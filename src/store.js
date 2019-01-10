import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

// import the root reducer
import rootReducer from './reducers/index';

const enhancers =  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

const store = createStore(rootReducer, enhancers);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

// if(module.hot) {
//   module.hot.accept('./reducers/',() => {
//     const nextRootReducer = require('./reducers/index').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

export default store;
