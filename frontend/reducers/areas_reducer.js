import {
  RECEIVE_ALL_AREAS
} from '../actions/area_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_AREAS:
      return action.areas;
    default:
      return state;
  }
};
