export const fetchKnittingTime = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/knitting_times/${id}`
  })
)

export const createKnittingTime = (areaid, knitting_time) => (
  $.ajax({
    method: 'POST',
    url: `/api/areas/${areaid}/knitting_times`,
    data: {knitting_time}
  })
)

export const updateKnittingTime = (knitting_time) => (
  $.ajax({
    method: 'PATCH',
    url: `api/knitting_times/${knitting_time.id}`,
    data: {knitting_time}
  })
)

export const deleteKnittingTime = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/knitting_times/${id}`
  })
)

export const createEnrollment = (enrollment) => (
  $.ajax({
    method: 'POST',
    url: `/api/knitting_times/${enrollment.knittingtime_id}/knitting_time_enrollments`,
    data: {enrollment}
  })
)
