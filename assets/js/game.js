var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

var fight = function(enemyName) {
    // Alerts players that they are starting the round
    window.alert("Welcome the Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP the battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // If player chose to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked
        console.log(playerName + " atacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        // Checks enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        // Checks player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
         window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    // If player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm the player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes(true), leave the fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");

            // Subtract money for playerMoney for skipping
            playerMoney = playerMoney - 2;
        }

         // if no (false), ask question again by running fight() again
         else {
             fight();
         }

    } else {
        window.alert("You need to chose a valid option. Try again!");
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}