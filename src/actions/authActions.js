import { AUTH_USER, AUTH_ERROR } from '../actionTypes';
import { auth, googleProvider } from '../config/firebase';

export function signUp(email, password, callback){
  return async dispatch => {
    try {
      const response = await auth.createUserWithEmailAndPassword(email, password);
      dispatch({ type: AUTH_USER, payload: response.user.uid });
      localStorage.setItem('userId', response.user.uid);
      callback();
    } catch(e) {
      dispatch({ type: AUTH_ERROR, payload: e.message });
    }
  }
}

export function emailLogin(email, password, callback){
  return async dispatch => {
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      dispatch({ type: AUTH_USER, payload: response.user.uid });
      localStorage.setItem('userId', response.user.uid);
      callback();
    } catch(e) {
      dispatch({ type: AUTH_ERROR, payload: e.message });
    }
  }
}

export function googleLogin(callback){
  return async dispatch => {
    try {
      const response = await auth.signInWithPopup(googleProvider);
      dispatch({ type: AUTH_USER, payload: response.user.uid });
      localStorage.setItem('userId', response.user.uid);
      callback();
    } catch(e) {
      dispatch({ type: AUTH_ERROR, payload: e.message });
    }
  }
}

export function signOut(){
  localStorage.removeItem('userId');
  return dispatch => {
    auth.signOut();
    dispatch({ type: AUTH_USER, payload: '' });
  }
}
