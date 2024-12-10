let fruitPrices = {
    apple: 2,
    banana: 1,
    cherry: 3
  };
  
  function getKeys(obj) {
    return Object.keys(obj);
  }
  
  function getValues(obj) {
    return Object.values(obj);
  }
  
  console.log(getKeys(fruitPrices));  
  console.log(getValues(fruitPrices)); 
  