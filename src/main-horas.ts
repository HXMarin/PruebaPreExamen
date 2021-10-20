import read from 'readline-sync';
import chalk from 'chalk'
//Declaración de Variables:
let hora: number;
let min: number;
let seg: number;

//Inicio del Programa: 
hora = read.questionInt("Dime las Horas: ");
min = read.questionInt("Dime los Minutos: ");
seg = read.questionInt("Dime los Segundos: ");
    
    seg++;
if(seg >=59){
   min++;
   seg = seg*0
}    
if(min >=60 ){
    hora++;
    min= min*0;
    }
if(hora >=24){
    hora=hora*0
        }
console.log("Esta es la hora: ",+hora,+min,+seg);
