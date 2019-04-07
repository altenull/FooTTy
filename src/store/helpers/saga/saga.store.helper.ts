import { AsyncActionsType, SagaActionType } from '../../models/saga/saga.model';

const createAsyncActionsType = (actionName: string): AsyncActionsType => {
  return {
    INDEX: `${actionName}_INDEX`,
    REQUEST: `${actionName}_REQUEST`,
    SUCCESS: `${actionName}_SUCCESS`,
    FAIL: `${actionName}_FAIL`,
  };
};

const createSagaAction = (actionType: string) => {
  return (payload?: any): SagaActionType => ({
    type: actionType,
    payload,
  });
};

const createAsyncActions = (asyncActionType: AsyncActionsType) => {
  const asyncAction: any = createSagaAction(asyncActionType.INDEX);
  asyncAction.request = createSagaAction(asyncActionType.REQUEST);
  asyncAction.success = createSagaAction(asyncActionType.SUCCESS);
  asyncAction.fail = createSagaAction(asyncActionType.FAIL);
  return asyncAction;
};

const sagaStoreHelper = { createAsyncActionsType, createSagaAction, createAsyncActions };

export default sagaStoreHelper;
