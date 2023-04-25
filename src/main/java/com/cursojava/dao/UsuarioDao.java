package com.cursojava.dao;

import com.cursojava.models.Usuario;

import java.util.List;

public interface UsuarioDao {

    List<Usuario> getUsuarios();

    void eliminarUsuario(Long id);

    Usuario registrar(Usuario usuario);
}
