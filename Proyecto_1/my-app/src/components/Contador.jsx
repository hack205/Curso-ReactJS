import React from 'react'

const Contador = () => {
    const [contador,setContador] = React.useState(0)
    const aumentar = () =>{
        console.log('click')
        setContador(contador+1)
    }
    return (
        <div>
            <h2>Contador</h2>
            <h3>Nuestro contador aumentando: {contador}</h3>
            <h4>
                {//operador ternario
                    contador > 2 ? 'Es Mayor a 2': 'Es menor a 2' // condicion ´+ respuesta positiva: Respuesta negativa
                }

            </h4>
            <button onClick = {() => aumentar()}>Aumentar</button>
        </div>
    )
}

export default Contador
