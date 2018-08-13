export const fetchKnittingTime = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/knitting_times/${id}`
  })
)

export const createKnittingTime = (knitting_time) => (
  $.ajax({
    method: 'POST',
    url: `api/knitting_times`,
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
