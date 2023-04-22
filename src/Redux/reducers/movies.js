import { ACTION_TYPES } from "../actionTypes";

const initialState = {
  movies: [],
};

export function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_Movie:
            return { ...state, movies:[ ...action.payload ]}

        default:
            return state
    }
};
