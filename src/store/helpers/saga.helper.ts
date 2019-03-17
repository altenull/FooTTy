import { AsyncActionsType, SagaActionType } from '../models/saga.model';

export const createAsyncActionsType = (actionName: string): AsyncActionsType => {
  return {
    INDEX: `${actionName}_INDEX`,
    REQUEST: `${actionName}_REQUEST`,
    SUCCESS: `${actionName}_SUCCESS`,
    FAIL: `${actionName}_FAIL`,
  };
};

export const createSagaAction = (actionType: string) => {
  return (payload?: any): SagaActionType => ({
    type: actionType,
    payload,
  });
};

export const createAsyncAction = (asyncActionType: AsyncActionsType) => {
  const asyncAction: any = createSagaAction(asyncActionType.INDEX);
  asyncAction.request = createSagaAction(asyncActionType.REQUEST);
  asyncAction.success = createSagaAction(asyncActionType.SUCCESS);
  asyncAction.fail = createSagaAction(asyncActionType.FAIL);
  return asyncAction;
};
