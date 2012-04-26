//Bernice Johnson
//April 23, 2012
//Assignment: deliverable 4

alert("assignment 4!");

//String 
//#1 Does a string follow a 123-456-7890 pattern like a phone number?
   function validPhoneNumber("760-219-3874") {  //my number
   var phoneNumber = 760-219-3874;              //my number
   var phoneNumberPattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
   if(pattern.test(phoneNumber)) {
     var validPhoneNumber= phoneNumber.replace(pattern, "($1) $2-$3");
     console.log("valid phone number");
     }else{
      return console.log("Invalid phone number"); 
     
   }
}  


//String
//#2 Does a string follow an aaa@bbb.ccc pattern like an email address?
    function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\
    ".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA
    -Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 
//Second email address example
  function validateEmail(emailAddressCheck) {
  var emailAdress= emailAddressCheck
  var emailPattern= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
    if(emailPattern.test(emailAddress)) {
      console.log("This is a valid email address");
    }else{
      console.log("Not a valid email address, sorry");
 }
}


//String
//#3 Is the string a URL? (Does it start with http: or https:?)


//String
//#4 Title-case a string (split into words, then uppercase the first letter of each word)
     var makeTitleCase = function () {
     var titlecase = "";
            s=string.split(" ");
            l=s.length;
              for(var i=0; i<l; i++) {
              titlecase = s[i].substring(0,1).toUppercase()+s[i].substring(l,s[i].length)+" "
              };
              return titleCase;
     
    };


//String
//#5 Given a string that is a list of things separated by a given string, as well as another 
string separator, return a string with the first separator changed to 
the second: "a,b,c" + "," + "/" → "a/b/c".



//Number
//#6 Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
     var decimalPlace=function(number) {
     var roundedNum=number.toFixed(2);
       return roundedNum;
   };
   
//Number
//#7 Fuzzy-match a number: is the number above or below a number within a certain percent?

//Number
//#8 Find the number of hours or days difference between two dates.
//// the Date objects
//Set the two dates
function getDays(2011, 10, 06) { //my Birthday
    var  myBirthday = testDate;
    today = new Date(2012, 04, 25);
    var one_day = 1000 * 60 * 60 * 24;
    console.log(Math.ceil((today.getTime() - myBirthday.getTime()) / (one_day)) +
    " days since my Birthday " + testDate)



//Number
//#9 Given a string version of a number such as "42", return the value as an actual Number, 
such as 42.
var "42"
"42"-0= 42 //returns 42
"42"*1= 42  //returns 42
var intValue = parseInt(string[, radix]); //Something to due with returning the value as an actual 
                                            number.
                                            //saw this in my research.
  var stringVersionOfNumber=function(string) {
  var theNumber= Number(string);
  return theNumber;
  
};


//Array
//#10 Find the smallest value in an array that is greater than a given number

//Array
//#11 Find the total value of just the numbers in an array, even if some of the items are 
not numbers.

//Array
//#12 Given an array of objects and the name of a key, return the array sorted by the value of that
key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].



