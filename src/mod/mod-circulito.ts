import read from 'readline-sync';
import chalk from 'chalk'

//Programa circulito
export function circulito() {
//Declaración de Variables:
let radio : number;
let area : number;
let perimetro : number;
const NUM_PI : number = 3.14;

//Inicio del Programita: 
radio = read.questionInt("Dime cuanto mide el Radio:");

    area = (NUM_PI*radio^2);

    perimetro = (2*NUM_PI*radio);

console.log(" El Área es de " + area + " Y el Perímetro es de " + perimetro);
return circulito;
}
