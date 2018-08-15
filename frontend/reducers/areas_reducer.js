import { RECEIVE_ALL_AREAS } from '../actions/area_actions';
import { RECEIVE_ENROLLMENT } from '../actions/enrollment_actions';
import { RECEIVE_KNITTING_TIME } from '../actions/knitting_time_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_AREAS:
      return action.areas.knitting_areas;
    case RECEIVE_KNITTING_TIME:
      let area_id = action.knitting_time.area_id
      let area = state[area_id]
      let a_kt = area.knitting_times
      merge(a_kt, action.knitting_time.id)
      area.knitting_times = a_kt;
      return merge({},state, {[area_id]: area})
    default:
      return state;
  }
};
