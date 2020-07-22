import rootReducer from './reducers/rootReducer'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware, logger)
));
export default store


