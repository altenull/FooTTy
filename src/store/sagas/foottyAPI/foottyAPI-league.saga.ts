import { all, call, put, takeLatest } from 'redux-saga/effects';

import foottyAPIService from '../../../services/foottyAPI/foottyAPI.service';
import foottyAPIHelper from '../../helpers/foottyAPI/foottyAPI.helper';
import sagaHelper from '../../helpers/saga/saga.helper';
import {
  GetLeagueDetailsAction,
  GetLeagueDetailsResponse,
  ObjectizedLeagueDetails,
} from '../../models/foottyAPI/foottyAPI-league.store.model';
import { GET_LEAGUE_DETAILS } from '../../modules/foottyAPI/foottyAPI-league.module';

export const getLeagueDetailsAsyncActionCreator = sagaHelper.createAsyncActions(GET_LEAGUE_DETAILS);

function* getLeagueDetails(action: GetLeagueDetailsAction) {
  yield put(getLeagueDetailsAsyncActionCreator.request());

  const { response, error } = yield call(() => foottyAPIService.getLeagueDetails(action.payload));

  if (response) {
    const leagueDetails: { [leagueId: string]: ObjectizedLeagueDetails } = foottyAPIHelper.getLeagueDeatils(
      response.data as GetLeagueDetailsResponse
    );

    yield put(getLeagueDetailsAsyncActionCreator.success(leagueDetails));
  } else {
    yield put(getLeagueDetailsAsyncActionCreator.fail(error.toString()));
  }
}

export default function* foottyAPILeagueSaga() {
  yield all([takeLatest(GET_LEAGUE_DETAILS.INDEX, getLeagueDetails)]);
}
