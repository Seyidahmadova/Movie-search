import { ACTION_TYPES } from "../actionTypes";
export const listsAction = (movie) => {
  return {
    type: ACTION_TYPES.GET_LIST,
    payload: movie,
  };
};
export const removeListAction = (movie) => {
  return {
    type: "REMOVE_MOVIE",
    payload: movie,
  };
};
