import * as ActionTypes from "../action-types";

const user = {
  id: null,
  name: null,
  email: null,
  token: null,
};

const initialState = {
  user,
};

const Auth = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case ActionTypes.SAVE_USER:
      return updateUserLocalStorage(state, payload);
    default:
      return state;
  }
};

export const notification = (payload) => ({
  type: ActionTypes.SHOW_NOTIFICATION,
  payload,
});

const updateUserLocalStorage = (state, user) => {
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user));

  return { ...state, user };
};

export default Auth;
