import { all, call, put, takeLatest } from 'redux-saga/effects';

import FoottyAPIService from '../../../services/foottyAPI/foottyAPI.service';
import foottyAPIStoreHelper from '../../helpers/foottyAPI/foottyAPI.store.helper';
import sagaStoreHelper from '../../helpers/saga/saga.store.helper';
import {
  GetFormerTeamsAction,
  GetFormerTeamsResponse,
  GetHonoursAction,
  GetHonoursResponse,
  ObjectizedFormerTeam,
  ObjectizedHonour,
} from '../../models/foottyAPI/foottyAPI-player.store.model';
import { GET_FORMER_TEAMS, GET_HONOURS } from '../../modules/foottyAPI/foottyAPI-player.module';

export const getFormerTeamsAsyncActionCreator = sagaStoreHelper.createAsyncActions(GET_FORMER_TEAMS);
export const getHonoursAsyncActionCreator = sagaStoreHelper.createAsyncActions(GET_HONOURS);

export function* getFormerTeams(action: GetFormerTeamsAction) {
  yield put(getFormerTeamsAsyncActionCreator.request());

  const { response, error } = yield call(() => FoottyAPIService.getFormerTeams(action.payload));

  if (response) {
    const formerTeams: { [formerTeamId: string]: ObjectizedFormerTeam } = foottyAPIStoreHelper.getFormerTeams(
      response.data as GetFormerTeamsResponse
    );

    yield put(getFormerTeamsAsyncActionCreator.success(formerTeams));
  } else {
    yield put(getFormerTeamsAsyncActionCreator.fail(error.toString()));
  }
}

export function* getHonours(action: GetHonoursAction) {
  yield put(getHonoursAsyncActionCreator.request());

  const { response, error } = yield call(() => FoottyAPIService.getHonours(action.payload));

  if (response) {
    const honours: { [honourId: string]: ObjectizedHonour } = foottyAPIStoreHelper.getHonours(
      response.data as GetHonoursResponse
    );

    yield put(getHonoursAsyncActionCreator.success(honours));
  } else {
    yield put(getHonoursAsyncActionCreator.fail(error.toString()));
  }
}

export default function* foottyAPIPlayerSaga() {
  yield all([takeLatest(GET_FORMER_TEAMS.INDEX, getFormerTeams)]);
  yield all([takeLatest(GET_HONOURS.INDEX, getHonours)]);
}
