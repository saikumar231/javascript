let team = {
    player1: 5,
    player2: 10,
    player3: 7
  };
  
  function updateScore(obj, increment) {
    for (let key in obj) {
      obj[key] += increment;
    }
  }
  
  updateScore(team, 3);
  console.log(team);  
  