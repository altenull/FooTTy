import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './modules';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const composeEnhancers = composeWithDevTools({});

  return createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
};

export const runSagas = () => {
  sagaMiddleware.run(rootSaga);
};

export default configureStore;
