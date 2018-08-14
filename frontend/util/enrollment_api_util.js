export const createEnrollment = (enrollment) => (
  $.ajax({
    method: 'POST',
    url: `/api/knitting_times/${enrollment.knittingtime_id}/knitting_time_enrollments`,
    data: {enrollment}
  })
)
