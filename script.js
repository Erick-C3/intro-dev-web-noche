function main() {
    const inputTexto = document.querySelector("#entrada-texto");
    const inputNombre = document.querySelector("#entrada-nombre");
    const spanTituloTemp = document.querySelector("#titulo-temporal");

    const body = document.querySelector("body");

    console.log(inputTexto.value, inputNombre.value);

    spanTituloTemp.textContent = inputNombre.value + " - "+inputTexto.value;
    spanTituloTemp.style.color = "green";
    spanTituloTemp.style.backgroundColor = "yellow";

    body.style.backgroundColor = generadorColorAleatorio();
    body.style.color = "black";
}


/**
 * Genera un color con formato rgb aleatorio
 * @returns color generado aleatoriamente
 */
function generadorColorAleatorio() {
    let codigoRojoAleatorio = generarCodigoColorAleatorio();
    let codigoVerdeAleatorio = generarCodigoColorAleatorio();
    let codigoAzulAleatorio = generarCodigoColorAleatorio();

    return `rgb(${codigoRojoAleatorio},${codigoVerdeAleatorio}, ${codigoAzulAleatorio})`;
}

/**
 * Genera un codigo de color aleatorio
 * @returns codigo color aleatorio generado
 */
function generarCodigoColorAleatorio() {
    return Math.floor(Math.random() * 256);
}

