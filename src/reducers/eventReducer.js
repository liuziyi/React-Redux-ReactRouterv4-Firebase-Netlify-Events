import { GET_PUBLIC_EVENTS, GET_USER_EVENTS, GET_USER_EVENT_DETAILS } from '../actionTypes';

export default function(state={}, action){
  switch(action.type){
    case GET_PUBLIC_EVENTS:
      return { ...state, public: action.payload }
    case GET_USER_EVENTS:
      // console.log('GET_USER_EVENTS', action.payload)
      return { ...state, user: action.payload }
    case GET_USER_EVENT_DETAILS:
      // console.log('GET_USER_EVENT_DETAILS', action.payload)
      return { ...state, details: action.payload }
    default:
      return state;
  }
}
