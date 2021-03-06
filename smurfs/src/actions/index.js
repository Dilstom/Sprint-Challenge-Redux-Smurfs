import withAuth from '../utils/withAuth';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
 dispatch({ type: FETCH_START });
 withAuth()
  //  axios
  //   .get('http://localhost:3333/smurfs')
  .get('/smurfs')
  .then(res => {
   //    console.log('checking res: ', res);
   dispatch({ type: FETCH_SUCCESS, payload: res.data });
  })
  .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const addSmurf = newSmurf => dispatch => {
 //  axios
 //   .post('http://localhost:3333/smurfs', newSmurf)
 withAuth()
  .post('/smurfs', newSmurf)
  .then(res => {
   //    console.log(' checking res in addSmurf: ', res);
   dispatch({ type: SUCCESS, payload: res.data });
  })
  .catch(err => {
   dispatch({ type: ERROR, payload: err });
  });
};

export const updateSmurf = (id, newSmurf) => dispatch => {
 //  axios
 //   .put(`http://localhost:3333/smurfs/${id}`, newSmurf)
 withAuth()
  .put(`/smurfs/${id}`, newSmurf)
  .then(res => {
   //    console.log(' checking res in updateSmurf', res);
   dispatch({ type: SUCCESS, payload: res.data });
  })
  .catch(err => {
   dispatch({ type: ERROR, payload: err });
  });
};

export const deleteSmurf = id => dispatch => {
 //  axios
 //   .delete(`http://localhost:3333/smurfs/${id}`)
 withAuth()
  .delete(`/smurfs/${id}`)
  .then(res => {
   //    console.log(' checking res in delSmurf', res);
   dispatch({ type: SUCCESS, payload: res.data });
  })
  .catch(err => {
   dispatch({ type: ERROR, payload: err });
  });
};

export const login = creds => dispatch => {
 dispatch({ type: LOGIN_START });
 return (
  withAuth()
   //   .post('http://localhost:3333/api/login', creds)
   .post('/login', creds)
   .then(res => {
    console.log('RES in login', res);
    localStorage.setItem('userToken', res.data.payload);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.userName });
    return true;
   })
   .catch(err =>
    dispatch({ type: LOGIN_ERROR, payload: err.response.data.error })
   )
 );
};
