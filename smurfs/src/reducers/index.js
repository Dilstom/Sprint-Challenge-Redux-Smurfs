/*
  Be sure to import in all of the action types from `../actions`
*/
import {
 FETCH_START,
 FETCH_SUCCESS,
 ERROR,
 SUCCESS,
 LOGIN_START,
 LOGIN_SUCCESS,
 LOGIN_ERROR,
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const defaultState = {
 smurfs: [],
 fetchingSmurfs: false,
 addingSmurf: false,
 updatingSmurf: false,
 deletingSmurf: false,
 error: null,
 //  username: '',
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default function reducer(state = defaultState, action) {
 switch (action.type) {
  case FETCH_START:
   return { ...state, fetchingSmurfs: true, error: '' };
  case FETCH_SUCCESS:
   return {
    ...state,
    smurfs: action.payload,
    fetchingSmurfs: false,
    error: '',
    errorLogin: '',
    loading: false,
   };
  case ERROR:
   return { ...state, fetchingSmurfs: false, error: action.payload };
  case SUCCESS:
   return { ...state, addingSmurf: true, error: '', smurfs: action.payload };
  case LOGIN_ERROR:
   return { ...state, errorLogin: action.payload };
  case LOGIN_START:
   return { ...state, errorLogin: '', loading: true };
  case LOGIN_SUCCESS:
   return {
    ...state,
    errorLogin: '',
    loading: false,
    // username: action.payload,
   };
  default:
   return state;
 }
}
