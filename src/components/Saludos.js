import React from 'react'

export default function Saludos(props) {
  return (
    <div>
        <h2>Hola, { props.name } { props.edad }</h2>
    </div>
  )
}
