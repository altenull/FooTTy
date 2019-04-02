import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

import sagaHelper from '../../helpers/saga/saga.helper';
import { FoottyAPILeagueState } from '../../models/foottyAPI/foottyAPI-league.store.model';

const RESET_FOOTTY_API_LEAGUE = '@@foottyAPI-league/RESET_FOOTTY_API_LEAGUE';
export const GET_LEAGUE_DETAILS = sagaHelper.createAsyncActionsType('@@foottyAPI-league/GET_LEAGUE_DETAILS');

export const actionCreators = {
  resetFoottyAPILeague: createAction(RESET_FOOTTY_API_LEAGUE),
  getLeagueDetails: createAction(GET_LEAGUE_DETAILS.INDEX),
  getLeagueDetailsRequest: createAction(GET_LEAGUE_DETAILS.REQUEST),
  getLeagueDetailsComplete: createAction(GET_LEAGUE_DETAILS.SUCCESS),
  getLeagueDetailsFail: createAction(GET_LEAGUE_DETAILS.FAIL),
};

export const initialState: FoottyAPILeagueState = {
  leagueDetails: null,
  leagueDetailsAPIStatus: {
    isGetLeagueDetailsLoading: false,
    isGetLeagueDetailsLoaded: false,
    getLeagueDetailsError: null,
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
  },
  initialState
);
