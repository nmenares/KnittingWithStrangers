import {
  RECEIVE_KNITTING_TIME_ERRORS,
  DELETE_KNITTING_TIME_ERRORS,
  RECEIVE_KNITTING_TIME,
} from '../actions/knitting_time_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_KNITTING_TIME_ERRORS:
      return action.errors;
    case DELETE_KNITTING_TIME_ERRORS:
      return [];
    case RECEIVE_KNITTING_TIME:
      return [];
    default:
      return state;
  }
};
