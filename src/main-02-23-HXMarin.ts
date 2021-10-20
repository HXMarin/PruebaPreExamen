import read from 'readline-sync';
import chalk from 'chalk'
/**
 * Autor: Héctor Xavier Marín
 * Día: 11/10/21
 * Función: Este ejercicio indica si el número dado por teclado es primo o no.
 * Resolución: esprimo = true || false
 */
//Declaración de Variables:
let numero : number;
let factorial = 1;
//Inicio del Programa:
numero= read.questionInt("Dime un número")
for (let i = 1; i<=numero; i++) 
  (factorial= factorial *i);

console.log("Tu resultado es : " + factorial);

