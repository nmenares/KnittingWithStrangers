import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import areasReducer from './areas_reducer';
import knittingTimesReducer from './knitting_times_reducer';

const entities = combineReducers({
  users: usersReducer,
  areas: areasReducer,
  knitting_times: knittingTimesReducer
});

export default entities;
