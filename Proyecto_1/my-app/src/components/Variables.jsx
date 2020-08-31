import React from 'react'

const Variables = () => {
    const saludo = 'Hola desde constante'
    const imagen = 'https://i.pinimg.com/originals/a7/1f/f9/a71ff9571bf8cced82f4dacabddb6819.gif'
    return (
        <div>
            <h2>Nuevo componente {saludo}</h2>
            <img src = {imagen} alt=""/>
        </div>
    )
}

export default Variables
