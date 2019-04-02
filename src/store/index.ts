import { createHashHistory } from 'history';

import store from './configureStore';

const history = createHashHistory();
const initialState = (window as any).initialReduxState;

export default store(history, initialState);
