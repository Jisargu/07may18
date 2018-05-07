function menu() {
    do {
        var opcion = prompt("Menú: \n1.-Sumar 2 números\n2.-Restar 2 números\n3.-Tabla de multiplicar primeros 10 números\n4.-Salir");
        var tabla="";
        switch ((Number(opcion))) {

            case 1: var numero1 = Number(prompt("Escribe el primer número para sumar"));
                var numero2 = Number(prompt("Escribe el segundo número"));
                alert("la suma es: " + (numero1 + numero2));
                break;

            case 2: var numero1 = Number(prompt("Escribe el primer número para restar"));
                var numero2 = Number(prompt("Escribe el segundo número"));
                alert("la resta es: " + (numero1 - numero2));
                break;

            case 3: var numero1 = Number(prompt("Que tabla de multiplicar"));
                for(i=1;i<=10;i++){
                    tabla+=(numero1*i+"\n");
                }
                alert(tabla);
                break;
            case 4:
                alert("mata ne ;)")
                break;
            default: alert("Not such option");
                break;
        }
    } while (Number(opcion) != 4);
}