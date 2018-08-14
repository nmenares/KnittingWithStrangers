import * as ApiEnrollmentUtil from '../util/enrollment_api_util'

export const RECEIVE_ENROLLMENT = 'RECEIVE_ENROLLMENT';

export const createEnrollment = (data) => {
  return dispatch =>
  ApiEnrollmentUtil.createEnrollment(data).then(knitting_time_enrollment =>
    dispatch({ type: RECEIVE_ENROLLMENT, knitting_time_enrollment })
  )
};
