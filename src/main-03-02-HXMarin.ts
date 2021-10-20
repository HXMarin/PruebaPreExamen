import read from 'readline-sync';
import chalk from 'chalk'
import mod from './mod/mod-03-02-HXMarin';
/**
 * Autor: Héctor Xavier Marín
 * Ejercicio 2 de la relación 3.
 * Ejercicio que indica si un número dado por teclado es positivo o negativo. 
 */
//declaracion de variables:
let num: number;
//Inicio del Programa:
num = read.questionFloat("Dime un Numero: ");
if(mod.negativa(num)){
    console.log("Tu Número " + num+ " es Negativo");
}else{
    console.log("Tu Número " + num +  " es Positivo");
}


