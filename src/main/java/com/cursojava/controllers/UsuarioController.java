package com.cursojava.controllers;

import com.cursojava.models.Usuario;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UsuarioController {


    @RequestMapping(value = "usuario/{id}")
    public Usuario getUsuario(@PathVariable Long id){
        Usuario usuario = new Usuario();
        usuario.setId(id);
        usuario.setNombre("Lucas");
        usuario.setApellido("Santillan");
        usuario.setEmail("fernando@gmail.com");
        usuario.setTelefono("942215621");
        return usuario;
    }

    @RequestMapping(value = "usuarios")
    public List<Usuario> getUsuarios() {

        List<Usuario> usuarios = new ArrayList<>();

        Usuario usuario = new Usuario();
        usuario.setId(456L);
        usuario.setNombre("Lucas");
        usuario.setApellido("Santillan");
        usuario.setEmail("fernando@gmail.com");
        usuario.setTelefono("942215621");

        Usuario usuario2 = new Usuario();
        usuario2.setId(457L);
        usuario2.setNombre("Rosa");
        usuario2.setApellido("Varas");
        usuario2.setEmail("rosita.varaso@gmail.com");
        usuario2.setTelefono("98899852");

        Usuario usuario3 = new Usuario();
        usuario3.setId(458L);
        usuario3.setNombre("Pablo");
        usuario3.setApellido("Torres");
        usuario3.setEmail("pablo@gmail.com");
        usuario3.setTelefono("98545542");

        usuarios.add(usuario);
        usuarios.add(usuario2);
        usuarios.add(usuario3);

        return usuarios;
    }


}
