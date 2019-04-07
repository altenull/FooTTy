import { all, call, put, takeLatest } from 'redux-saga/effects';

import foottyAPIService from '../../../services/foottyAPI/foottyAPI.service';
import foottyAPIStoreHelper from '../../helpers/foottyAPI/foottyAPI.store.helper';
import sagaStoreHelper from '../../helpers/saga/saga.store.helper';
import {
  GetAllTeamsInLeagueAction,
  GetAllTeamsInLeagueResponse,
  GetLeagueDetailsAction,
  GetLeagueDetailsResponse,
  GetLeagueSeasonsAction,
  GetLeagueSeasonsResponse,
  GetNextEventsAction,
  GetNextEventsResponse,
  ObjectizedEventInLeague,
  ObjectizedLeagueDetails,
  ObjectizedTeamInLeague,
} from '../../models/foottyAPI/foottyAPI-league.store.model';
import {
  GET_ALL_TEAMS_IN_LEAGUE,
  GET_LEAGUE_DETAILS,
  GET_LEAGUE_SEASONS,
  GET_NEXT_EVENTS,
} from '../../modules/foottyAPI/foottyAPI-league.module';

export const getLeagueDetailsAsyncActionCreator = sagaStoreHelper.createAsyncActions(GET_LEAGUE_DETAILS);
export const getAllTeamsAsyncActionCreator = sagaStoreHelper.createAsyncActions(GET_ALL_TEAMS_IN_LEAGUE);
export const getLeagueSeasonsAsyncActionCreator = sagaStoreHelper.createAsyncActions(GET_LEAGUE_SEASONS);
export const getNextEventsAsyncActionCreator = sagaStoreHelper.createAsyncActions(GET_NEXT_EVENTS);

function* getLeagueDetails(action: GetLeagueDetailsAction) {
  yield put(getLeagueDetailsAsyncActionCreator.request());

  const { response, error } = yield call(() => foottyAPIService.getLeagueDetails(action.payload));

  if (response) {
    const leagueDetails: { [leagueId: string]: ObjectizedLeagueDetails } = foottyAPIStoreHelper.getLeagueDetails(
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
    const allTeamsInLeague: { [teamId: string]: ObjectizedTeamInLeague } = foottyAPIStoreHelper.getAllTeamsInLeague(
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
    const leagueSeasons: string[] = foottyAPIStoreHelper.getLeagueSeasons(response.data as GetLeagueSeasonsResponse);

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

export function* getNextEvents(action: GetNextEventsAction) {
  yield put(getNextEventsAsyncActionCreator.request());

  const { response, error } = yield call(() => foottyAPIService.getNextEvents(action.payload));

  if (response) {
    const nextEvents: { [eventId: string]: ObjectizedEventInLeague } = foottyAPIStoreHelper.getNextEvents(
      response.data as GetNextEventsResponse
    );

    yield put(getNextEventsAsyncActionCreator.success(nextEvents));
  } else {
    yield put(getNextEventsAsyncActionCreator.fail(error.toString()));
  }
}

export default function* foottyAPILeagueSaga() {
  yield all([
    takeLatest(GET_LEAGUE_DETAILS.INDEX, getLeagueDetails),
    takeLatest(GET_ALL_TEAMS_IN_LEAGUE.INDEX, getAllTeamsInLeague),
    takeLatest(GET_LEAGUE_SEASONS.INDEX, getLeagueSeasons),
    takeLatest(GET_NEXT_EVENTS.INDEX, getNextEvents),
  ]);
}
