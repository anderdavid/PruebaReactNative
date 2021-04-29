import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
// then run the saga
sagaMiddleware.run(rootSaga);
