import React, { useEffect } from 'react'
import { Link as Linkrouter, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AOS from 'aos'
import "aos/dist/aos.css"
import Swal from "sweetalert2"

const UsuarioInividual = ({ usuario }) => {

  const navegar = useNavigate()

  //animacion

  useEffect(() => {
    AOS.init()

  }, []);

  const borrarusuario = (idusuario) => {

    axios.post('/api/borrarusuario', { idusuario: idusuario })
      .then(res => {
        console.log(res.data)
      
        Swal.fire(res.data)
        navegar(0)
      }).catch(err => {
        console.log(err)
      })



  }


  return (
    <div className='container'>
      <div className='row '>
        <div className='card-user' data-aos="zoom-in" >
          <ul className='list-group'>
            {/* <li className='list-group-item'>{usuario.idusuario}</li> */}
            <li className='list-group-item'>{usuario.nombre}</li>
            <li className='list-group-item'>{usuario.email}</li>
            <li className='list-group-item'>{usuario.telefono}</li>
          </ul>

          <div className='mt-4'> 

            <Linkrouter to={`/editarusuario/${usuario.idusuario}`} className='btn btn-success'>Editar</Linkrouter>
            &nbsp;
            <button className='btn btn-danger' onClick={() => { borrarusuario(usuario.idusuario) }}>borrar</button>

          </div>
        </div>


      </div>
    </div>
  )
}

export default UsuarioInividual