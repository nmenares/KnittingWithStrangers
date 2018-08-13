import * as ApiKnittingTimeUtil from '../util/knitting_time_api_util'

export const RECEIVE_KNITTING_TIME = 'RECEIVE_KNITTING_TIME';

export const fetchKnittingTime = (id) => {
  return dispatch =>
  ApiKnittingTimeUtil.fetchKnittingTime(id).then(knitting_time =>
    dispatch({ type: RECEIVE_KNITTING_TIME, knitting_time })
  )
};
