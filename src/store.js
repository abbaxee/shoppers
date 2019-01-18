import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { createBrowserHistory } from 'history';

// import the root reducer
import rootReducer from './reducers/index';

const enhancers =  compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
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
