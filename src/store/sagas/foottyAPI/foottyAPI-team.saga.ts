import { all, call, put, takeLatest } from 'redux-saga/effects';

import FoottyAPIService from '../../../services/foottyAPI/foottyAPI.service';
import foottyAPIStoreHelper from '../../helpers/foottyAPI/foottyAPI.store.helper';
import sagaStoreHelper from '../../helpers/saga/saga.store.helper';
import {
  GetAllPlayersInTeamAction,
  GetAllPlayersInTeamResponse,
  GetLast5EventsAction,
  GetLast5EventsResponse,
  GetNext5EventsAction,
  GetNext5EventsResponse,
  ObjectizedLastEvent,
  ObjectizedNextEvent,
  ObjectizedPlayerInTeam,
} from '../../models/foottyAPI/foottyAPI-team.store.model';
import {
  GET_ALL_PLAYERS_IN_TEAM,
  GET_LAST_5_EVENTS,
  GET_NEXT_5_EVENTS,
} from '../../modules/foottyAPI/foottyAPI-team.module';

export const getAllPlayersInTeamAsyncActionCreator = sagaStoreHelper.createAsyncActions(GET_ALL_PLAYERS_IN_TEAM);
export const getNext5EventsAsyncActionCreator = sagaStoreHelper.createAsyncActions(GET_NEXT_5_EVENTS);
export const getLast5EventsAsyncActionCreator = sagaStoreHelper.createAsyncActions(GET_LAST_5_EVENTS);

export function* getAllPlayersInTeam(action: GetAllPlayersInTeamAction) {
  yield put(getAllPlayersInTeamAsyncActionCreator.request());

  const { response, error } = yield call(() => FoottyAPIService.getAllPlayersInTeam(action.payload));

  if (response) {
    const players: { [playerId: string]: ObjectizedPlayerInTeam } = foottyAPIStoreHelper.getPlayers(
      response.data as GetAllPlayersInTeamResponse
    );

    yield put(getAllPlayersInTeamAsyncActionCreator.success(players));
  } else {
    yield put(getAllPlayersInTeamAsyncActionCreator.fail(error.toString()));
  }
}

export function* getNext5Events(action: GetNext5EventsAction) {
  yield put(getNext5EventsAsyncActionCreator.request());

  const { response, error } = yield call(() => FoottyAPIService.getNext5Events(action.payload));

  if (response) {
    const events: { [eventId: string]: ObjectizedNextEvent } = foottyAPIStoreHelper.getNext5Events(
      response.data as GetNext5EventsResponse
    );

    yield put(getNext5EventsAsyncActionCreator.success(events));
  } else {
    yield put(getNext5EventsAsyncActionCreator.fail(error.toString()));
  }
}

export function* getLast5Events(action: GetLast5EventsAction) {
  yield put(getLast5EventsAsyncActionCreator.request());

  const { response, error } = yield call(() => FoottyAPIService.getLast5Events(action.payload));

  if (response) {
    const events: { [eventId: string]: ObjectizedLastEvent } = foottyAPIStoreHelper.getLast5Events(
      response.data as GetLast5EventsResponse
    );

    yield put(getLast5EventsAsyncActionCreator.success(events));
  } else {
    yield put(getLast5EventsAsyncActionCreator.fail(error.toString()));
  }
}

export default function* foottyAPITeamSaga() {
  yield all([takeLatest(GET_ALL_PLAYERS_IN_TEAM.INDEX, getAllPlayersInTeam)]);
  yield all([takeLatest(GET_NEXT_5_EVENTS.INDEX, getNext5Events)]);
  yield all([takeLatest(GET_LAST_5_EVENTS.INDEX, getLast5Events)]);
}
