console.log("Hello World");

//Arithmetic operators

console.log(120 + 180);
console.log(20 - 5);
console.log(6 * 6);
console.log(30 / 3);

//Comparsion Operators

//Equal
console.log(1 == 1);
//Not Equal
console.log(1 != 1);
//Greater than
console.log(1 > 1);
//Greater than or equal
console.log(1 >= 1);
//Less than
console.log(1 < 1);
//Less than or equal
console.log(1 <= 1);

/*Strict equal operator 
use it like that and not the equal or not equal*/
console.log(1 === 1);
console.log(1 !== 2);

//Logical Operators

//AND
console.log(2 > 1 && 7 < 6);

//OR
console.log(0 > 1 || 7 < 6);

//NOT
console.log(!(5 > 10));

/*Grouping Operator 
wird immer vorgezogen  ( )*/
// Beispiel

console.log(7 + 20 / 5);
//Result: 11 (mathematische Reihenfolge * vor +)

console.log((7 + 20) / 5);
//Result 5.4 (Grouping Operator ( ) geht vor)

//Concatenation Operator Strings

console.log("My Name is Labi");
//Result: "My Name is Labi"

console.log("My" + " Name" + " is Labi");
/*Result: "My Name is Labi" 
 "(leerzeichen) is Labi" trennt die Strings*/

console.log("1" + 1);
//Result: 11

console.log("" + 6 + 8);
//Result: 68 (ergibt immer ein string " " hat vorang)

console.log("La" + "beat" === "Labeat");
//Result: true
