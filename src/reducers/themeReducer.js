import { ThemeActionTypes } from "../actions/themeActions";

const initialState = {
 darkMode: false
};

export default (state = initialState, action) => {
 switch(action.type) {
  case ThemeActionTypes.CHANGE_THEME:
   return { darkMode: action.payload };
  default:
   return state;
 }
}
