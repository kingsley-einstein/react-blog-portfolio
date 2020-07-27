export const PostActionTypes = {
 GET_POST: "GET_POST",
 GET_POST_SUCCESS: "GET_POST_SUCCESS",
 GET_POST_FAILURE: "GET_POST_FAILURE"
};

export const GetPost = () => ({
 type: PostActionTypes.GET_POST
});

export const GetPostSuccess = (payload) => ({
 type: PostActionTypes.GET_POST_SUCCESS, payload
});

export const GetPostFailure = (error) => ({
 type: PostActionTypes.GET_POST_FAILURE, error
});


