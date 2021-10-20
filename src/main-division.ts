import read from 'readline-sync';
import chalk from 'chalk'

//Inicio Del Programita División

//Declaración de Variables:
let numA : number;
let numB : number;
let resultado = 0;
let resto : number;
let tmp : number;

//Inicio del Programa:
    numA = read.questionInt("Dime un Numerito: ");
    numB = read.questionInt("DIME OTRO NUMERO: ");
    tmp = numA 
while(tmp>=numB){
    tmp =(tmp-numB);
    resultado = (resultado + 1);
}
    console.log("El Cociente es: "+ resultado );
    resto = tmp;
    console.log("El resto es: " + resto);