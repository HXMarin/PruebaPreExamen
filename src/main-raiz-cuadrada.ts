import read from 'readline-sync';
import chalk from 'chalk'

//Programita Raiz Cuadrada

//Declaracion de Variables:
let num: number;

//Inicio del Programa:
num = read.questionInt("Dime tu número:");
if(num<0){
   console.log("Tu no Número no se puede usar")  
}else{
 console.log("La raiz cuadrada de tu número es:" + Math.sqrt(num))   
}