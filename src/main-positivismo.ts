import read from 'readline-sync';
import chalk from 'chalk'

//Programa Positivismo:

//Declaracón de Variables:
let num: number;

//Inicio del Programa:
num = read.questionInt("Dime tu Número Favorito bb:");
if (num >= 0) {
   console.log("Tu número es Positivo") 
} else {
    console.log("Tu número es Negativo")
}
