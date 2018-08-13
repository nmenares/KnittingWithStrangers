import * as ApiSessionUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const DELETE_SESSION_ERRORS = 'DELETE_SESSION_ERRORS'

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const deleteErrors = () => {
  return dispatch =>
    dispatch({ type: DELETE_SESSION_ERRORS })
};

export const signup = (user, callback) => dispatch => (
  ApiSessionUtil.signup(user).then(user => {
    dispatch(receiveCurrentUser(user));
    callback();
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = (user, callback) => dispatch => (
  ApiSessionUtil.login(user).then(user => {
    dispatch(receiveCurrentUser(user));
    callback();
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  ApiSessionUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);

export const fetchMe = () => dispatch => (
  ApiSessionUtil.fetchMe().then(user => (
    dispatch(receiveCurrentUser(user))
  ))
);
