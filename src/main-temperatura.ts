import read from 'readline-sync';
import chalk from 'chalk'

//Programita de Temperatura:

//Declaración de Variables:

let celsius :number;
let fahrenheit :number;
let condition : boolean;
//Inicio del Programa:

condition = read.keyInYNStrict("Quieres En Fahrenheit"); 
 if (condition == true) {
     celsius = read.questionFloat("Dime la temperatura:")
     fahrenheit = (celsius*9/5)+32
     console.log("Tu temperatura en Fahrenheit:" + fahrenheit)
    }          
 condition = read.keyInYNStrict("Quieres En Celsius")
    if(condition == false) {
        console.log("Tu Programa ha finalizado")
        }else {
                fahrenheit = read.questionFloat("Dime la temperatura:")
                celsius = (fahrenheit-32)*5/9
                console.log("Tu temperatura en Celsius:" + celsius )
        }
    

    

 

     







