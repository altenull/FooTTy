import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

import { LeagueState } from '../../models/league/league.store.model';

const RESET_LEAGUE = '@@league/RESET_LEAGUE';
export const SELECT_SEASON = '@@league/SELECT_SEASON';

export const actionCreators = {
  resetLeague: createAction(RESET_LEAGUE),
  selectSeason: createAction(SELECT_SEASON),
};

export const initialState: LeagueState = {
  selectedSeason: '',
};

export const reducer = handleActions(
  {
    [RESET_LEAGUE]: () => initialState,
    [SELECT_SEASON]: (state: LeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.selectedSeason = action.payload.selectedSeason;
        }
      });
    },
  },
  initialState
);
