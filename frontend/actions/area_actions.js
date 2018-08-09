import * as ApiAreaUtil from '../util/area_api_util'

export const RECEIVE_ALL_AREAS = 'RECEIVE_ALL_AREAS';

export const fetchAreas = () => {
  return dispatch =>
  ApiAreaUtil.fetchAreas().then(areas =>
    dispatch({ type: RECEIVE_ALL_AREAS, areas })
  )
};

export const createArea = (area) => {
  return dispatch =>
  ApiAreaUtil.createArea(area).then(areas => 
    dispatch({ type: RECEIVE_ALL_AREAS, areas })
  )
};
