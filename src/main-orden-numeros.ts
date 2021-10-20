import read from 'readline-sync';
import chalk from 'chalk'

//Programita orden de Números

//Declaración de Variables:
let numMenor: number;
let numMediano:number;
let numMayor:number;

//Inicio del programa:
numMenor = read.questionInt("Dime un Número");
numMediano = read.questionInt("Dime otro Número");
numMayor = read.questionInt("Dime el ÚLTIMO Número");

if (numMenor<=numMediano&&numMenor<=numMayor&&numMediano<=numMayor){
   console.log("Tus Números están ordenados") 
}else{
   console.log("Tus Números no están ordenados...Lo siento.") 
}