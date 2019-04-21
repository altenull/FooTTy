import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

import sagaStoreHelper from '../../helpers/saga/saga.store.helper';
import { FoottyAPILeagueState } from '../../models/foottyAPI/foottyAPI-league.store.model';

const RESET_FOOTTY_API_LEAGUE = '@@foottyAPI-league/RESET_FOOTTY_API_LEAGUE';
export const GET_LEAGUE_DETAILS = sagaStoreHelper.createAsyncActionsType('@@foottyAPI-league/GET_LEAGUE_DETAILS');
export const GET_ALL_TEAMS_IN_LEAGUE = sagaStoreHelper.createAsyncActionsType(
  '@@foottyAPI-league/GET_ALL_TEAMS_IN_LEAGUE'
);
export const GET_LEAGUE_SEASONS = sagaStoreHelper.createAsyncActionsType('@@foottyAPI-league/GET_LEAGUE_SEASONS');
export const GET_NEXT_EVENTS = sagaStoreHelper.createAsyncActionsType('@@foottyAPI-league/GET_NEXT_EVENTS');
export const GET_LEAGUE_TABLE = sagaStoreHelper.createAsyncActionsType('@@foottyAPI-league/GET_LEAGUE_TABLE');

export const actionCreators = {
  resetFoottyAPILeague: createAction(RESET_FOOTTY_API_LEAGUE),
  getLeagueDetails: createAction(GET_LEAGUE_DETAILS.INDEX),
  getLeagueDetailsRequest: createAction(GET_LEAGUE_DETAILS.REQUEST),
  getLeagueDetailsComplete: createAction(GET_LEAGUE_DETAILS.SUCCESS),
  getLeagueDetailsFail: createAction(GET_LEAGUE_DETAILS.FAIL),
  getAllTeamsInLeague: createAction(GET_ALL_TEAMS_IN_LEAGUE.INDEX),
  getAllTeamsInLeagueRequest: createAction(GET_ALL_TEAMS_IN_LEAGUE.REQUEST),
  getAllTeamsInLeagueComplete: createAction(GET_ALL_TEAMS_IN_LEAGUE.SUCCESS),
  getAllTeamsInLeagueFail: createAction(GET_ALL_TEAMS_IN_LEAGUE.FAIL),
  getLeagueSeasons: createAction(GET_LEAGUE_SEASONS.INDEX),
  getLeagueSeasonsRequest: createAction(GET_LEAGUE_SEASONS.REQUEST),
  getLeagueSeasonsComplete: createAction(GET_LEAGUE_SEASONS.SUCCESS),
  getLeagueSeasonsFail: createAction(GET_LEAGUE_SEASONS.FAIL),
  getNextEvents: createAction(GET_NEXT_EVENTS.INDEX),
  getNextEventsRequest: createAction(GET_NEXT_EVENTS.REQUEST),
  getNextEventsComplete: createAction(GET_NEXT_EVENTS.SUCCESS),
  getNextEventsFail: createAction(GET_NEXT_EVENTS.FAIL),
  getLeagueTable: createAction(GET_LEAGUE_TABLE.INDEX),
  getLeagueTableRequest: createAction(GET_LEAGUE_TABLE.REQUEST),
  getLeagueTableComplete: createAction(GET_LEAGUE_TABLE.SUCCESS),
  getLeagueTableFail: createAction(GET_LEAGUE_TABLE.FAIL),
};

export const initialState: FoottyAPILeagueState = {
  leagueDetails: null,
  leagueDetailsAPIStatus: {
    isGetLeagueDetailsLoading: false,
    isGetLeagueDetailsLoaded: false,
    getLeagueDetailsError: null,
  },
  allTeamsInLeague: null,
  allTeamsInLeagueAPIStatus: {
    isGetAllTeamsInLeagueLoading: false,
    isGetAllTeamsInLeagueLoaded: false,
    getAllTeamsInLeagueError: null,
  },
  seasons: [],
  seasonsAPIStatus: {
    isGetSeasonsLoading: false,
    isGetSeasonsLoaded: false,
    getSeasonsError: null,
  },
  nextEvents: null,
  nextEventsAPIStatus: {
    isGetNextEventsLoading: false,
    isGetNextEventsLoaded: false,
    getNextEventsError: null,
  },
  leagueTable: null,
  leagueTableAPIStatus: {
    isGetLeagueTableLoading: false,
    isGetLeagueTableLoaded: false,
    getLeagueTableError: null,
  },
};

export const reducer = handleActions(
  {
    [RESET_FOOTTY_API_LEAGUE]: () => initialState,
    [GET_LEAGUE_DETAILS.REQUEST]: (state: FoottyAPILeagueState) => {
      return produce(state, (draft) => {
        draft.leagueDetails = null;
        draft.leagueDetailsAPIStatus.isGetLeagueDetailsLoading = true;
        draft.leagueDetailsAPIStatus.isGetLeagueDetailsLoaded = false;
        draft.leagueDetailsAPIStatus.getLeagueDetailsError = null;
      });
    },
    [GET_LEAGUE_DETAILS.SUCCESS]: (state: FoottyAPILeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.leagueDetails = action.payload as any;
        }
        draft.leagueDetailsAPIStatus.isGetLeagueDetailsLoading = false;
        draft.leagueDetailsAPIStatus.isGetLeagueDetailsLoaded = true;
      });
    },
    [GET_LEAGUE_DETAILS.FAIL]: (state: FoottyAPILeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.leagueDetailsAPIStatus.getLeagueDetailsError = action.payload as any;
        }
        draft.leagueDetailsAPIStatus.isGetLeagueDetailsLoading = false;
      });
    },
    [GET_ALL_TEAMS_IN_LEAGUE.REQUEST]: (state: FoottyAPILeagueState) => {
      return produce(state, (draft) => {
        draft.allTeamsInLeague = null;
        draft.allTeamsInLeagueAPIStatus.isGetAllTeamsInLeagueLoading = true;
        draft.allTeamsInLeagueAPIStatus.isGetAllTeamsInLeagueLoaded = false;
        draft.allTeamsInLeagueAPIStatus.getAllTeamsInLeagueError = null;
      });
    },
    [GET_ALL_TEAMS_IN_LEAGUE.SUCCESS]: (state: FoottyAPILeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.allTeamsInLeague = action.payload as any;
        }
        draft.allTeamsInLeagueAPIStatus.isGetAllTeamsInLeagueLoading = false;
        draft.allTeamsInLeagueAPIStatus.isGetAllTeamsInLeagueLoaded = true;
      });
    },
    [GET_ALL_TEAMS_IN_LEAGUE.FAIL]: (state: FoottyAPILeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.allTeamsInLeagueAPIStatus.getAllTeamsInLeagueError = action.payload as any;
        }
        draft.allTeamsInLeagueAPIStatus.isGetAllTeamsInLeagueLoading = false;
      });
    },
    [GET_LEAGUE_SEASONS.REQUEST]: (state: FoottyAPILeagueState) => {
      return produce(state, (draft) => {
        draft.seasons = [];
        draft.seasonsAPIStatus.isGetSeasonsLoading = true;
        draft.seasonsAPIStatus.isGetSeasonsLoaded = false;
        draft.seasonsAPIStatus.getSeasonsError = null;
      });
    },
    [GET_LEAGUE_SEASONS.SUCCESS]: (state: FoottyAPILeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.seasons = action.payload as any;
        }
        draft.seasonsAPIStatus.isGetSeasonsLoading = false;
        draft.seasonsAPIStatus.isGetSeasonsLoaded = true;
      });
    },
    [GET_LEAGUE_SEASONS.FAIL]: (state: FoottyAPILeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.seasonsAPIStatus.getSeasonsError = action.payload as any;
        }
        draft.seasonsAPIStatus.isGetSeasonsLoading = false;
      });
    },
    [GET_NEXT_EVENTS.REQUEST]: (state: FoottyAPILeagueState) => {
      return produce(state, (draft) => {
        draft.nextEvents = null;
        draft.nextEventsAPIStatus.isGetNextEventsLoading = true;
        draft.nextEventsAPIStatus.isGetNextEventsLoaded = false;
        draft.nextEventsAPIStatus.getNextEventsError = null;
      });
    },
    [GET_NEXT_EVENTS.SUCCESS]: (state: FoottyAPILeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.nextEvents = action.payload as any;
        }
        draft.nextEventsAPIStatus.isGetNextEventsLoading = false;
        draft.nextEventsAPIStatus.isGetNextEventsLoaded = true;
      });
    },
    [GET_NEXT_EVENTS.FAIL]: (state: FoottyAPILeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.nextEventsAPIStatus.getNextEventsError = action.payload as any;
        }
        draft.nextEventsAPIStatus.isGetNextEventsLoading = false;
      });
    },
    [GET_LEAGUE_TABLE.REQUEST]: (state: FoottyAPILeagueState) => {
      return produce(state, (draft) => {
        draft.leagueTable = null;
        draft.leagueTableAPIStatus.isGetLeagueTableLoading = true;
        draft.leagueTableAPIStatus.isGetLeagueTableLoaded = false;
        draft.leagueTableAPIStatus.getLeagueTableError = null;
      });
    },
    [GET_LEAGUE_TABLE.SUCCESS]: (state: FoottyAPILeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.leagueTable = action.payload as any;
        }
        draft.leagueTableAPIStatus.isGetLeagueTableLoading = false;
        draft.leagueTableAPIStatus.isGetLeagueTableLoaded = true;
      });
    },
    [GET_LEAGUE_TABLE.FAIL]: (state: FoottyAPILeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.leagueTableAPIStatus.getLeagueTableError = action.payload as any;
        }
        draft.leagueTableAPIStatus.isGetLeagueTableLoading = false;
      });
    },
  },
  initialState
);
