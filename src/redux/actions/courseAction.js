import * as types from "./actionTypes";
import courseApi from "../../api/mockCoursApi";

export function loadCoursesSucces(courses) {
  return { type: types.LOAD_COURCES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

/* THUNK */
export function loadCourses() {
  return function(dispatch) {
    return courseApi
      .getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSucces(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error => {
        throw error;
      });
  };
}
