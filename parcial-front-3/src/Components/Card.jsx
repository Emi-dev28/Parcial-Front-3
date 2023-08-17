import React from 'react'
import '../styles/card.css'
const Card = ({userData}) => {
  console.log(userData)
  return (
    <div class ="card">
        <h3>Bienvenido, {userData.nombre_mail}</h3>
        <h3>Tu usuario es: {userData.usuario}</h3>
        <h3> Gracias por registrarte 💪🏻</h3>

    </div>
  )
}

export default Card