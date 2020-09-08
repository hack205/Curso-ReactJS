import React from 'react';
import Saludo from './components/Saludo'
import Comentario from './components/Comentario';

function App() {
  return (
    <div className = "container mt-5">
      <h1>Proyecto basio</h1>
      <Saludo persona='Ignacio' edad ={13} />
      <Saludo persona='juan' edad = {23} />
      <Saludo persona='pedro' edad = {24} />
      <hr />
      <h3>Cajita de comentarios</h3>
      <Comentario 
      urlImagen='https://picsum.photos/64'
      persona='Ignacio'
      texto='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      />
      <Comentario 
      urlImagen='https://picsum.photos/64'
      persona='pedro'
      texto='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      />
      <Comentario 
      urlImagen='https://picsum.photos/64'
      persona='juanito'
      texto='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      />
    </div>
  );
}

export default App;
