export const ActionTypes = {
 GET_POST: "GET_POST",
 GET_POST_SUCCESS: "GET_POST_SUCCESS",
 GET_POST_FAILURE: "GET_POST_FAILURE"
};

export const GetPost = () => ({
 type: ActionTypes.GET_POST
});

export const GetPostSuccess = (payload) => ({
 type: ActionTypes.GET_POST_SUCCESS, payload
});

export const GetPostFailure = (error) => ({
 type: ActionTypes.GET_POST_FAILURE, error
});


