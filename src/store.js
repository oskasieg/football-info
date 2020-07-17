import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
//import saga from './saga';

import teamInfoReducer from './containers/TeamInfo/reducer';
import listItemsReducer from './containers/ListItems/reducer';

const sagaMiddleware = createSagaMiddleware();

const middleware = [/*sagaMiddleware*/ thunk];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ teamInfoReducer, listItemsReducer });

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware), ...enhancers));

//sagaMiddleware.run(saga);

export default store;
