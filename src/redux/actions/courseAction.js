import * as types from './actionTypes';
import courseApi from '../../api/mockCoursApi';

export function loadCoursesSucces(courses) {
    return { type: types.LOAD_COURCES_SUCCESS, courses};
}

/* THUNK */
export function loadCourses() {
    return function(dispatch){
        return courseApi.getAllCourses().then(courses =>{
            dispatch(loadCoursesSucces(courses));
        }).catch(error => {
            throw(error);
        });
    };
}