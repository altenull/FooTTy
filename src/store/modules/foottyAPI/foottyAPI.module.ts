import { AnyAction, combineReducers, Reducer } from 'redux';

import { FoottyAPILeagueState } from '../../models/foottyAPI/foottyAPI-league.store.model';
import { FoottyAPITeamState } from '../../models/foottyAPI/foottyAPI-team.store.model';
import {
  actionCreators as foottyAPILeagueActionCreators,
  reducer as foottyAPILeagueReducer,
} from './foottyAPI-league.module';
import { actionCreators as foottyAPITeamActionCreators, reducer as foottyAPITeamReducer } from './foottyAPI-team.module';

export const actionCreators = {
  ...foottyAPILeagueActionCreators,
  ...foottyAPITeamActionCreators,
};

export const reducer = combineReducers({
  foottyAPILeague: foottyAPILeagueReducer as Reducer<FoottyAPILeagueState, AnyAction>,
  foottyAPITeam: foottyAPITeamReducer as Reducer<FoottyAPITeamState, AnyAction>,
});
