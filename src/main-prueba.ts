import read from 'readline-sync';
import chalk from 'chalk'

//Declaración de Variables:
let base: number;
let exponente: number;
let resultado: number=1;
//Inicio del Programa:
base = read.questionInt("Dime La base de la potencia: ");
exponente = read.questionInt("Dime el exponente de la potencia: ");
    for (let i = 0; i < exponente; i++) {
        resultado = base*resultado;
        
    }
    console.log(resultado);

    
