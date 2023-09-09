import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from './currentUser'
import questionsReducer from './Questions'
import usersReducer from "./UsersReducer";
export default combineReducers({
    authReducer,
    currentUserReducer,
    questionsReducer,
    usersReducer
})