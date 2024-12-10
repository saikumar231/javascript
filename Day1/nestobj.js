let person = {
    name: "James",
    age: 32,
    address: {
      street: "Main St",
      city: "New York",
      zipCode: 10001
    }
  };
  
  let { address: { street, city, zipCode } } = person;
  
  console.log(street);  
  console.log(city);    
  console.log(zipCode); 
  