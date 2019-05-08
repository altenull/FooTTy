import { createAction, handleActions } from 'redux-actions';

import { FoottyAPITeamState } from '../../models/foottyAPI/foottyAPI-team.store.model';

const RESET_FOOTTY_API_TEAM = '@@foottyAPI-team/RESET_FOOTTY_API_TEAM';

export const actionCreators = {
  resetFoottyAPITeam: createAction(RESET_FOOTTY_API_TEAM),
};

export const initialState: FoottyAPITeamState = {};

export const reducer = handleActions(
  {
    [RESET_FOOTTY_API_TEAM]: () => initialState,
  },
  initialState
);
