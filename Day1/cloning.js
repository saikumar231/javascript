let user = {
    name: "Sam",
    age: 28
  };
  
  function cloneObject(obj) {
    let clone = {};
    for (let key in obj) {
      clone[key] = obj[key];
    }
    return clone;
  }
  
  let userClone = cloneObject(user);
  console.log(userClone);  