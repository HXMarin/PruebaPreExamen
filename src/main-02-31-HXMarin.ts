import read from 'readline-sync';
import chalk from 'chalk'

/**
 * Autor: Héctor Xavier Marín
 * Día: 11/10/21
 * Función: Este ejercicio indica si el número dado por teclado es primo o no.
 * Resolución: esprimo = true || false
 */
//Declaración de Variables:

let num : number = 0;
let esprimo : boolean;
//Inicio del Programa:

num = read.questionInt("Dime un Numero: ");
if (num%2 !=0 || num==2){
    esprimo =true;
}else{
    esprimo = false;
    }
console.log ("Tu numero " + num + " es:" + esprimo);

/*En este ejercicio solamente nos piden si el número dado por teclado es primo o no, simplemente, al hacer el módulo de 2 sea distinto a cero
 ya estaría practicamente completado el ejercicio. Aunque hay que crear otra decisión para incluir al 2, ya que este también es primo. */