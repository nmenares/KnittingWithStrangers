import * as ApiKnittingTimeUtil from '../util/knitting_time_api_util'

export const RECEIVE_KNITTING_TIME = 'RECEIVE_KNITTING_TIME';

const receiveKnittingTime = (knitting_time) => ({ type: RECEIVE_KNITTING_TIME, knitting_time });

export const fetchKnittingTime = (id) => {
  return dispatch =>
    ApiKnittingTimeUtil.fetchKnittingTime(id).then(kt =>
      dispatch(receiveKnittingTime(kt))
    )
};

export const createKnittingTime = (areaId, data) => {
  return dispatch =>
    ApiKnittingTimeUtil.createKnittingTime(areaId, data).then(kt =>
      dispatch(receiveKnittingTime(kt))
    )
}
