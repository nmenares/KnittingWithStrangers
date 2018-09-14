import * as ApiEnrollmentUtil from '../util/enrollment_api_util'

export const RECEIVE_ENROLLMENT = 'RECEIVE_ENROLLMENT';
export const DELETE_ENROLLMENT = 'DELETE_ENROLLMENT';

const receiveEnrollment = knitting_time_enrollment => ({
  type: RECEIVE_ENROLLMENT,
  knitting_time_enrollment
});

const removeEnrollment = enrollmentId => ({
  type: DELETE_ENROLLMENT,
  enrollmentId
});

export const createEnrollment = (data, callback) => dispatch => (
  ApiEnrollmentUtil.createEnrollment(data).then(knitting_time_enrollment => {
    dispatch(receiveEnrollment(knitting_time_enrollment));
    callback();
  })
);

export const updateEnrollment = (data, callback) => dispatch => (
  ApiEnrollmentUtil.updateEnrollment(data).then(knitting_time_enrollment => {
    dispatch(receiveEnrollment(knitting_time_enrollment));
    callback();
  })
);

export const deleteEnrollment = (id) => dispatch => (
  ApiEnrollmentUtil.deleteEnrollment(id).then(() => {
    dispatch(removeEnrollment(id))
  })
)
