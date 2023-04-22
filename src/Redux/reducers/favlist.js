import { ACTION_TYPES } from "../actionTypes";

const initialState = [{ favlist: [], inputName: "" }];

export function favlistsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_FAV:
      return [
        ...state,
        {
          favlist: action.payload.favlist,
          inputName: action.payload.inputName,
        },
      ];

    default:
      return state;
  }
}
