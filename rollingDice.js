/*
  Get input from command line
  -Pass input as parameter into a function
  -the function determines how much dice will be rolled]
  -results should be random and have the same amount of outputs as the input parameter
*/




var numberOfRolls = process.argv.splice(2);

function rollDice(numberOfRolls){

  numbers = "";
  for ( var i = 0; i < numberOfRolls; i++){
    if(i < numberOfRolls-1){
      numbers += (Math.floor((Math.random()*6) + 1)) + (", ");
    } else {
      numbers += (Math.floor((Math.random()*6) + 1));
    }

  }

  return numbers;
}

var result = rollDice(numberOfRolls);
console.log("Rolled " + numberOfRolls + " dice: " + result)