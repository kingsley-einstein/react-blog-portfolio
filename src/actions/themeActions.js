export const ThemeActionTypes = {
 CHANGE_THEME: "CHANGE_THEME"
};

export const ChangeTheme = payload => ({
 type: ThemeActionTypes.CHANGE_THEME, payload
});
