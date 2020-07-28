export const MetaDataActionTypes = {
 FETCH_METADATA: "FETCH_METADATA",
 FETCH_METADATA_SUCCESS: "FECTH_METADATA_SUCCESS",
 FETCH_METADATA_ERROR: "FETCH_METADATA_ERROR"
};

export const FetchMetaData = () => ({
 type: MetaDataActionTypes.FETCH_METADATA
});

export const FetchMetaDataSuccess = (payload) => ({
 type: MetaDataActionTypes.FETCH_METADATA_SUCCESS, payload
});

export const FetchMetaDataError = (error) => ({
 type: MetaDataActionTypes.FETCH_METADATA_ERROR, error
});
