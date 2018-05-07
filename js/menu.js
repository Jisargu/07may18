function menu() {
    do {
        var opcion = prompt("Menú: \n1.-Sumar 2 números\n2.-Restar 2 números\n3.-Tabla de multiplicar primeros 10 números\n4.-Salir");
        switch ((Number(opcion))) {

            case 1: suma();
                break;

            case 2: resta();
                break;

            case 3: tabla_multiplicar();
                break;
            case 4:
                alert("mata ne ;)")
                break;
            default: alert("Not such option");
                break;
        }
    } while (Number(opcion) != 4);
}
function suma() {
    let numero1 = Number(prompt("Escribe el primer número para sumar"));
    let numero2 = Number(prompt("Escribe el segundo número"));
    alert("la suma es: " + (numero1 + numero2));
}
function resta() {
    let numero1 = Number(prompt("Escribe el primer número para restar"));
    let numero2 = Number(prompt("Escribe el segundo número"));
    alert("la resta es: " + (numero1 - numero2));
}
function tabla_multiplicar() {
    let tabla = "";
    let numero1 = Number(prompt("Que tabla de multiplicar"));
    for (i = 1; i <= 10; i++) {
        tabla += (numero1 * i + "\n");
    }
    alert(tabla);
}