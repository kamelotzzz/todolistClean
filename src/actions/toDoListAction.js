import * as ActionType from "./actionTypes";

export const deleteAll = () => {
  return {
    type: ActionType.DELETE_ALL,
  };
};

export const ageUpAsync = () => {
  return {
    type: ActionType.AGE_UP_ASYNC,
  };
};

export const ageDown = () => {
  return {
    type: ActionType.AGE_DOWN,
  };
};

export const delItem = () => {
  return {
    type: ActionType.DEL_ITEM,
  };
};

export const pressEnter = () => {
  return {
    type: ActionType.PRESS_ENTER,
    value: "",
  };
};
