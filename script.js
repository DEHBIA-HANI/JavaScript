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
const isMajor = "";
console.log(`${myAge} est il majeur ? ${isMajor}`);
// const isMajor = Boolean(myAge); // Convertit une chaîne vide en un booléen (false)
console.log(isMajor);

//4.Conditions
//if= si
//else=sinon
const condition = "";
if (condition) {
  //true
  //executé
  console.log("if true");
} else {
  //false
  //executé
  console.log("else false");
}

// let myOld=44
// if(myOld==="44"){
//   console.log("mon age est égale à 44");
// }else{
//   if(myOld=="44"){
//     console.log("mon age est presque égal à 44");

//   }else{
//     console.log("mon age n'est égale à 44");

//   }
// }
/******** != */
// let myOld=44
// if(myOld==="44"){
//   console.log("mon age est égale à 44");
// }else{
//   if(myOld!="44"){
//     console.log("mon age est presque égal à 44");
//   }else{
//     console.log("mon age n'est égale à 44");
//   }
// }
/******** !== */
// let myOld = 44;
// if (myOld !== "44") {
//   console.log("mon age est égale à 44");
// } else {
//   if (myOld == "44") {
//     console.log("mon age est presque égal à 44");
//   } else {
//     console.log("mon age n'est égale à 44");
//   }
// }
/******** > < >= */
// let myOld = 44;
// if (myOld > 44) {
//   console.log("CONDITION EST VRAI");
// } else {
//     console.log("CONDITION EST FALSE");
//   }
/******** ! inverser */
// let myOld = 44;
// if (!myOld) {
//   console.log("CONDITION EST VRAI");
// } else {
//     console.log("CONDITION EST FALSE");
// opérateur logique
//   }/******** && et ,|| ou */
// let myOld = 44;
// console.log(myOld>0);
// console.log(myOld<18);

// //    true     et  false => false
// if (myOld > 0  && myOld>18) {
//   console.log("CONDITION EST VRAI");
// } else {
//     console.log("CONDITION EST FALSE");
//   //////////
let myOld = -50;
console.log(myOld > 0);
console.log(myOld < 18);

//    FALSE     et  TRUE => TRUE
if (myOld > 0 || myOld < 18) {
  console.log("CONDITION EST VRAI");
} else {
  console.log("CONDITION EST FALSE");
}
let myNam = "Melvyn";
console.log(myNam.length > 10);
console.log(myNam.length > 5);
console.log(myNam.charAt(0) === "M");

if (myNam.length > 10 || (myNam.length > 5 && myNam.charAt(0) === "M")) {
  console.log("CONDITION EST VRAI");
} else {
  console.log("CONDITION EST FALSE");
}
///// ternaire opérateur

if (myNam.length > 10) {
  myNam = "m";
} else {
  myNam = "Z";
}
console.log(myNam);
const myNam2 = "Melvyn".lengh > 10 ? "vrai" : "Faux";
console.log(myNam2);
