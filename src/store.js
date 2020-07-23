import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';

import teamInfoReducer from './containers/TeamInfo/reducer';
import listItemsReducer from './containers/ListItems/reducer';

import { getAllCompetitionsRequest } from './containers/ListItems/actions';

import createSagaMiddleware from 'redux-saga';
import listItemsSaga from './containers/ListItems/sagas';
import teamInfoSaga from './containers/TeamInfo/sagas';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, thunk];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ teamInfoReducer, listItemsReducer });

function* rootSaga() {
  yield all([listItemsSaga(), teamInfoSaga()]);
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware), ...enhancers));

sagaMiddleware.run(rootSaga);

store.dispatch(getAllCompetitionsRequest());

export default store;
