import { History } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, RootState } from './modules';
import rootSaga from './sagas';

const configureStore = (history: History, initialState: RootState): Store<RootState> => {
  const composeEnhancers = composeWithDevTools({});

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [routerMiddleware(history), sagaMiddleware];

  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
