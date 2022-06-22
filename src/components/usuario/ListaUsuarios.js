
import React, { useState, useEffect } from 'react'
import UsuarioInividual from './UsuarioInividual'
import axios from "axios"

const ListaUsuarios = () => {

  const [dataUsuario, setDataUsuario] = useState([])

  useEffect(() => {

    axios.get('/api/obtenerusuarios')
      .then(res => {
        setDataUsuario(res.data.response.usuarios)

      })
      .catch(err => { console.log(err) })


  }, []);

  const listausuarios = dataUsuario.map(usuario => {

    return (
      <div><UsuarioInividual usuario={usuario} /></div>
    )
  })


  return (
    <div className='container-list-user'>


      <h2> Lista de usuarios</h2>
      {listausuarios.length > 0 ?
        <div className='prueba'>
          {listausuarios}

        </div>
        :
        <h2 className>No hay info</h2>
      }

    </div>


  )
}

export default ListaUsuarios