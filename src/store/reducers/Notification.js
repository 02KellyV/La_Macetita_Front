import * as ActionTypes from '../action-types'

const initialState = {
    message: '',
    type: '',
};


const Notification = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_NOTIFICATION:
      return { ...state, message: action.payload.message, type: action.payload.type };
    default:
      return state;
  }
};

export default Notification;
