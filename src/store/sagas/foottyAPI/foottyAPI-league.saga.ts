import { all, call, put, takeLatest } from 'redux-saga/effects';

import foottyAPIService from '../../../services/foottyAPI/foottyAPI.service';
import foottyAPIHelper from '../../helpers/foottyAPI/foottyAPI.helper';
import sagaHelper from '../../helpers/saga/saga.helper';
import {
  GetAllTeamsInLeagueAction,
  GetAllTeamsInLeagueResponse,
  GetLeagueDetailsAction,
  GetLeagueDetailsResponse,
  GetLeagueSeasonsAction,
  GetLeagueSeasonsResponse,
  ObjectizedLeagueDetails,
  ObjectizedTeamInLeague,
} from '../../models/foottyAPI/foottyAPI-league.store.model';
import {
  GET_ALL_TEAMS_IN_LEAGUE,
  GET_LEAGUE_DETAILS,
  GET_LEAGUE_SEASONS,
} from '../../modules/foottyAPI/foottyAPI-league.module';

export const getLeagueDetailsAsyncActionCreator = sagaHelper.createAsyncActions(GET_LEAGUE_DETAILS);
export const getAllTeamsAsyncActionCreator = sagaHelper.createAsyncActions(GET_ALL_TEAMS_IN_LEAGUE);
export const getLeagueSeasonsAsyncActionCreator = sagaHelper.createAsyncActions(GET_LEAGUE_SEASONS);

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

export function* getLeagueSeasons(action: GetLeagueSeasonsAction) {
  yield put(getLeagueSeasonsAsyncActionCreator.request());

  const { response, error } = yield call(() => foottyAPIService.getLeagueSeasons(action.payload));

  if (response) {
    const leagueSeasons: string[] = foottyAPIHelper.getLeagueSeasons(response.data as GetLeagueSeasonsResponse);

    // TODO: Research how to use some actions in other saga
    // if (sortedSeasons.length > 0) {
    //   const setSelectedSeasonPayload: SetSelectedSeasonPayload = {
    //     selectedSeason: sortedSeasons[0],
    //   };

    //   yield put(setSelectedSeasonAcionCreator(setSelectedSeasonPayload));
    // }

    yield put(getLeagueSeasonsAsyncActionCreator.success(leagueSeasons));
  } else {
    yield put(getLeagueSeasonsAsyncActionCreator.fail(error.toString()));
  }
}

export default function* foottyAPILeagueSaga() {
  yield all([
    takeLatest(GET_LEAGUE_DETAILS.INDEX, getLeagueDetails),
    takeLatest(GET_ALL_TEAMS_IN_LEAGUE.INDEX, getAllTeamsInLeague),
    takeLatest(GET_LEAGUE_SEASONS.INDEX, getLeagueSeasons),
  ]);
}
