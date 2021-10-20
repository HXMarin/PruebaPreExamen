import read from 'readline-sync';
import chalk from 'chalk'
import { truncate } from 'fs';

//Programita Media 

//Declaración de Variables:
let num1: number;
let num2: number;
let num3: number;
let media: number;

//Incio del Programa: 
num1 = read.questionInt("Dinos el primer Número:");
num2 = read.questionInt("Dinos un Segundo Número:");
num3 = read.questionInt("Dinos un Tercer Número");

    media = ((num1 + num2+num3)/3);
    console.log ("Tu media es =" + media);
    console.log ("La media es =" + (Math.trunc (media)));
