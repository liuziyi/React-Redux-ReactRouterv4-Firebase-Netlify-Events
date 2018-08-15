import { GET_USER } from '../actionTypes';
import { auth } from '../config/firebase';

export function getUser(){
  return dispatch => {
    auth.onAuthStateChanged(user => {
      dispatch({ type: GET_USER, payload: user });
    });
  }
}
