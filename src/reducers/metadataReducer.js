import { MetaDataActionTypes } from "../actions/metadataActions";

const initialState = {
 data: null,
 error: null,
 loading: false
};

export default (state = initialState, action) => {
 switch(action.type) {
  case MetaDataActionTypes.FETCH_METADATA:
   return {
    ...state,
    loading: true
   };
  case MetaDataActionTypes.FETCH_METADATA_SUCCESS:
   return {
    ...state,
    loading: false,
    data: action.payload
   };
  case MetaDataActionTypes.FETCH_METADATA_ERROR:
   return {
    ...state,
    loading: false,
    error: action.error
   };
  default:
   return state;
 }
}
