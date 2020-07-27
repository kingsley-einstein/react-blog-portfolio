import { ActionTypes } from "../actions/postActions";

const initialState = {
 posts: [],
 post: null,
 error: null,
 loading: false
};

export default (state = initialState, action) => {
 switch(action.type) {
  case ActionTypes.GET_POST: {
   return {
    ...state,
    loading: true
   };
  }
  case ActionTypes.GET_POST_SUCCESS: {
   return {
    ...state,
    loading: false,
    post: action.payload
   };
  }
  case ActionTypes.GET_POST_FAILURE: {
   return {
    ...state,
    loading: false,
    error: action.error
   };
  }
  default:
   return state;
 }
}
