import * as ActionTypes from "../action-types";

export const saveUser = (payload) => ({
  type: ActionTypes.SAVE_USER,
  payload,
});

export const showLoader = () => ({
  type: ActionTypes.SHOW_LOADER,
});

export const hideLoader = () => ({
  type: ActionTypes.HIDE_LOADER,
});

export const notification = (payload) => ({
  type: ActionTypes.SHOW_NOTIFICATION,
  payload,
});
