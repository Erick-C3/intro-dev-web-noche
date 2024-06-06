function obtenerInfoUsuarios() {
    const olListaUsuarios = document.querySelector("#lista-usuarios");

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.forEach(usuario => {
        olListaUsuarios.innerHTML += `
            <li>
                <ul>
                    <li>
                        ${usuario.nombre}
                    </li>
                    <li>
                        ${usuario.email}
                    </li>
                    <li>
                        ${usuario.contrasenia}
                    </li>
                </ul>
            </li>
        `;
    });
}

obtenerInfoUsuarios();