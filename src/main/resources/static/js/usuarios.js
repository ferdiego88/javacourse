    // Call the dataTables jQuery plugin
    $(document).ready(function() {
      cargarUsuarios();
      $('#usuarios').DataTable();
    });


    const cargarUsuarios = async () => {

        try {
            const response = await fetch('api/usuarios');
            if (response.status === 200) {
                const usuarios = await response.json();
                let listadoHtml = '';
                for (const usuario of usuarios) {
                    let telefonoPipe = usuario.telefono != null?usuario.telefono:'------';
                    let usuarioHtml = '<tr> ' +
                        '<td>'+ usuario.id + '</td>' +
                        '<td>'+ usuario.nombre +'</td>' +
                        '<td>'+ usuario.email + '</td>' +
                        '<td>'+ telefonoPipe + '</td>' +
                        '<td>  ' +
                        ' <a href="#"  ' +
                        'onclick="eliminarUsuario(' +  usuario.id + ')' +
                        '" class="btn btn-danger btn-circle btn-sm"> ' +
                        '<i class="fas fa-trash"></i> </a>' +
                        '</td> ' +
                        '</tr>';
                    listadoHtml += usuarioHtml;
                }

                document.querySelector('#usuarios tbody').outerHTML = listadoHtml;

            } else if(response.status === 400) {
                console.log('Algo salio mal')
            }

        }   catch (e) {
            console.log(e)
        }

    }

    const eliminarUsuario = async (id) => {


        try {

            if (!id){
                return;
            }

            if (!confirm('¿Desea eliminar este usuario?')) {
                return;
            }

            const response = await fetch('api/usuarios/' + id,{method:"DELETE"});

            if (response.status ===200) {
                console.log('Registro Eliminado');
            } else if (response.status === 400) {
                console.log('Algo salio mal');
        }

        } catch (e) {
            console.log(e);
        }
        document.location.reload();
    }