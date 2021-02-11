import {combineReducers} from "redux";
import auth_reducers from "./auth_reducer";
import message_reducers from "./massang_reducer";

export default combineReducers({
       auth_reducers,
       message_reducers,
});