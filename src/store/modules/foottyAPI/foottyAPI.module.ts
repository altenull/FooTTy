import { AnyAction, combineReducers, Reducer } from 'redux';

import { FoottyAPILeagueState } from '../../models/foottyAPI/foottyAPI-league.store.model';
import {
  actionCreators as foottyAPILeagueActionCreators,
  reducer as foottyAPILeagueReducer,
} from './foottyAPI-league.module';

export const actionCreators = {
  ...foottyAPILeagueActionCreators,
};

export const reducer = combineReducers({
  foottyAPILeague: foottyAPILeagueReducer as Reducer<FoottyAPILeagueState, AnyAction>,
});
