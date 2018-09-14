export const createEnrollment = (enrollment) => (
  $.ajax({
    method: 'POST',
    url: `/api/knitting_times/${enrollment.knittingtime_id}/knitting_time_enrollments`,
    data: {enrollment}
  })
)

export const deleteEnrollment = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/knitting_time_enrollments/${id}`
  })
)

export const updateEnrollment = (enrollment) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/knitting_time_enrollments/${enrollment.id}`,
    data: {enrollment}
  })
)
