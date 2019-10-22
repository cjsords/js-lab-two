//arrow function
const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};

const chooseOption = (opt1, opt2) => {
  let randNum = Math.round(Math.random());
  //ternary
  return randNum === 0 ? opt1 : opt2;
};

//expression
const attackPlayer = function(health) {
  return (health -= randomDamage());
};

//arrow function
const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

//arrow function
const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

//arrow function
const isDead = health => {
  if (health <= 0) {
    return true;
  } else {
    return false;
  }
};

//declarative
function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health) === true) {
        return logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health) === true) {
        return logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Colin", "Mitch", 100, 100);
