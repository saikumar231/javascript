let user1 = { name: "Alice", age: 30 };
let user2 = { city: "Paris", country: "France" };

let mergedUser = { ...user1, ...user2 };

console.log(mergedUser);  
