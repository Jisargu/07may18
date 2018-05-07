const ID_A_MODIFICAR="tamanio_pantalla";
function tamanio_ventana() {
    let alto_ventana = document.documentElement.clientHeight;
    let ancho_ventana = document.documentElement.clientWidth;
    document.getElementById(ID_A_MODIFICAR).innerHTML= "ancho "+ancho_ventana+" alto "+alto_ventana;
}