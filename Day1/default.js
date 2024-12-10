function createUser(name, age, role = "user") {
    return {
      name: name,
      age: age,
      role: role
    };
  }
  
  let newUser = createUser("Tom", 30);
  console.log(newUser);
  