let salaries = {
    John: 200,
    Ann: 150,
    Pete: 300
  };
  
  function sortSalaries(obj) {
    return Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
  }
  
  console.log(sortSalaries(salaries));  
  