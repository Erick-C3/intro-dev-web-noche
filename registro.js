function registrar() {
    const inputNombre = document.querySelector("#usuario-nombre");
    const inputContra = document.querySelector("#usuario-contrasenia");
    const inputEmail = document.querySelector("#usuario-email");

    const nuevoUsuario = {
        nombre: inputNombre.value,
        contrasenia: inputContra.value,
        email: inputEmail.value
    }

    const usuarios =  JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}