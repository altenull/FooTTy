import { all } from 'redux-saga/effects';

import foottyAPILeagueSaga from './foottyAPI-league.saga';
import foottyAPITeamSaga from './foottyAPI-team.saga';

export default function* foottyAPISaga() {
  yield all([foottyAPILeagueSaga(), foottyAPITeamSaga()]);
}
