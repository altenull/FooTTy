import { bindActionCreators } from 'redux';

import store from '.';
import { actionCreators as coreActions } from './modules/core/core.module';

const { dispatch } = store;

export const CoreActions = bindActionCreators(coreActions, dispatch);
