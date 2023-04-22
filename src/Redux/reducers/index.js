import { combineReducers } from "redux";
import { listsReducer } from "./lists";
import { moviesReducer } from "./movies";
import {favlistsReducer} from "./favlist"

export const reducers = combineReducers({
  lists: listsReducer,
  movies: moviesReducer,
  favlist: favlistsReducer,
});
