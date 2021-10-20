import read from 'readline-sync';
import chalk from 'chalk'

//Declaración de variables:
    let s: string;
    let S: string;

//Inicio del Programa: 
do{
    s= read.question("S/N: ")

}while(s!='s' && s!='S')

