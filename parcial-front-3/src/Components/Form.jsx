import React, { useState } from 'react'
import Card from './Card';
import '../styles/form.css' 
const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre_mail: '',
    usuario: '',
    contraseña: '',
    
  })
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const handleSubmit = () => {
    const usuarioRegex = /^[a-zA-Z0-9_]{3,20}$/
    const contraseñaRegex = /^[\w\d]{6,}$/
    
      if(usuario.nombre_mail.match(usuarioRegex) && usuario.nombre_mail.length > 3 || usuario.usuario.match(usuarioRegex)&& usuario.usuario.lenght >3){
        setShow(true)
        setError(false)
    }
      else{
        setError(true)
        setShow(false)
  } 
      if(usuario.contraseña.match(contraseñaRegex) && usuario.contraseña.length > 3){
        setShow(true)
        setError(false)
  }
      else{
        setError(true)
        setShow(false)
  }
  
}
  return (
    <div className="content">
      <label>Ingresa tu nombre</label>
      <input type="text" onChange={(e) => setUsuario({...usuario, nombre_mail: e.target.value})}/>
      <label className='labels'>Ingresa tu usuario/mail</label>
      <input type="text" onChange={(e) => setUsuario({...usuario, usuario: e.target.value})} />
      <label className='labels'>Ingresa tu contraseña</label>
      <input type="password" onChange={(e) => setUsuario({...usuario, contraseña: e.target.value})}/>
      <button className='btn-primary' onClick={handleSubmit}>
        Registrarse
      </button>
      {error && <p>El usuario o la contraseña no cumplen los requisitos</p>}
      {show ?  
      <>
      <Card userData={usuario}/>
      </>
      : null
}

    </div>
  )
}

export default Form