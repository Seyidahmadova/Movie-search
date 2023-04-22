import { ACTION_TYPES } from "../actionTypes";

const initialState = {
  list: [],
};

export function listsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_LIST:
      return { ...state, list: [...state.list, action.payload] };
    case "REMOVE_MOVIE":
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
