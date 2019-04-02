import { AnyAction, combineReducers, Reducer } from 'redux';

import { CoreState } from '../models/core/core.model';
import { FoottyAPIState } from '../models/foottyAPI/foottyAPI.store.model';
import { reducer as coreReducer } from './core/core.module';
import { reducer as foottyAPIReducer } from './foottyAPI/foottyAPI.module';

export interface RootState {
  core: CoreState;
  foottyAPI: FoottyAPIState;
}

export const rootReducer = combineReducers({
  core: coreReducer as Reducer<CoreState, AnyAction>,
  foottyAPI: foottyAPIReducer as Reducer<FoottyAPIState, AnyAction>,
});
