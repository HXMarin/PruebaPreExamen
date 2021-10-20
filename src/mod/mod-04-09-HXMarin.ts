import read from 'readline-sync';
import chalk from 'chalk'

//Declaracion de Variables:
let number : number;
let numberA : number = 1;
let numberB : number = 1;
//Inicio del Programa:
number = read.questionInt("Dime un Numero: ");
if(number==(numberA^2)+(numberB^2)){
console.log("Si es posible. " + number);
}