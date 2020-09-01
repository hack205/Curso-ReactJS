import React,{useState} from 'react'

export const ListasObjetos = () => {
    const estadoInicial=[
        {id:0,texto:'Tarea 1'},
        {id:1,texto:'Tarea 2'},
        {id:2,texto:'Tarea 3'},

    ]
    const[listaObjetos,setListaObjetos]=useState(estadoInicial)
    const agregarElemento = () =>{
        setListaObjetos([
            ...listaObjetos, // operador de propagación sirve para unir dos o más arreglos
            {id:4,texto:'Tarea 4'}
        ])
    }
    
    
    return (
        <div>
            {
                listaObjetos.map( (item, index)=>(
                <h4 key={index}>{item.texto}</h4>
                ))
            }
            <button onClick ={() => agregarElemento()}>Agregar</button>
        </div>
    )
}
