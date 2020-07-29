import { CarouselActionTypes } from "../actions/carouselActions";

const initialState = {
 currentComponent: "left"
};

export default (state = initialState, action) => {
 switch(action.type) {
  case CarouselActionTypes.SWITCH:
   return {
    ...state,
    currentComponent: action.payload
   };
  default:
   return state;
 }
};
