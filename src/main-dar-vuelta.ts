import read from 'readline-sync';
import chalk from 'chalk'
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

//declaración de Variables:
let dividend:number;
let divider:number;
let quotient:number = 0; 
let temporal:number;
let rest:number;
//Inicio del programa:
dividend=read.questionInt("Dime un numero como Dividendo: ");
divider=read.questionInt("Dime Un numero como Divisor: ");
temporal=dividend;
for(let i=0;temporal>divider;i--){
    temporal = temporal-divider
    quotient = quotient + 1 
}
console.log("El resultado es: " +quotient);
rest = temporal;
console.log("El resto es: " +rest);