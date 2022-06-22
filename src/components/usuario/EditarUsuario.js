import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from "axios"
import { Link as Linkrouter, useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"

const EditarUsuario = () => {

  const params = useParams()
  console.log(params)

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')

  const navegar = useNavigate()

  useEffect(() => {
    axios.post('/api/obtenerdatausuario', { idusuario: params.idusuario })
      .then(res => {
        console.log(res.data[0])
        const datausuario = res.data[0]
        setNombre(datausuario.nombre)
        setEmail(datausuario.email)
        setTelefono(datausuario.telefono)
        //setDataUsuario(res.data.response.usuarios)

      })
      .catch(err => { console.log(err) })

  }, []);

  const editarUsuario = () => {

    //nuevo objeto para actualizar usuario
    const newusuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idusuario: params.idusuario
    }

    console.log(newusuario)
    axios.post('/api/actualizausuario', newusuario)
      .then(res => {
        Swal.fire(res.data)
        navegar('/')

      })
      .then(err => { console.log(err) })

  }

  return (
    <div className='container'>
      <div className='row'>

        <h2 className='mt-4'>Editar usuario</h2>

      </div>
      <div className='row'>
        <div className='col-sm-6 offset-3'>
          <div className='mb-3'>
            <label htmlFor='nombre' className='form-label'>Nombre</label>
            <input type="text" name='nombre' value={nombre} onChange={(e) => { setNombre(e.target.value) }} className='form-control'></input>
          </div>

          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className='form-control'></input>
          </div>

          <div className='mb-3'>
            <label htmlFor='telefono' className='form-label'>telefono</label>
            <input type="text" value={telefono} onChange={(e) => { setTelefono(e.target.value) }} className='form-control'></input>
          </div>

          <button onClick={editarUsuario} className='btn btn-primary'>Editar</button>

        </div>
      </div>
    </div>

  )
}

export default EditarUsuario