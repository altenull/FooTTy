import { createStore } from 'redux';

import { rootReducer } from './modules';

const configureStore = () => {
  const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
  const store = createStore(rootReducer, devTools && devTools());

  return store;
};

export default configureStore;
