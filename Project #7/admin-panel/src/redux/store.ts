import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducer';
import rootSaga from './rootSaga';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const reducer = rootReducer(history);

const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware, routerMiddleware(history)),
    devToolsEnhancer({}),
  ),
);

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof reducer>;

export default store;
