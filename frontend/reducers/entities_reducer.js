import { combineReducers } from 'redux';

import usersReducer from './users_reducer';

const entities = combineReducers({
  users: usersReducer
});

export default entities;
