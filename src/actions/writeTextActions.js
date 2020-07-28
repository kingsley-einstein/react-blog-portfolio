export const WriteTextActionTypes = {
 WRITE_TEXT: "WRITE_TEXT"
};

export const WriteText = (payload) => ({
 type: WriteTextActionTypes.WRITE_TEXT, payload
});
