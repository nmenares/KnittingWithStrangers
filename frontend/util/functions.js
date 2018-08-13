export const toObject = (arr) => {
  let rv = {};
  for (var i = 0; i < arr.length; ++i)
    for(var j = 0; j < arr[i].length; j++)
      rv[arr[i][j].id] = arr[i][j];
  return rv;
}
