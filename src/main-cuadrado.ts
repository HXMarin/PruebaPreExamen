import read from 'readline-sync';
import chalk from 'chalk'

//Programa Cuadrado

//Declaración de variables

let lado: number;
let perimetro: number;
let area: number;

//Inicio del programa

lado = read.questionInt("Dinos el lado:");

    perimetro = (lado*4);
console.log("El perimetro mide"+ perimetro);

    area = (lado*lado);
console.log("El área es de "+ area);	

