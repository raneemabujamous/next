import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import rootReducer from "./reducers";

import { combineReducers } from "redux";
import { cartReducer } from "./reducers/cartReducer";
const reducers = combineReducers({
  cart: cartReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
