import React from 'react'

const Saludo = (props) => {
    return (
        <div>
            <h2>saludo a {props.persona}</h2>
            <h3>Edad de la persona: {props.edad}</h3>
        </div>
    )
}

export default Saludo
