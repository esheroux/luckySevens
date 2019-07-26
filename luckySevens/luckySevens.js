/*
Name: Beth Cox
Created: 7-25-19
Updated: 7-26-19
*/

/*Asks the user how many dollars they have to bet*/
function startGame(){
  alert("How much would you like to bet?")
}

/*Plays the game when user clicks play button*/
/*TODO Find a way that hitting the enter key counts as a click on the play button*/
function play(){

  var startingBet = document.getElementById("startingBet").value; /*Gets starting bet from website*/
  var gameMoney = startingBet; /*Sets game money as starting bet*/
  var numRolls = 0; /*Number of rolls taken before the money ran out*/
  var highestAmountWon = 0; /*Maximum amount held by the player*/
  var rollCountAtHigh = 0; /*Number of rolls taken at the point when the user held the most money*/
 
  /* Checks for valid starting bet*/
  if(startingBet > 0) {
    /*Loop plays until money in gone, once money is gone the results are run*/
    while(gameMoney > 0) {
      /* Winning roll adds $4 to game money and adds a roll to the roll count.
         Checks if the game money qualifies for the highest amount won,
         if so, it changes that variable and records the roll count at that time*/
      if(rollDice() == 7){
        gameMoney += 4
        numRolls++;
        if(gameMoney > highestAmountWon){
          highestAmountWon = gameMoney;
          rollCountAtHigh = numRolls;
        }
      /* Losing roll subtracts $1 from game money and adds a roll to the roll count.*/
      } else{
        gameMoney -= 1;
        numRolls++;
      }
    }
    /* Sends the results table to the website */
    /* TODO: Find a way to cuntinue the innerHTML line to make it more readable*/
    document.getElementById("results").innerHTML =
    ('<hr class="col-6 mx-auto" /><h1>Results</h1><table class="table table-striped" border="2" style="text-align:left" border-collapse: collapse"><tr><td>Starting Bet</td><td>$' + startingBet + '.00</td></tr><tr><td>Total Rolls Before Going Broke</td><td>'+ numRolls +'</td></tr><tr><td>Highest Amount Won</td><td>$' + highestAmountWon + '.00</td></tr><tr><td>Roll Count at Highest Amount Won</td><td>'+ rollCountAtHigh + '</td></tr></table></center>');
    /*Offers the player to play again*/
    document.getElementById("button").value = ("Play Again");
  } else{
    /*If the starting bet is less than or equal to 0, display error message.*/
    alert("Starting bet must be higher that 0.");
  }
}

/*Random number generator to simulate a dice roll*/
function rollDice(numRolls) {
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    return die1 + die2;
}
