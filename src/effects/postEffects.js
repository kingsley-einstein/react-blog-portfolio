import { GetPost, GetPostFailure, GetPostSuccess } from "../actions/postActions";

export default (id) => {
 return async dispatch => {
  dispatch(GetPost());
  try {
   const res = await fetch(`/posts/${id}`);
   const data = await res.json();
   dispatch(GetPostSuccess(data));
  } catch (error) {
   dispatch(GetPostFailure(error.message));
  }
 }
};
