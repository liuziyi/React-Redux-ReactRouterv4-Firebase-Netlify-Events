import { GET_PUBLIC_EVENTS, GET_USER_EVENTS, GET_USER_EVENT_DETAILS } from '../actionTypes';
import { public_db, fb_db } from '../config/firebase';

export function getPublicEvents(){
  return dispatch => {
    public_db.on('value', snapshot => {
      dispatch({
        type: GET_PUBLIC_EVENTS,
        payload: snapshot.val()
      });
    });
  }
}

export function getUserEvents(userId){
  return dispatch => {
    fb_db.ref(`/user-events/${userId}`).on('value', snapshot => {
      dispatch({ type: GET_USER_EVENTS, payload: snapshot.val() });
    });
  }
}

export function getUserEventDetails(userId, eventId){
  return dispatch => {
    fb_db.ref(`/user-events/${userId}`).child(eventId).on('value', snapshot => {
      dispatch({ type: GET_USER_EVENT_DETAILS, payload: snapshot.val() });
    });
  }
}

export function addUserEvent(userId, event){
  return dispatch => fb_db.ref(`/user-events/${userId}`).push(event);
}

export function editEvent(userId, eventId, event){
  return dispatch => fb_db.ref(`/user-events/${userId}`).child(eventId).update(event);
}

export function deleteEvent(userId, eventId){
  return dispatch => fb_db.ref(`/user-events/${userId}`).child(eventId).remove();
}
