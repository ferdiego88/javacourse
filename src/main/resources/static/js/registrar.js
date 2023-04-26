
$(document).ready(function() {
    // on ready
});


const registrarUsuarios = async () => {
    let usuario = {};
    usuario.nombre = document.getElementById('txtNombre').value;
    usuario.apellido = document.getElementById('txtApellido').value;
    usuario.email = document.getElementById('txtEmail').value;
    usuario.password = document.getElementById('txtPassword').value;

    let confirmPassword = document.getElementById('txtRepeatPassword').value;

    if (confirmPassword != usuario.password) {
        alert('Las contraseñas no son iguales');
        return;
    }

    try {

        const response = await fetch('api/usuarios',
            {   method:'POST',
                    body: JSON.stringify(usuario),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
        const usuarios = await response.json();

    }   catch (e) {
        console.log(e)
    }

}

