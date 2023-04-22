import { ACTION_TYPES } from "../actionTypes";

export const moviesAction = (title) => {
  return async function (dispatch) {
    dispatch({
      type: ACTION_TYPES.GET_Movie,
      payload: [],
    });


    fetch(`http://www.omdbapi.com/?s=${title}&apikey=be5a0bd7`)
      .then((res) => res.json())
      .then((resp) => { 
        return dispatch({
          type: ACTION_TYPES.GET_Movie,
          payload: resp.Search,
        });
      })

  };
};

