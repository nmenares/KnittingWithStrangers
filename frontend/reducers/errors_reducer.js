import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';

const errors = combineReducers({
  errors: sessionErrorsReducer
});

export default errors;
