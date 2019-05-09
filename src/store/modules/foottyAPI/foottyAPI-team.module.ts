import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

import sagaStoreHelper from '../../helpers/saga/saga.store.helper';
import { FoottyAPITeamState } from '../../models/foottyAPI/foottyAPI-team.store.model';

const RESET_FOOTTY_API_TEAM = '@@foottyAPI-team/RESET_FOOTTY_API_TEAM';
export const GET_ALL_PLAYERS_IN_TEAM = sagaStoreHelper.createAsyncActionsType(
  '@@foottyAPI-team/GET_ALL_PLAYERS_IN_TEAM'
);
export const GET_NEXT_5_EVENTS = sagaStoreHelper.createAsyncActionsType('@@foottyAPI-team/GET_NEXT_5_EVENTS');
export const GET_LAST_5_EVENTS = sagaStoreHelper.createAsyncActionsType('@@foottyAPI-team/GET_LAST_5_EVENTS');

export const actionCreators = {
  resetFoottyAPITeam: createAction(RESET_FOOTTY_API_TEAM),
  getAllPlayersInTeam: createAction(GET_ALL_PLAYERS_IN_TEAM.INDEX),
  getAllPlayersInTeamRequest: createAction(GET_ALL_PLAYERS_IN_TEAM.REQUEST),
  getAllPlayersInTeamComplete: createAction(GET_ALL_PLAYERS_IN_TEAM.SUCCESS),
  getAllPlayersInTeamFail: createAction(GET_ALL_PLAYERS_IN_TEAM.FAIL),
  getNext5Events: createAction(GET_NEXT_5_EVENTS.INDEX),
  getNext5EventsRequest: createAction(GET_NEXT_5_EVENTS.REQUEST),
  getNext5EventsComplete: createAction(GET_NEXT_5_EVENTS.SUCCESS),
  getNext5EventsFail: createAction(GET_NEXT_5_EVENTS.FAIL),
  getLast5Events: createAction(GET_LAST_5_EVENTS.INDEX),
  getLast5EventsRequest: createAction(GET_LAST_5_EVENTS.REQUEST),
  getLast5EventsComplete: createAction(GET_LAST_5_EVENTS.SUCCESS),
  getLast5EventsFail: createAction(GET_LAST_5_EVENTS.FAIL),
};

export const initialState: FoottyAPITeamState = {
  allPlayersInTeam: null,
  allPlayersInTeamAPIStatus: {
    isGetAllPlayersInTeamLoading: false,
    isGetAllPlayersInTeamLoaded: false,
    getAllPlayersInTeamError: null,
  },
  next5Events: null,
  next5EventsAPIStatus: {
    isGetNext5EventsLoading: false,
    isGetNext5EventsLoaded: false,
    getNext5EventsError: null,
  },
  last5Events: null,
  last5EventsAPIStatus: {
    isGetLast5EventsLoading: false,
    isGetLast5EventsLoaded: false,
    getLast5EventsError: null,
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
    [GET_NEXT_5_EVENTS.REQUEST]: (state: FoottyAPITeamState) => {
      return produce(state, (draft) => {
        draft.next5Events = null;
        draft.next5EventsAPIStatus.isGetNext5EventsLoading = true;
        draft.next5EventsAPIStatus.isGetNext5EventsLoaded = false;
        draft.next5EventsAPIStatus.getNext5EventsError = null;
      });
    },
    [GET_NEXT_5_EVENTS.SUCCESS]: (state: FoottyAPITeamState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.next5Events = action.payload as any;
        }
        draft.next5EventsAPIStatus.isGetNext5EventsLoading = false;
        draft.next5EventsAPIStatus.isGetNext5EventsLoaded = true;
      });
    },
    [GET_NEXT_5_EVENTS.FAIL]: (state: FoottyAPITeamState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.next5EventsAPIStatus.getNext5EventsError = action.payload as any;
        }
        draft.next5EventsAPIStatus.isGetNext5EventsLoading = false;
      });
    },
    [GET_LAST_5_EVENTS.REQUEST]: (state: FoottyAPITeamState) => {
      return produce(state, (draft) => {
        draft.last5Events = null;
        draft.last5EventsAPIStatus.isGetLast5EventsLoading = true;
        draft.last5EventsAPIStatus.isGetLast5EventsLoaded = false;
        draft.last5EventsAPIStatus.getLast5EventsError = null;
      });
    },
    [GET_LAST_5_EVENTS.SUCCESS]: (state: FoottyAPITeamState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.last5Events = action.payload as any;
        }
        draft.last5EventsAPIStatus.isGetLast5EventsLoading = false;
        draft.last5EventsAPIStatus.isGetLast5EventsLoaded = true;
      });
    },
    [GET_LAST_5_EVENTS.FAIL]: (state: FoottyAPITeamState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.last5EventsAPIStatus.getLast5EventsError = action.payload as any;
        }
        draft.last5EventsAPIStatus.isGetLast5EventsLoading = false;
      });
    },
  },
  initialState
);
