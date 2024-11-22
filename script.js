import boolean from "boolean";
//Les variables en JavaScript
//Variables "modifiable"
let myName = "Dehbia";
console.log("name", myName);
myName = "louise";
console.log("name", myName);
//Variable "non modifiable"
const origin = "Ilatie";
console.log("origin", origin);

// les type de données
// String="Dehbia"
//Boolean=false/true ->0/1 ->Oui/Non
//Numbe=0 1 2 3 100 1000000 100000000000000000000000000000000000092000000
//BigInt=100000000000000000000000000000000000092000000
//Symbol= new Symbol("a")
//null="Il y a rien":
//undefined=Pas définit

//1.Sting
const myString = "double quote";
const mySrting2 = "single quote";
const myString3 = `back-tick`;
console.log(myString, mySrting2, myString3);

const lastName = "Ouiza";
// const helloSentence= "hello "+lastName
const helloSentence = `hello ${lastName}`;
console.log(helloSentence);

//récuperer le premier caractère
/*Index de 0 1 2 3 4*/
const firstChar = helloSentence[0];
console.log(firstChar);
// longueur de chaine
/*Length de 1 2 3 4*/
console.log(helloSentence.length);
console.log(helloSentence.toUpperCase());

//2.Number
let myAge = 42;
console.log(myAge);
// + dans une string= concaténation
//+ dans un number= addition
console.log("42" + 3);
console.log(Number("42") + 3);
//on peut convertir en nombre , NaN: not a Number
const firstName = "Dehbia";
console.log(Number(firstName));

console.log(Number.isNaN(firstName));
// "est pas un nombre"=true= yes
//"=false=non"

// oprérateur d'affectation
myAge--;
console.log(myAge);
myAge = myAge - 1;
console.log(myAge);

//3.Boolean

myAge = 16;
// const isMajor = false;
// console.log(`${myAge} est il majeur ? ${isMajor}`);
const isMajor = Boolean(myAge); // Convertit une chaîne vide en un booléen (false)
console.log(isMajor);
