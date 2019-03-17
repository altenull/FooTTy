import { AnyAction, combineReducers, Reducer } from 'redux';

import { CoreState } from '../models/core.model';
import { reducer as coreReducer } from './core/core.module';

export interface RootState {
  core: CoreState;
}

export const rootReducer = combineReducers({
  core: coreReducer as Reducer<CoreState, AnyAction>,
});
