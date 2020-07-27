import { combineReducers } from "redux";
import postReducer from "./postReducer";
import themeReducer from "./themeReducer";

export default combineReducers({
 post: postReducer,
 theme: themeReducer
});
