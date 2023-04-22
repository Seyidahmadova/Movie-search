import { ACTION_TYPES } from "../actionTypes";
export const favlistsAction = (favlist, inputName) => {
  return {
    type: ACTION_TYPES.GET_FAV,
    payload:{ favlist, inputName}
  };
};