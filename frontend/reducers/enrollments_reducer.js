import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ENROLLMENT } from '../actions/enrollment_actions';
import { toObject } from '../util/functions'
import merge from 'lodash/merge';

const enrollmentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser.enrollments;
    case RECEIVE_ENROLLMENT:
      return merge({}, state, { [action.knitting_time_enrollment.id]: action.knitting_time_enrollment })
    default:
      return state;
  }
};

export default enrollmentsReducer;
