import { FetchMetaData, FetchMetaDataError, FetchMetaDataSuccess } from "../actions/metadataActions";

export default (source) => {
 return async dispatch => {
  dispatch(FetchMetaData());
  try {
   const res = await fetch(source);
   const data = await res.text();
   console.log(data, res);
   dispatch(FetchMetaDataSuccess(data));
  } catch (error) {
   dispatch(FetchMetaDataError(error.message));
  }
 }
}
