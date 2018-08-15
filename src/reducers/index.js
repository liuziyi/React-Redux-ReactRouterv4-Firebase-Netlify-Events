import { combineReducers } from 'redux';
import authReducer from './authReducer';
import eventReducer from './eventReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  event: eventReducer,
  user: userReducer
});

export default rootReducer;
