import * as ApiUserUtil from '../util/user_api_util'

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveUser = (user) => ({ type: RECEIVE_USER, user });
const receiveErrors = (errors) => ({ type: RECEIVE_USER_ERRORS, errors });

export const fetchUser = (id) => {
  return dispatch =>
    ApiUserUtil.fetchUser(id).then( user =>
      dispatch(receiveUser(user))
    )
};

export const updateUser = (user) => {
  return dispatch =>
    ApiUserUtil.updateUser(user).then(user => {
    dispatch(receiveUser(user))
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  )
)};

export const updatePhoto = (data, id) => {
  return dispatch =>
    ApiUserUtil.updatePhoto(data, id).then(user => {
    dispatch(receiveUser(user))
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  )
)};
