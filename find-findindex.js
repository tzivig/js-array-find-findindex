function findUserByUsername(arr, username){
  return arr.find(function(val){
    return val.username == username
  });
}

function removeUser(arr, username){
  let removeindex = arr.findIndex(function(val){
    return val.username == username
  });
  if(removeindex === -1) return;

  return arr.splice(removeindex,1)[0];
}

