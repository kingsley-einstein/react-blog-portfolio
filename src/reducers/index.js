import { combineReducers } from "redux";
import postReducer from "./postReducer";
import themeReducer from "./themeReducer";
import metadataReducer from "./metadataReducer";
import writeTextReducer from "./writeTextReducer";
import carouselReducer from "./carouselReducer";

export default combineReducers({
 post: postReducer,
 theme: themeReducer,
 metadata: metadataReducer,
 selfWriteText: writeTextReducer,
 portfolioCarousel: carouselReducer
});
