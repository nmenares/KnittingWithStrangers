import { RECEIVE_ALL_AREAS } from '../actions/area_actions';
import { RECEIVE_KNITTING_TIME, DELETE_KNITTING_TIME } from '../actions/knitting_time_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_AREAS:
      return action.areas.knitting_times;
    case RECEIVE_KNITTING_TIME:
      return merge({}, state, { [action.knitting_time.id]: action.knitting_time })
    case DELETE_KNITTING_TIME:
      let newState = merge({}, state);
      delete newState[action.knittingtimeId]
      return newState;
    default:
      return state;
  }
};
