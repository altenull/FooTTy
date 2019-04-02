import { all } from 'redux-saga/effects';

import foottyAPILeagueSaga from './foottyAPI-league.saga';

export default function* foottyAPISaga() {
  yield all([foottyAPILeagueSaga()]);
}
