import { WriteTextActionTypes } from "../actions/writeTextActions";

const initialState = {
 data: ""
};

export default (state = initialState, action) => {
 switch(action.type) {
  case WriteTextActionTypes.WRITE_TEXT:
   return {
    ...state,
    data: action.payload
   };
  default:
   return state;
 }
}
