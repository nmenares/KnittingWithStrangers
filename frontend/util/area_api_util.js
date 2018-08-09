export const fetchAreas = () => (
  $.ajax({
    method: 'GET',
    url: 'api/areas'
  })
)

export const createArea = (area) => (
  $.ajax({
    method: 'POST',
    url: 'api/areas',
    data: {area}
  })
)
