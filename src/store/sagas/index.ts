import { all } from 'redux-saga/effects';

import coreSaga from './core/core.saga';
import foottyAPISaga from './foottyAPI/foottyAPI.saga';

export default function* rootSaga() {
  yield all([coreSaga(), foottyAPISaga()]);
}
