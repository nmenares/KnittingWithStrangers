import * as ApiEnrollmentUtil from '../util/enrollment_api_util'

export const RECEIVE_ENROLLMENT = 'RECEIVE_ENROLLMENT';

export const receiveEnrollment = knitting_time_enrollment => ({
  type: RECEIVE_ENROLLMENT,
  knitting_time_enrollment
});

export const createEnrollment = (data, callback) => dispatch => (
  ApiEnrollmentUtil.createEnrollment(data).then(knitting_time_enrollment => {
    dispatch(receiveEnrollment(knitting_time_enrollment));
    callback();
  })
);
