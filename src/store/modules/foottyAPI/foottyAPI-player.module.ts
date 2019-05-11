import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

import sagaStoreHelper from '../../helpers/saga/saga.store.helper';
import { FoottyAPIPlayerState } from '../../models/foottyAPI/foottyAPI-player.store.model';

const RESET_FOOTTY_API_PLAYER = '@@foottyAPI-player/RESET_FOOTTY_API_PLAYER';
export const GET_FORMER_TEAMS = sagaStoreHelper.createAsyncActionsType('@@foottyAPI-player/GET_FORMER_TEAMS');
export const GET_HONOURS = sagaStoreHelper.createAsyncActionsType('@@foottyAPI-player/GET_HONOURS');

export const actionCreators = {
  resetFoottyAPIPlayer: createAction(RESET_FOOTTY_API_PLAYER),
  getFormerTeams: createAction(GET_FORMER_TEAMS.INDEX),
  getFormerTeamsRequest: createAction(GET_FORMER_TEAMS.REQUEST),
  getFormerTeamsComplete: createAction(GET_FORMER_TEAMS.SUCCESS),
  getFormerTeamsFail: createAction(GET_FORMER_TEAMS.FAIL),
  getHonours: createAction(GET_HONOURS.INDEX),
  getHonoursRequest: createAction(GET_HONOURS.REQUEST),
  getHonoursComplete: createAction(GET_HONOURS.SUCCESS),
  getHonoursFail: createAction(GET_HONOURS.FAIL),
};

export const initialState: FoottyAPIPlayerState = {
  formerTeams: null,
  formerTeamsAPIStatus: {
    isGetFormerTeamsLoading: false,
    isGetFormerTeamsLoaded: false,
    getFormerTeamsError: null,
  },
  honours: null,
  honoursAPIStatus: {
    isGetHonoursLoading: false,
    isGetHonoursLoaded: false,
    getHonoursError: null,
  },
};

export const reducer = handleActions(
  {
    [RESET_FOOTTY_API_PLAYER]: () => initialState,
    [GET_FORMER_TEAMS.REQUEST]: (state: FoottyAPIPlayerState) => {
      return produce(state, (draft) => {
        draft.formerTeams = null;
        draft.formerTeamsAPIStatus.isGetFormerTeamsLoading = true;
        draft.formerTeamsAPIStatus.isGetFormerTeamsLoaded = false;
        draft.formerTeamsAPIStatus.getFormerTeamsError = null;
      });
    },
    [GET_FORMER_TEAMS.SUCCESS]: (state: FoottyAPIPlayerState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.formerTeams = action.payload as any;
        }
        draft.formerTeamsAPIStatus.isGetFormerTeamsLoading = false;
        draft.formerTeamsAPIStatus.isGetFormerTeamsLoaded = true;
      });
    },
    [GET_FORMER_TEAMS.FAIL]: (state: FoottyAPIPlayerState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.formerTeamsAPIStatus.getFormerTeamsError = action.payload as any;
        }
        draft.formerTeamsAPIStatus.isGetFormerTeamsLoading = false;
      });
    },
    [GET_HONOURS.REQUEST]: (state: FoottyAPIPlayerState) => {
      return produce(state, (draft) => {
        draft.honours = null;
        draft.honoursAPIStatus.isGetHonoursLoading = true;
        draft.honoursAPIStatus.isGetHonoursLoaded = false;
        draft.honoursAPIStatus.getHonoursError = null;
      });
    },
    [GET_HONOURS.SUCCESS]: (state: FoottyAPIPlayerState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.honours = action.payload as any;
        }
        draft.honoursAPIStatus.isGetHonoursLoading = false;
        draft.honoursAPIStatus.isGetHonoursLoaded = true;
      });
    },
    [GET_HONOURS.FAIL]: (state: FoottyAPIPlayerState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.honoursAPIStatus.getHonoursError = action.payload as any;
        }
        draft.honoursAPIStatus.isGetHonoursLoading = false;
      });
    },
  },
  initialState
);
