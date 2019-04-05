import { all, call, put, takeLatest } from 'redux-saga/effects';

import foottyAPIService from '../../../services/foottyAPI/foottyAPI.service';
import foottyAPIHelper from '../../helpers/foottyAPI/foottyAPI.helper';
import sagaHelper from '../../helpers/saga/saga.helper';
import {
  GetAllTeamsInLeagueAction,
  GetAllTeamsInLeagueResponse,
  GetLeagueDetailsAction,
  GetLeagueDetailsResponse,
  ObjectizedLeagueDetails,
  ObjectizedTeamInLeague,
} from '../../models/foottyAPI/foottyAPI-league.store.model';
import { GET_ALL_TEAMS_IN_LEAGUE, GET_LEAGUE_DETAILS } from '../../modules/foottyAPI/foottyAPI-league.module';

export const getLeagueDetailsAsyncActionCreator = sagaHelper.createAsyncActions(GET_LEAGUE_DETAILS);
export const getAllTeamsAsyncActionCreator = sagaHelper.createAsyncActions(GET_ALL_TEAMS_IN_LEAGUE);

function* getLeagueDetails(action: GetLeagueDetailsAction) {
  yield put(getLeagueDetailsAsyncActionCreator.request());

  const { response, error } = yield call(() => foottyAPIService.getLeagueDetails(action.payload));

  if (response) {
    const leagueDetails: { [leagueId: string]: ObjectizedLeagueDetails } = foottyAPIHelper.getLeagueDetails(
      response.data as GetLeagueDetailsResponse
    );

    yield put(getLeagueDetailsAsyncActionCreator.success(leagueDetails));
  } else {
    yield put(getLeagueDetailsAsyncActionCreator.fail(error.toString()));
  }
}

export function* getAllTeamsInLeague(action: GetAllTeamsInLeagueAction) {
  yield put(getAllTeamsAsyncActionCreator.request());

  const { response, error } = yield call(() => foottyAPIService.getAllTeamsInLeague(action.payload));

  if (response) {
    const allTeamsInLeague: { [teamId: string]: ObjectizedTeamInLeague } = foottyAPIHelper.getAllTeamsInLeague(
      response.data as GetAllTeamsInLeagueResponse
    );

    yield put(getAllTeamsAsyncActionCreator.success(allTeamsInLeague));
  } else {
    yield put(getAllTeamsAsyncActionCreator.fail(error.toString()));
  }
}

export default function* foottyAPILeagueSaga() {
  yield all([
    takeLatest(GET_LEAGUE_DETAILS.INDEX, getLeagueDetails),
    takeLatest(GET_ALL_TEAMS_IN_LEAGUE.INDEX, getAllTeamsInLeague),
  ]);
}
