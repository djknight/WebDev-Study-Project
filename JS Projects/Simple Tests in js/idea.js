//Strings@

//the frist name
function myFunction() {
  var name = prompt("Please enter your name");

  //  to cap and de Cap the name
  var firstChar = name.slice(0, 1);
  var upperCaseFirstChar = firstChar.toUpperCase();
  var restOfName = name.slice(1, name.length);

  // to lower case the rest of name
  restOfName = restOfName.toLowerCase();

  //to cap the name
  var capitalisedName = upperCaseFirstChar + restOfName;

  // to make a workd a cap after a space ( yet to be made)

  // to make the button work
  if (name != null) {
    document.getElementById("name").innerHTML =
      "Hello " + capitalisedName + "! How are you today?";
  }
} // need to simplyfy

function tweetish() {
  alert(prompt("compose your tweet:").slice(0, 140));
}

function limitText(limitField, limitCount, limitNum) {
  if (limitField.value.length > limitNum) {
    limitField.value = limitField.value.substring(0, limitNum);
  } else {
    limitCount.value = limitNum - limitField.value.length;
  }
}
var hidden = false;

function action() {
  hidden = !hidden;
  if (hidden) {
    document.getElementById("togglee").style.visibility = "hidden";
  } else {
    document.getElementById("togglee").style.visibility = "visible";
  }
}
//// end of strings--------------------

//numbers--------------

//how old is the dog?-------------------
function dogFunction() {
  var dogAge = prompt("How old is your dog?");
  var humanAge = (dogAge - 2) * 4 + 21;
  alert(" Your dog is " + humanAge + " years old in human years ");
}

/// age how logn do i have left till 90----------------
function lifeInWeeks(age) {
  var age = prompt("your age");
  var yearsRemaining = 90 - age;
  var daysLeft = yearsRemaining * 365;
  var weeksLeft = yearsRemaining * 52;
  var monthsLeft = yearsRemaining * 12;

  alert(
    "You have " +
      daysLeft +
      " days, " +
      weeksLeft +
      " weeks, and " +
      monthsLeft +
      " months left."
  );
}

// /// some math stuff weaight cal--------------------------

// function bmiCalculator(weight, height) {
//   var bmi = weight / (height * height);
//   // OR using m2
//   var bmi = weight / Math.pow(height, 2);
//   /// retuning with numbers
//   return bmi;
//   /// return with roudning the number
//   return Math.round(bmi);
// }
// var bmi = bmiCalculator(65, 1.8);
// console.log(bmi);

////////// love cal-----------------------------------------
function loveName() {
  var loveName1 = prompt("enter name");
  var loveName2 = prompt("other name");
  var loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore) + 1;

  var firstChar = loveName1.slice(0, 1);
  var upperCaseFirstChar = firstChar.toUpperCase();
  var restOfName = loveName1.slice(1, loveName1.length);

  restOfName = restOfName.toLowerCase();

  var capitalisedName = upperCaseFirstChar + restOfName;
  if (loveName != null) {
    document.getElementById("loveName1").innerHTML =
      "Hello " +
      capitalisedName +
      "! your love is Score " +
      loveScore +
      "% with " +
      loveName2;

    if (loveScore > 70) {
      alert(" your love is EPIC nice score " + loveScore + "%");
    }

    if (loveScore > 50) {
      alert(" your love is a nice score " + loveScore + "%");
    }

    if (loveScore <= 30) {
      alert(" so sad sad face :( " + loveScore + "%");
    }
  }
}

//leap year stuff  *confused*-----------------------------------------

function isLeap(year) {
  if (year % 4 !== 0) {
    return "not leap year.";
  }
  if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
    return "Not leap year.";
  }
  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return "Leap year.";
  }
  isLeap(2000);
}

//other way of a leap yea (tho confused still ???)------------------
// function isLeap2(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return " leap year.";
//       } else {
//         return "not a leap year";
//       }
//     } else {
//       return "leap year.";
//     }
//   } else {
//     return "not a leap year.";
//   }
//   isLeap(2000);
// }

/// arrays guest list idear-------------------------

// var guestList = ["Dan", "jack", "Kristy", "Kelly", "niki", "jason"];
// var guesName = prompt("what is your name");
// if (guestList.includes(guesName)) {
//   alert("wellcome");
// } else {
//   alert("sorry maybe next time");
// }

// push- adds pop- remove------------------------------

var output = [];
var count = 1;
function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("fizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }

  // count++ makes it add 1 2 3 etc with out its always just 1 1 1
  count++;
  console.log(output);
}

//math.random name paying for food.
// function whosPaying(names) {
//   var name = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
//   var numberOfPeople = names.length;
//   var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
//   var randomPerson = names[randomPersonPosition];

//   return randomPerson + "Is going to buy lunch today!";
// }

/// whos paying--------------
function whosPaying(names) {
  var name = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

  return (
    name[Math.floor(Math.random() * Math.floor(name.length))] +
    " is going to buy lunch today!"
  );
}