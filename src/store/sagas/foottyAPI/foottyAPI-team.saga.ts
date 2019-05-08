import { all, call, put } from 'redux-saga/effects';

import FoottyAPIService from '../../../services/foottyAPI/foottyAPI.service';
import foottyAPIStoreHelper from '../../helpers/foottyAPI/foottyAPI.store.helper';
import sagaStoreHelper from '../../helpers/saga/saga.store.helper';
import {
  GetAllPlayersInTeamAction,
  GetAllPlayersInTeamResponse,
  ObjectizedPlayerInTeam,
} from '../../models/foottyAPI/foottyAPI-team.store.model';
import { GET_ALL_PLAYERS_IN_TEAM } from '../../modules/foottyAPI/foottyAPI-team.module';

export const getAllPlayersInTeamAsyncActionCreator = sagaStoreHelper.createAsyncActions(GET_ALL_PLAYERS_IN_TEAM);

export function* getAllPlayersInTeam(action: GetAllPlayersInTeamAction) {
  yield put(getAllPlayersInTeamAsyncActionCreator.request());

  const { response, error } = yield call(() => FoottyAPIService.getAllTeamsInLeague(action.payload));

  if (response) {
    const players: { [playerId: string]: ObjectizedPlayerInTeam } = foottyAPIStoreHelper.getPlayers(
      response.data as GetAllPlayersInTeamResponse
    );

    yield put(getAllPlayersInTeamAsyncActionCreator.success(players));
  } else {
    yield put(getAllPlayersInTeamAsyncActionCreator.fail(error.toString()));
  }
}

export default function* foottyAPITeamSaga() {
  yield all([GET_ALL_PLAYERS_IN_TEAM.INDEX, getAllPlayersInTeam]);
}
