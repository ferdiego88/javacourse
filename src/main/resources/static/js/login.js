
$(document).ready(function() {
    // on ready
});


const iniciarSesion = async () => {
    let usuario = {};
    usuario.email = document.getElementById('txtEmail').value;
    usuario.password = document.getElementById('txtPassword').value;

    try {

        const request = await fetch('api/login',
            {   method:'POST',
                body: JSON.stringify(usuario),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        const response = await request.text();
        if (response == 'OK'){
            window.location.href = 'usuarios.html';
        } else {
            alert('Las credenciales son incorrectas. Por favor intente nuevamente.');
        }
    }   catch (e) {
        console.log(e)
    }

}

