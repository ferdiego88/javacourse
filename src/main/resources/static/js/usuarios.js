// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#usuarios').DataTable();
});


const cargarUsuarios = async () => {

    try {
        const response = await fetch('usuarios');
        if (response.status === 200) {
            const usuarios = await response.json();
            console.log(usuarios)
            let listadoHtml = '';
            for (const usuario of usuarios) {
                let usuarioHtml = '<tr> ' +
                    '<td>'+usuario.id + '</td>' +
                    '<td>'+usuario.nombre +'</td>' +
                    '<td>'+usuario.email + '</td>' +
                    '<td>'+usuario.telefono + '</td>' +
                    '<td>  <a href="#" class="btn btn-danger btn-circle btn-sm"> <i class="fas fa-trash"></i> </a></td> ' +
                    '</tr>';
                listadoHtml += usuarioHtml;
            }

            document.querySelector('#usuarios tbody').outerHTML = listadoHtml;

        } else if(response.status === 400) {
            console.log('Algo salio mal')
        }
        
    }catch (e) {
        console.log(e)
    }

}

async function  cargarUsuario() {

 const request = await fetch('usuarios',{
   method: 'GET',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   }
 })
  const usuarios =  request.json();
    console.log(usuarios)
    for (const usuario of usuarios) {


    }



}