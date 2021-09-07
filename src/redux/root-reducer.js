import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

//local storage
import storage from "redux-persist/lib/storage";

//import session storage
//import sessionStorage from "redux-persist/es/storage/session";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  //whitelist is what reducer we want to persist
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
