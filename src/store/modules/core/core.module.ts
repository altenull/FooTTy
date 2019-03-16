import { createAction, handleActions } from 'redux-actions';

import { CoreState } from '../../models/core/core.model';

const RESET_CORE = '@@core/RESET_CORE';

export const actionCreators = {
  resetCore: createAction(RESET_CORE),
};

const initialState: CoreState = {
  core: false,
};

export const reducer = handleActions(
  {
    [RESET_CORE]: () => initialState,
  },
  initialState
);
