import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import knittingTimeErrorsReducer from './knitting_time_errors_reducer';

const errors = combineReducers({
  session_errors: sessionErrorsReducer,
  knitting_time_errors: knittingTimeErrorsReducer
});

export default errors;
