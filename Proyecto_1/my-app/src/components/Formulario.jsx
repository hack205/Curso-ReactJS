import React from 'react'

const Formulario = () => {
    const [fruta,setFruta] = React.useState('')
    const [Descripcion,setDescripcion] = React.useState('')
    const[lista, setLista] = React.useState([])



    const guardarDatos = (e) => {
        e.preventDefault() // esta funcion hace que no haga las cosas por defaul o sea que no las mande por get 
        if(!fruta.trim()){ // si la cadena esta vacia / el trim limpia los espacio y si no hay nada que limpiar hace algo
            console.log('esta vacio fruta')
            return
        }
        if(!Descripcion.trim()){
            console.log('esta vacio descripcion')
            return
        }

        //console.log('Procesando datos :' +fruta +Descripcion)
        setLista([
            ...lista,
            {nombreFruta: fruta, nombreDecripcion:Descripcion} // le pasamos los valores que queremos agregar al array 
        ])
        
        e.target.reset() // resetea los campos para que esten blancos 
        setFruta('') // limpiamos los hooks
        setDescripcion('') // limpiamos los hooks
        //onSubmit es una forma de validar un formulario que anda llamar a una función 
    }
    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit = { guardarDatos }> 
                <input
                type = "text"
                placeholder="Ingrese Fruta"
                className = "form-control mb-2"
                onChange ={(e) => setFruta(e.target.value)}
                />
                <input
                type = "text"
                placeholder="Ingrese Descripcion"
                className = "form-control mb-2"
                onChange ={(e) => setDescripcion  (e.target.value)}
                />
                <button className = "btn btn-primary btn-block">Agregar</button>
            </form>
            <ul>
                {
                    lista.map((item, index) =>(
                        <li key={index}>
                            {item.nombreFruta} - {item.nombreDecripcion} 
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Formulario
