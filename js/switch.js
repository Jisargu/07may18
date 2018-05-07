'use strict';
const CURRENT_YEAR=2018;
function switchu() {
    let edad = prompt("Escribe una edad"); /*promt retorna un string*/
    let year_of_birth = anioNacimiento(edad);
    switch (edad) { /*Los strings van entre comillas y en los valores numéricos no son necesarios */
        case '24': alert("es la de ramses" + " y el año de nacimiento es: " + year_of_birth);
            break;
        case '27': alert("es la mia" + " y el año de nacimiento es: " + year_of_birth);
            break;
        case '30': alert("es la de Jessie" + " y el año de nacimiento es: " + year_of_birth);
            break;
        case '36': alert("es la de Liz" + " y el año de nacimiento es: " + year_of_birth);
            break;
        case '32': alert("es la de Jorge" + " y el año de nacimiento es: " + year_of_birth);
            break;
        case '25': alert("es la de Ricardo" + " y el año de nacimiento es: " + year_of_birth);
            break;
        case '31': alert("es la de Chan" + " y el año de nacimiento es: " + year_of_birth);
            break;
        default: alert("No hay nadie con esa" + " y el año de nacimiento es: " + year_of_birth);
    }
}

function anioNacimiento(edad) {
    return (CURRENT_YEAR - edad);
}