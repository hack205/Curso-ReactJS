import React from 'react';
import shortid from 'shortid'; // es necesario agregar esta libreria para que genere id aleatorios 
                               // y aparte hay que ejecutar este comando en terinal
                               //   npm i shortid
function App() {

  const [tarea, setTarea] = React.useState('')
  const [tareas, setTareas] = React.useState([])
  const [modoEdicion, setModoEdicion] = React.useState(false)
  const [id, setId] = React.useState('')
  const [error, setError] = React.useState(null) // iniciamos este set error en null y esperamos a que cambie el mensaje 


  const agregarTarea = e => {
    e.preventDefault()
    if(!tarea.trim()){
      console.log('Elemento Vacío')
      setError('Escriba algo por favor...')
      return
    }
    console.log(tarea)

    setTareas([
      ...tareas,
      {id: shortid.generate(), nombreTarea:tarea} // la funcion shortid.generate() ayuda a generar id aleatorios y unicos
    ])

    setTarea('')
    setError(null)
  }

  const eliminarTarea = id => {
    const arrayFiltrado = tareas.filter(item => item.id !== id) // solo a los que sean diferentes del id los agregara 
    setTareas(arrayFiltrado)                                    // loq eu sean iguales los excluye y guarda el array en el set tareas
  }

  const editar = item => {
    console.log(item)
    setModoEdicion(true)
    setTarea(item.nombreTarea)
    setId(item.id)
  }

  const editarTarea = e => {
    e.preventDefault()
    if(!tarea.trim()){
      console.log('Elemento Vacío')
      setError('Escriba algo por favor...')
      return // si no escribe nada llega hasta el return y se sale 
    }

    const arrayEditado = tareas.map( // creamos un array y en el cual buscamos el id y si lo encontramos 
      item => item.id === id ? {id:id, nombreTarea:tarea} : item // modificamos los valores y si no es solo lo agragamos
      ) // y guardamos el array en el de set tareas
    
    setTareas(arrayEditado)
    setModoEdicion(false)
    setTarea('')
    setId('')
    setError(null)
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD Simple</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {

              tareas.length === 0 ? ( // si las tareas son 0 pinta un texto 
                <li className="list-group-item">No hay tareas</li>
              ) : (
                tareas.map(item => (// imprime las tareas disponibles
                  <li className="list-group-item" key={item.id}> 
                    <span className="lead">{item.nombreTarea}</span>
  
                    <button 
                      className="btn btn-danger btn-sm float-right mx-2"
                      onClick={() => eliminarTarea(item.id)}
                    >
                      Eliminar
                    </button>
  
                    <button 
                      className="btn btn-warning btn-sm float-right"
                      onClick={() => editar(item)}
                    >
                      Editar
                    </button>
  
                  </li>
                ))
              )

            }


          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {
              modoEdicion ? 'Editar Tarea' : 'Agregar Tarea' // con este operador ternario lo que estamos 
                                                              //haciendo es que si modo edicion esta en true 
                                                              // se manda llamar a editar tareas uy si no se llama agregar tareas
            }                                                 
          </h4>
          <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>

            {
              error ? <span className="text-danger">{error}</span> : null
            }

            <input 
              type="text" 
              className="form-control mb-2"
              placeholder="Ingrese Tarea"
              onChange={ e => setTarea(e.target.value) }
              value={tarea} // pasamos la tarea completa por valor para poder modificarla
            />

            {
              modoEdicion ? (
                <button className="btn btn-warning btn-block" type="submit">Editar</button> // si es tue se pinta editar 
              ) : (                                                                         // si no se pinta agregar 
                <button className="btn btn-dark btn-block" type="submit">Agregar</button>   // todo esto depende del operador
              )                                                                             //ternario  
            }

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
