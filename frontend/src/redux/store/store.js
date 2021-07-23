import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { movieListReducer } from '../reducers/movieReducers'
import { userLoginReducer } from "../reducers/userReducers";

const combinedReducers = combineReducers({
  movieList: movieListReducer,
  userLogin: userLoginReducer
});

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ?
JSON.parse(localStorage.getItem('userInfo')) : null

const initState = {
  userLogin: { userInfo: userInfoFromLocalStorage }
};

const middleware = [thunk];

const appStore = createStore(
  combinedReducers,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default appStore