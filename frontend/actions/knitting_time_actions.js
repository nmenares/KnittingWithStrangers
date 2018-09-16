import * as ApiKnittingTimeUtil from '../util/knitting_time_api_util'

export const RECEIVE_KNITTING_TIME = 'RECEIVE_KNITTING_TIME';
export const DELETE_KNITTING_TIME =  'DELETE_KNITTING_TIME';
export const RECEIVE_KNITTING_TIME_ERRORS = 'RECEIVE_KNITTING_TIME_ERRORS';
export const DELETE_KNITTING_TIME_ERRORS = 'DELETE_KNITTING_TIME_ERRORS'

const receiveKnittingTime = (knitting_time) => ({ type: RECEIVE_KNITTING_TIME, knitting_time });
const receiveErrors = errors => ({ type: RECEIVE_KNITTING_TIME_ERRORS, errors });
const removeKnittingTime = (id) => ({ type: DELETE_KNITTING_TIME, knittingtimeId: id });

export const fetchKnittingTime = (id) => {
  return dispatch =>
    ApiKnittingTimeUtil.fetchKnittingTime(id).then(kt =>
      dispatch(receiveKnittingTime(kt))
    )
};

export const deleteErrors = () => {
  return dispatch =>
    dispatch({ type: DELETE_KNITTING_TIME_ERRORS })
};

export const createKnittingTime = (areaId, data, callback) => {
  return dispatch =>
    ApiKnittingTimeUtil.createKnittingTime(areaId, data).then(kt => {
    dispatch(receiveKnittingTime(kt));
    callback();
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  )
)};

export const updateKnittingTime = (data, callback) => {
  return dispatch =>
    ApiKnittingTimeUtil.updateKnittingTime(data).then(kt => {
    dispatch(receiveKnittingTime(kt));
    callback();
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  )
)};

export const deleteKnittingTime = (id) => {
  return dispatch =>
  ApiKnittingTimeUtil.deleteKnittingTime(id).then(() => {
  dispatch(removeKnittingTime(id));
});
}
