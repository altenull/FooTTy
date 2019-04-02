import { bindActionCreators } from 'redux';

import store from '.';
import { actionCreators as coreActions } from './modules/core/core.module';
import { actionCreators as foottyAPIActions } from './modules/foottyAPI/foottyAPI.module';

const { dispatch } = store;

export const CoreActions = bindActionCreators(coreActions, dispatch);
export const FoottyAPIActions = bindActionCreators(foottyAPIActions, dispatch);
