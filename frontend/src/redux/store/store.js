import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { movieListReducer } from '../reducers/movieReducers'

const combinedReducers = combineReducers({
  movieList: movieListReducer
});

const initState = {};

const middleware = [thunk];

const appStore = createStore(
  combinedReducers,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default appStore