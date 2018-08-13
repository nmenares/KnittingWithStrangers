import { RECEIVE_ALL_AREAS } from '../actions/area_actions';
import { RECEIVE_KNITTING_TIME } from '../actions/knitting_time_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_AREAS:
      return action.areas.knitting_areas;
    case RECEIVE_KNITTING_TIME:
      return merge({}, state, { [action.knitting_time.id]: action.knitting_time })
    default:
      return state;
  }
};
