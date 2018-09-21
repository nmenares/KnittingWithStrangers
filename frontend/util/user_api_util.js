export const updateUser = (user) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: {user}
  })
);

export const fetchUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);

export const updatePhoto = (data, id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    data: data,
    contentType: false,
    processData: false
  })
);
