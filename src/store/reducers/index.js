import { combineReducers } from "redux";
import Auth from "./Auth";
import Loader from "./Loader";
import Notification from "./Notification";

const RootReducer = combineReducers({
  Auth,
  Loader,
  Notification,
});

export default RootReducer;
