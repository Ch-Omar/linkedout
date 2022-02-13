import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import userReducer from "./userReduser";

const rootReducer = combineReducers({
    articleState: articleReducer,
    userState: userReducer
})

export default rootReducer;