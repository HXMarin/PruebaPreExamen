import read from 'readline-sync';
import chalk from 'chalk'


//Declaración de Variables:
    let aprobados = 0 ;
    let suspensos = 0 ;
    let alumnos = 0;
    let notas = 0;
    
//Inicio del programa:


for (let i = 0; ; i++){
    notas = read.questionInt("Dime la nota:");
    if(notas>=0 && notas<=4){
        console.log("Estás suspenso:");
        suspensos++;
    } else if(notas==5){
        console.log("Estás aprobado con un suficiente");
        aprobados++;
    } else if (notas==6){
        console.log ("Estás aprobado con un Bien");
        aprobados++;
    } else if (notas>=7 && notas <= 8){
        console.log ("Estás aprobado con un Notable");
        aprobados++;
    } else if (notas>=9 && notas<=10){
        console.log ("Estás aprobado con un Sobresaliente");
        aprobados++;
    }else if (notas<0)
    break;
}