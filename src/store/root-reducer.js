import { combineReducers } from 'redux';
import users from './users';

export default combineReducers({
  [users.constants.NAME]: users.reducer
});