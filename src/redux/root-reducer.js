import { combineReducers } from "redux";

import cartDirectoryReducer from "./cart-directory/cart-directory.reducer";

const rootReducer = combineReducers({
    directory: cartDirectoryReducer
});

export default rootReducer;