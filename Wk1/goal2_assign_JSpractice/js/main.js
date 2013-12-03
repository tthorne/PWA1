// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    function avgNumbers(){
		var numbers = [1,2,3,4,5];
		var average = eval(numbers.join('+')) / numbers.length;
		console.log (average);
    };
	avgNumbers();
   

    //--------------------------------------------------------
    console.log("2. concat first and last name");

    function fullName(){

            var firstName = "James ";
            var lastName = "Bond";
            console.log(firstName.concat(lastName));
    };
    fullName();

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function"

    function wordCount() {

        var count = 0,
            i,
            foo = ipsum.length;

        for (var i = 0; i <= ipsum.length; i++) {
            if (ipsum.charAt(i) == " ") {
                count ++;
            }

        }
        return console.log(count + 1 + " words");
    }

    wordCount();

    //--------------------------------------------------------
    console.log("4. sentence char count");

    function charCount(){
        console.log(ipsum.length + " characters");

    };
    charCount();

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");
	
	function vowelsInWord(){
        var word = "Javascript";
		var find = word.match(/[aeiou]/gi);
		    var count = find ? find.length : 0;
		    console.log(count + " vowel(s)");

    };
    vowelsInWord();

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");
	function findNum(){
		var numb = [31,22,4,67,83,6,5,4];
	  if(numb%2==0) return false;
	  for(var i=3; i<= Math.sqrt(numb); i=i+2){
	    if(numb%i ==0){
	      return false;
		  console.log (numb);
	    }
	  }
	  return true;
	  console.log
	}
	findNum();
   

})();