import * as types from "./actionTypes";
import courseApi from "../../api/mockAuthorApi";

export function loadAuthorsSucces(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

/* THUNK */
export function loadAuthors() {
  return function(dispatch) {
    return courseApi
      .getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSucces(authors));
      })
      .catch(error => {
        throw error;
      });
  };
}
