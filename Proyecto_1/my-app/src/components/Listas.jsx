import React, {useState} from 'react'

const Listas = () => {

    const estadoInicial=[1,2,3,4,5]

    const [lista, setLista] = useState(estadoInicial)
    return (
        <div>
            {
                lista.map((item,index) =>( // el idex funciona como un id para el key ya que es requerido 
                <h4 key = {index}>{item}</h4>
                ))
            }
        </div>
    )
}

export default Listas