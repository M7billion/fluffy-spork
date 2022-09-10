// var ourArray = ["John", 23];
// var myArray = ['Mohammed', 1];
// console.log(myArray)
// var myArray = [["Bulls, 23"], ["White fox", 1]];
// console.log(myArray)
// var myArray = [6,66,666];
// var arrayEl = myArray[2];
// console.log(myArray)
// // Modifying arrays with indexes
// var myArray = [419, 69, 420];
// myArray[0] = 420;
// console.log(myArray)
// // Access Mulit-Dimensional Arrays With Indexes
// var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]]
// var result = myArray[3][0][0];
// console.log(result)
// //Manipulating Arrays With Push()
// var myArray = [["Mohammed", 1],["Cat", 2]]
// myArray.push([23, 21, 20])
// console.log(myArray)
// // Manipulating Arrays With Pop()
// var myArray = [["Mohammed", 1],["Cat", 2], ["Banana", 3]];
// myArray.pop()
// console.log(myArray)
// //Manipulating Arrays With shift()
// var myArray = [["Mohammed", 1], ["Cat", 2], ["Banana", 3]];
// myArray.shift()
// console.log(myArray)
// //Manipulating Arrays with Unshift()
// var myArray = [["Mohammed", 1], ["Cat", 2], ["Banana", 3]]
// myArray.shift()
// myArray.unshift(["Death", 0])
// console.log(myArray)
// // Shopping List
// var myList = [["Cereal", 2], ["Milk", 3 ], ["Bananas", 3], ["Juice", 2], ["Eggs", 12]]
// // Write Reusable Cod with Functions
// function reUse() {
//     console.log("Hi Wordo")
// }
// reUse()
// // Passing Values to Function with Arguments

// function non(bitch, pussy) {
//     console.log(bitch * pussy)
// }

// non(5, 5)
// // Glopal Scope and Functions
// var myGlobal = 10;
// function fun1() {
//  oopsGlobal = 5;
// }
// function fun2() {
//     var output = "";
//     if(typeof myGlobal != "undefined" ){
//         output += "myGlobal: " + myGlobal;
//     }
//     if(typeof oopsGlobal != "undefined") {
//         output += " oopsGlobal: " + oopsGlobal;
//     }
//     console.log(output);
// }
// fun1()
// fun2()
// // Local Scope and Functions
// function myLocalScope() {
//     var myVar = 5;
//     console.log(myVar)
// }
// myLocalScope()
// console.log(myVar)
// //Global VS Local Scopes in Funcions
// var outerWear = "T-shirt";
// function myOutfit() {
//     var outerWear = "sweater";
//     return outerWear;
// }
// console.log(myOutfit())
// console.log(outerWear)
// // //Return a Value from a Function with Return
// function minusSeven(num) {
//     return num - 7;
// }
// console.log(minusSeven(10));
// function timesFive(num) {
//     return num * 5;
// }
// console.log(timesFive(5));
// // Understanding Undefined Value Returned from a Function
// function addFive() {
//     sum += 5;
// }
// its undefined
// //Assignment with a return Value
// var processed = 0;
// function processArg(num) {
//     return (num + 3) / 5;
// }
// console.log(processArg(2))
// //Stand in Line
// function nextInLine(arr, item) {
//     arr.push(item)
//     return arr.shift();
// }
// var testArr = [1,2,3,4,5]
// console.log(nextInLine(testArr, 0))
// //Boolean Values
// function Booleans() {
//     return false;
// }
// //Use Conditional Logic with If Statements
// function ourTrueOrFalse(isItTrue) {
//     if (isItTrue) {
//         return "Yes, It's true";
//     }
//     return "No, It's false"
// }
// function trueOrFalse(wasThatTrue) {
//     if (wasThatTrue) {
//         return "Yes, That was true";
//     }
//     return "No, That was false";
// }
// console.log(trueOrFalse())
// //Comparison with the Equality Operator 
// function testEqual(val) {
//     if (val == 12) {
//         return "True";
//     }
//     return "False";
// }
// console.log(testEqual(11));
// //Comparision with the Strict Equality Operator
// function testStrict(val) {
//     if (val === 3) {
//         return "Equal"
//     }
//     return "False"
// }
// testStrict(3)
// //Practice Comparing Different Values
// function compareEquality(a, b) {
//     if (a === b) {
//         return "Eqaul"
//     }
//     return "Not Equal"
// }
// console.log(compareEquality(1, "1"))
// // Comparison with The Inequality Operator
// function testNotEqual (val) {
//     if (val != 99) {
//         return "Not Equal"
//     }
//     return "Equal"
// }
// console.log(testNotEqual(98))
// // Comparison with the Strict Inequality Operator 
// function testStrictNotEqual(val) {
//     if (val !== 0) {
//         return "Not Equal"
//     }
//     return "Equal"
// }
// console.log (testStrictNotEqual("0"))
// // Comparison with the Logical And Operator
// function testGreaterThan(val) {
//     if (val > 100) {
//         return "Over 100"
//     }
//     if (val > 10) {
//         return "Over 10"
//     }
//     return "10 Or Under"
// }
// console.log(testGreaterThan(10))
// //Comparison with the Greater Than Or equal to Operator
// function testGreaterThanOrEqual(val) {
//         if (val >= 20) {
//             return "20 or over"
//         }
//         if (val >= 5) {
//             return "5 or Over"
//         }
//         return "Less than 5"
//     }
// console.log(testGreaterThanOrEqual(21))
// // Comparison with the less than Operator
// function testLessThan(val) {
//     if (val < 25) {
//         return "Under 25"
//     }
//     if (val < 55) {
//         return "Under 55"
//     }
//     return "55 or Over"
// }
// console.log(testLessThan(55))
// //Comparison With the Less Than Or Equal to Operator
// function testLessThanOrEqual(val) {
//     if (val <= 25) {
//         return "Under 25 or equal"
//     }
//     if (val <= 55) {
//         return "Under 55 or equal"
//     }
//     return "55 or Over"
// }
// console.log(testLessThanOrEqual(55))
// // Comparison with the Logical And operator
// function testingLogicalAnd(val) {
//     if (val <= 50 && val >= 25) {
//         return "less than 50, and more than 25"
//         }
//         return "Nope"
//     }
// console.log(testingLogicalAnd(51))
// // Comparison with the Logical Or Operator 
// function testingLogicalOr(val) {
//     if (val < 10 || val > 20) {
//         return "Outside"
//     }
//     return "Inside"
// }
// console.log(testingLogicalOr(10))
// // Else Statments
// function testElse(val) {
//     var result = "Glitch in the matrix";
//     if (val > 5) {
//         result = "Bigger than 5"
//     } else {
//         result = "Smaller Or equal to 5"
//     }
//     return result;
// }
// console.log(testElse(3))
// // Else if Statments
// function testElseIf(val) {
//     if (val > 10) {
//     return "Greater than 10"
//     } else if (val < 5) {
//         return "Smaller than 5"
//     } else {
//         return "Between 5 and 10"
//     }
// }
// // Logical Order In if Else Statment 
// function orderMyLogic(val) {
//     if (val < 5) {
//         return "Less Than 5"
//     } else if (val < 10) {
//         return "Less Than 10"
//     } else {
//         return "Greater than or equal to 10"
//     }
// }
// console.log(orderMyLogic(5))
// //Chaining If Else Statements
// function testSize(num) {
//     if (num < 5) {
//         return "Tiny"
//     } else if (num < 10) {
//         return "Small"
//     } else if (num < 15) {
//         return "Medium"
//     } else if (num < 20) {
//         return "Large"
//     } else {
//         return "Big Bitch"
//     }
// }
// console.log(testSize(21))
// // Golf Code 
// var names = ["Hola-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]
// function golfScore(par, strokes) {
//     if (strokes == 1) {
//         return names[0]
//     } else if (strokes <= par - 2) {
//         return names[1]
//     } else if (strokes == par - 1) {
//         return names[2]
//     } else if (strokes == par) {
//         return names[3]
//     } else if (strokes == par + 1) {
//         return names[4]
//     } else if (strokes == par + 2) {
//         return names[5]
//     } else if (strokes >= par + 3) {
//         return names[6]
//     }
// }
// console.log(golfScore(4, 3))
// // Switch Statments
// function codeInSwitch(val) {
//     var answer = "";
//     switch(val) {
//         case 1: answer = "Alpha"; break;
//         case 2: answer = "Beta"; break;
//         case 3: answer = "Gamma"; break;
//         case 4: answer = "Delta"; break;
//     }
// return answer;
// }
// console.log(codeInSwitch(3))
// //Default Option IN Switch Statements
// function switchOfStuff(val) {
//         var answer = "";
//         switch(val) {
//             case "a": answer = "apple"; break;
//             case "b": answer = "bird"; break;
//             case "c": answer = "car"; break;
//             default: answer = "yup, idk"; break;
//         }
//     return answer;
//     }
// console.log(switchOfStuff("b"))
// //Multiple Identical Options In switch Statements 
function sequentialSize(val) {
    var answer = "" 
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "low"
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid"
            break;
        case 7:
        case 8:
        case 9:
            answer = "high"
            break;
    }
    return answer;
}