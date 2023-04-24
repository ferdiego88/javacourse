package com.cursojava.dao;

import com.cursojava.models.Usuario;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class UsuarioDaoImpl implements UsuarioDao {

    @Override
    public List<Usuario> getUsuarios() {
        return null;
    }
}
