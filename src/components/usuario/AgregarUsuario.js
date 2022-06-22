import React,{useState} from 'react'
import uniquid from 'uniquid'
import axios from "axios"
import Swal from "sweetalert2"
import { Link as Linkrouter, useNavigate } from 'react-router-dom'

const AgregarUsuario = () => {


  const [nombre,setNombre]=useState('')
  const [email,setEmail]=useState('')
  const [telefono,setTelefono]=useState('')

  const navegar=useNavigate()

  const agregarUsuario=(event)=>{
    event.preventDefault()

    var usuario={
      nombre:nombre,
      email:email,
      telefono:telefono,
      idusuario:uniquid()
    }

    console.log(usuario)
    axios.post('/api/agregarusuarios', usuario)
    .then(res=>{
      //alert(res.data)
      Swal.fire('Felicitaciones', res.data)
      navegar('/')

    })
    .then(err =>{console.log(err)})
    
  }

  return (
    <div className='container'>
      <div className='row'>
        
          <h2 className='mt-4'>Crear un nuevo usuario</h2>
        
      </div>
      <div className='row'>
        <form onSubmit={agregarUsuario} className="mx-auto"> 
        <div className='col-sm-6 offset-3'>
          <div className='mb-3'>
            <label htmlFor='nombre' className='form-label'>Nombre</label>
            <input type="text" name='nombre' required value={nombre} onChange={(e)=>{setNombre(e.target.value)}} className='form-control'></input>
          </div>

          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type="email" required className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
          </div>

          <div className='mb-3'>
            <label htmlFor='telefono' className='form-label'>telefono</label>
            <input type="text" value={telefono} required onChange={(e)=>{setTelefono(e.target.value)}} className='form-control'></input>
          </div>

          


          <button type="submit" className='btn btn-primary'>Guardar</button>

        </div>
        </form>
      </div>
    </div>
  )
}

export default AgregarUsuario