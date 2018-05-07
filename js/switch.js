'use strict';
const CURRENT_YEAR = 2018;
const EDAD_RAMSES = 24;
const EDAD_JONATHAN = 27;
const EDAD_JESSIE = 35;
const EDAD_LIZ = 36;
const EDAD_JORGE = 32;
const EDAD_RICARDO = 25; //En realidad 24 pero para que nos e repitan los casos
const EDAD_JAIR_CHAN = 31;

function switchu() {
    let edad = Number(prompt("Escribe una edad")); /*promt retorna un string.
    Se puede usar parseInt() para transformar el resultado en int 
    o Number().
    La diferencia es que parse solo toma el numero pero si inicia con 0 se transforma en octal.
    Number() solo toma numeros y si tienen letras o notaciones manda NaN
    */
    let year_of_birth = anioNacimiento(edad);
    switch (edad) { /*Los strings van entre comillas y en los valores numéricos no son necesarios */
        case EDAD_RAMSES: alert("es la de ramses" + " y el año de nacimiento es: " + year_of_birth);
            break;
        case EDAD_JONATHAN: alert("es la mia" + " y el año de nacimiento es: " + year_of_birth);
            break;
        case EDAD_JESSIE: alert("es la de Jessie" + " y el año de nacimiento es: " + year_of_birth);
            break;
        case EDAD_LIZ: alert("es la de Liz" + " y el año de nacimiento es: " + year_of_birth);
            break;
        case EDAD_JORGE: alert("es la de Jorge" + " y el año de nacimiento es: " + year_of_birth);
            break;
        case EDAD_RICARDO: alert("es la de Ricardo" + " y el año de nacimiento es: " + year_of_birth);
            break;
        case EDAD_JAIR_CHAN: alert("es la de Chan" + " y el año de nacimiento es: " + year_of_birth);
            break;
        default: alert("No hay nadie con esa edad");
    }
}

function anioNacimiento(edad) {
    return (CURRENT_YEAR - edad);
}