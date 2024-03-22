// Javascript String Basic 
let country =`India`;
console.log(country);

console.log(typeof country); // For Check the type of data can store the variable 

console.log(country[2]);
// charAt String() function  is used for the check the character position in the word theat store the  variable 
console.log(country.charAt(0));


// Javascript String Methods
let message = `My Name is Pankaj Sharma and work in the Matrix Infologics pvt. ltd , My Position is Junior Developer `;
console.log(message);

// charAt String() function  is used for the check the character position in the word theat store the  variable 
console.log(message.charAt(0));

// toUpperCase String() function is used for convert the whole string into the uppercase 
console.log(message.toUpperCase());

// toLowerCase String() function is used for convert the whole string into the Lowercase 
console.log(message.toLowerCase());
 
// includes() function or  method is used for the search/match the string in the given string if value match it give the true result other false 
console.log(message.includes('Pankaj'));
// startWith() is used for check the given string is start with the given value resulted in true of false
console.log(message.startsWith('My'));

// endsWith() similar to startsWith it check the given string is end with the given value or not 
console.log(message.endsWith('Sharma'));
 


// String Finder Method


// search() String() is used for search the first occurace of the repeated value like in this string the 'my , is ` is reapeated value 
console.log(message.search('is'));

// indexof() method is used for the show the first occuracne of the value .
console.log(message.indexOf('is'));
 
// lastIndexof() String method is used for the check the last index of the given string 
console.log(message.lastIndexOf('My'));

// tostring() function is used for change the value to string it can change the Number,Boolean, Array to the string 
let temp = 123;
let temp1  = false;
let temp2  = [1,2,3,4,5]
console.log(typeof temp);

console.log(temp.toString()); // Change the Number variable to the String variable 

console.log(temp2.toString()); // change the array value to the string value 

console.log(typeof temp.toString()); // Check the typeof the temp varibale after change to string from the number 

// Concat() method to concat or add two or more strings 
let String1 ="My Name";
let String2 =" is Pankaj Sharma ";
let String3 =" And i Work as Junior PHP Developer";
let String  = String1.concat(String2,String3);
console.log(String);


/* Split() method is used to splits a string into an array of substrings. The split() method returns the new array.
  The split() method does not change the original string. if (" ") is used as seprator, the string is split between words */

  let string = "My Name is Pankaj Chand Sharma ";
   console.log(string.split(" "));

/* Slice() method extracts a part of a string & returns the extracted part in a new string. This metod does nto change the original
 string 

  The start and end parameters specifies the part of the string  to extract. The first position is 0, the second is 1, ...  
*/

  let Message = "My Name is Mangru  try to find Shizoka ";
    console.log(Message.slice(0,7));
    console.log(Message.slice(8,16));
    console.log(Message.slice(2));
    console.log(Message.slice());

      // A negative number selects from the end of the string.
    console.log(Message.slice(-16,-1));

    console.log(Message.substring(0,10));
    console.log(Message.substr(0,18));


    // Escape Sequence 
    /* Note:- 1)\t is used for the tab spacing.
              2)  When you want string in the next line then use the \n 
               3) When your want to print the 's single quoetes  in the middle of string use back slash  i.e. let\'s */
    let Msg = '\t Heloo Mangru "let\'s check the Holi Celebration."\n How are feel ';
    console.log(Msg);



// string Immutability 
let text = ' Hi Pankaj ';
text = text + ' How are you';
 console.log(text);
 









