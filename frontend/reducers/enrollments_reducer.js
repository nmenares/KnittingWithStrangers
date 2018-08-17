import { RECEIVE_ALL_AREAS } from '../actions/area_actions';
import { RECEIVE_ENROLLMENT, DELETE_ENROLLMENT } from '../actions/enrollment_actions';
import merge from 'lodash/merge';

const enrollmentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_AREAS:
      return action.areas.knitting_time_enrollments;
    case DELETE_ENROLLMENT:
      let newState = merge({}, state);
      delete newState[action.enrollmentId]
      return newState;
    case RECEIVE_ENROLLMENT:
      return merge({}, state, { [action.knitting_time_enrollment.id]: action.knitting_time_enrollment })
    default:
      return state;
  }
};

export default enrollmentsReducer;
