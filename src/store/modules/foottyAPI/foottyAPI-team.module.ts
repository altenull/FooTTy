import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

import sagaStoreHelper from '../../helpers/saga/saga.store.helper';
import { FoottyAPITeamState } from '../../models/foottyAPI/foottyAPI-team.store.model';

const RESET_FOOTTY_API_TEAM = '@@foottyAPI-team/RESET_FOOTTY_API_TEAM';
export const GET_ALL_PLAYERS_IN_TEAM = sagaStoreHelper.createAsyncActionsType(
  '@@foottyAPI-team/GET_ALL_PLAYERS_IN_TEAM'
);

export const actionCreators = {
  resetFoottyAPITeam: createAction(RESET_FOOTTY_API_TEAM),
  getAllPlayersInTeam: createAction(GET_ALL_PLAYERS_IN_TEAM.INDEX),
  getAllPlayersInTeamRequest: createAction(GET_ALL_PLAYERS_IN_TEAM.REQUEST),
  getAllPlayersInTeamComplete: createAction(GET_ALL_PLAYERS_IN_TEAM.SUCCESS),
  getAllPlayersInTeamFail: createAction(GET_ALL_PLAYERS_IN_TEAM.FAIL),
};

export const initialState: FoottyAPITeamState = {
  allPlayersInTeam: null,
  allPlayersInTeamAPIStatus: {
    isGetAllPlayersInTeamLoading: false,
    isGetAllPlayersInTeamLoaded: false,
    getAllPlayersInTeamError: null,
  },
};

export const reducer = handleActions(
  {
    [RESET_FOOTTY_API_TEAM]: () => initialState,
    [GET_ALL_PLAYERS_IN_TEAM.REQUEST]: (state: FoottyAPITeamState) => {
      return produce(state, (draft) => {
        draft.allPlayersInTeam = null;
        draft.allPlayersInTeamAPIStatus.isGetAllPlayersInTeamLoading = true;
        draft.allPlayersInTeamAPIStatus.isGetAllPlayersInTeamLoaded = false;
        draft.allPlayersInTeamAPIStatus.getAllPlayersInTeamError = null;
      });
    },
    [GET_ALL_PLAYERS_IN_TEAM.SUCCESS]: (state: FoottyAPITeamState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.allPlayersInTeam = action.payload as any;
        }
        draft.allPlayersInTeamAPIStatus.isGetAllPlayersInTeamLoading = false;
        draft.allPlayersInTeamAPIStatus.isGetAllPlayersInTeamLoaded = true;
      });
    },
    [GET_ALL_PLAYERS_IN_TEAM.FAIL]: (state: FoottyAPITeamState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.allPlayersInTeamAPIStatus.getAllPlayersInTeamError = action.payload as any;
        }
        draft.allPlayersInTeamAPIStatus.isGetAllPlayersInTeamLoading = false;
      });
    },
  },
  initialState
);
