/*
 * Name:  Tara Thorne
 * Date: Saturday, November 30, 2013
 * Assignment:  Goal1: Assignment: The Duel - Part I
 */

// self-executing function

(function(){
	
	console.log("FIGHT!!!");

    // List Player's Name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    // List Player's Damage
    var player1Damage = 20;
    var player2Damage = 20;

    // List Player's Health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    // Round Number
    var round = 0;

    // Starts Fight Function
    function fight(){
        console.log("in the fight function");

        alert(playerOneName+": "+playerOneHealth+" *START* "+playerTwoName+": "+playerTwoHealth);

        for (var i=0; i < 10; i++){

            // Random Formula - Math.floor(Math.random() * (max-min) + min);

            // Minimum Damage
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            // Damage Inflicted
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);

            var results = winnerCheck();
            console.log(results);

            if (results === "no winner"){
                round++;
                alert(playerOneName+": "+playerOneHealth+" *ROUND "+round+" OVER* "+playerTwoName+": "+playerTwoHealth)
            }else{
                alert(results);
                break;
            };
        };
    };

    // Winner Check Function
    function winnerCheck(){
        console.log("In winnerCheck FN");

       var result="No Winner";
         if(playerOneHealth<1 && playerTwoHealth<1){
             result = "You Both Die";
         } else if(playerOneHealth<1){
             result =playerTwoName+" WINS!!!"
         } else if(playerTwoHealth<1){
             result =playerOneName+" WINS!!!"

         };

        return result;

    };

    // Program Starts Here
    console.log("Program Starts");
    fight();
})();
