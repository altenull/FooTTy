import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

import sagaHelper from '../../helpers/saga/saga.helper';
import { FoottyAPILeagueState } from '../../models/foottyAPI/foottyAPI-league.store.model';

const RESET_FOOTTY_API_LEAGUE = '@@foottyAPI-league/RESET_FOOTTY_API_LEAGUE';
export const GET_LEAGUE_DETAILS = sagaHelper.createAsyncActionsType('@@foottyAPI-league/GET_LEAGUE_DETAILS');
export const GET_ALL_TEAMS_IN_LEAGUE = sagaHelper.createAsyncActionsType('@@foottyAPI-league/GET_ALL_TEAMS_IN_LEAGUE');
export const GET_LEAGUE_SEASONS = sagaHelper.createAsyncActionsType('@@foottyAPI-league/GET_LEAGUE_SEASONS');

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
  },
  initialState
);
