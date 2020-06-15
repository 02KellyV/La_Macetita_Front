import * as ActionTypes from '../action-types'

const initialState = {
    active: false
};


const Loader = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_LOADER:
      return { ...state, active: true };
    case ActionTypes.HIDE_LOADER:
      return { ...state, active: false };
    default:
      return state;
  }
};

export default Loader;
