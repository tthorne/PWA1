/*
 * Name:  Tara Thorne
 * Date: Saturday, November 30, 2013
 * Assignment:  Goal2: Assignment: The Duel - Part II
 */

// self-executing function

(function(){
	
	console.log("FIGHT!!!");

    // List Player's Information
    var fighterOne = ["Spiderman", 20, 100];
    var fighterTwo = ["Batman", 20, 100];

    // Round Number
    var round = 0;

    // Starts Fight Function
    function fight(){
        console.log("in the fight function");

        alert( fighterOne[0]+": "+fighterOne[2]+" *START* "+fighterTwo[0]+": "+fighterTwo[2]);

        for (var i=0; i < 10; i++){

            // Random Formula - Math.floor(Math.random() * (max-min) + min);

            // Minimum Damage
            var minDamage1 = fighterOne[1] * .5;
            var minDamage2 = fighterTwo[1] * .5;
            var f1 = Math.floor(Math.random()*(fighterOne[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighterTwo[1]-minDamage2)+minDamage2);

            // Damage Inflicted
            fighterOne[2]-=f1;
            fighterTwo[2]-=f2;

            console.log(fighterOne[0]+":"+fighterOne[2]+" "+fighterTwo[0]+":"+fighterTwo[2]);

            var results = winnerCheck();
            console.log(results);

            if (results === "no winner"){
                round++;
                alert(fighterOne[0]+": "+fighterOne[2]+" *ROUND "+round+" OVER* "+fighterTwo[0]+": "+fighterTwo[2])
            }else{
                alert(results);
                break;
            };
        };
    };

    // Winner Check Function
    function winnerCheck(){
        console.log("In winnerCheck FN");

       var result="no winner";
         if(fighterOne[2]<1 && fighterTwo[2]<1){
             result = "You Both Die";
         } else if(fighterOne[2]<1){
             result =fighterTwo[0]+" WINS!!!"
         } else if(fighterTwo[2]<1){
             result =fighterTwo[0]+" WINS!!!"

         };

        return result;

    };

    // Program Starts Here
    console.log("Program Starts");
    fight();
})();
