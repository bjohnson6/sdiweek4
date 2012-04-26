//Bernice Johnson
//April 23, 2012
//Assignment: deliverable 4

alert("assignment 4!");

//String 
//#1 Does a string follow a 123-456-7890 pattern like a phone number?
   function validatePhoneNumber(elementValue){  
var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  
return phoneNumberPattern.test(elementValue);  
}  


//String
//#2 Does a string follow an aaa@bbb.ccc pattern like an email address?


//String
//#3 Is the string a URL? (Does it start with http: or https:?)


//String
//#4 Title-case a string (split into words, then uppercase the first letter of each word)


//String
//#5 Given a string that is a list of things separated by a given string, as well as another 
string separator, return a string with the first separator changed to 
the second: "a,b,c" + "," + "/" → "a/b/c".



//Number
//#6 Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10

//Number
//#7 Fuzzy-match a number: is the number above or below a number within a certain percent?

//Number
//#8 Find the number of hours or days difference between two dates.
//// the Date objects
var start = new Date();
// the event you'd like to time goes here:
doSomethingForALongTime();
var end = new Date();
var elapsed = end.getTime() - start.getTime(); // time in milliseconds
view plainprint?
// if you want to test a function and get back its return  
function printElapsedTime (fTest) {  
    var nStartTime = Date.now(), vReturn = fTest(), nEndTime = Date.now();  
    alert("Elapsed time: " + String(nEndTime - nStartTime) + " milliseconds");  
    return vReturn;  
}  
  
yourFunctionReturn = printElapsedTime(yourFunction);  


//Number
//#9 Given a string version of a number such as "42", return the value as an actual Number, 
such as 42.

//Array
//#10 Find the smallest value in an array that is greater than a given number

//Array
//#11 Find the total value of just the numbers in an array, even if some of the items are 
not numbers.

//Array
//#12 Given an array of objects and the name of a key, return the array sorted by the value of that
key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].



