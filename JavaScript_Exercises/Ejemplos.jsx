// variables
//var ---> const --> let
// var se puede sobre escribir
//let no se puede declarar otra variable pero si se pude sobre escribir
// const no permite cambiar su valor pero en un objeto si 


function sumar(num){
    console.log(num)
}
sumar(10)

const sumarDos = (num1,num2) =>{
    console.log(num1 +num2)
}

sumarDos(3,3)

const sumarReturn = (num1,num2,num3) =>{
    return (num1 + num2 +num3)
}
const result = sumarReturn(2,2,2)
console.log(result)

const mensaje = (mensajes) =>("Hola"+mensajes)

const mensajesalida = mensaje("paco")
console.log(mensajesalida)


const sumaAsignada = (numero = 1) =>{
    console.log(numero +3)
}
sumaAsignada(2)

//Templates Strings

const numero = (num1,num2) =>{
    return `El numero es ; ${num1+num2}`
}

const resultado = numero(20,30)
console.log(resultado)

const numero = (num1,num2) =>(`El numero es ; ${num1+num2}`)
const resultado = numero(20,30)
console.log(resultado)

//Objetos en JavaScript
const Mascota ={
    nombre: 'peludo',
    edad: 2,
    vivo: 'true',
    razas: ['pitbull','chihuahua']
}
console.log(Mascota)
console.log(Mascota.edad)
console.log(Mascota.vivo)
console.log(Mascota.nombre)
console.log(Mascota.razas[0])
console.log(Mascota.razas[1])

Mascota.id = 1

console.log(Mascota.id)


//Destructuring Objects
const Mascota ={
    nombre: 'peludo',
    edad: 2,
    vivo: 'true',
    razas: ['pitbull','chihuahua']
  }
  
  const nombreMascota = Mascota.nombre
  console.log(nombreMascota)
  const {edad, nombre} = Mascota
  console.log(nombre)
  console.log(edad)

  // trabajando con objetos


  const web = {
    nombre:'bluuweb',
    links: {
        enlace: 'www.bluuweb.com'
    },
    redesSociales:{
        youtube:{
            enlace:'youtube.com/bluuweb',
            nombre:'bluuweb yt'
        },
        facebook:{
            enlace:'facebook.com/bluuweb',
            nombre:'bluuweb fb'
        }
    }
  }

  console.log(web.redesSociales.youtube.enlace)
  const enlaceyoutube = web.redesSociales.youtube.enlace
  console.log(enlaceyoutube)

  const {enlace,nombre} = web.redesSociales.youtube.enlace

//Fetc Api
fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(resultado => resultado.json()) //then esperando una respuesta 
  .then(datos =>{
      datos.results.forEach(element => {
          console.log(element.name)
      })
  })
  .catch(error => console.log(error))

  //Async // Await 

  const obtenerPokemones = async() =>{
      try {
          const res = await fetch('https://pokeapi.co/api/v2/pokemon/') // con wait le decimos que esperamos una respuesta de fetch de la web
          const data = await res.json() // esperamos la respuesta de res pero en json 
          //console.log(data.result)
          data.results.forEach(element => {
            console.log(element.name)
        })
      } catch (error) {
          console.log(error)
      }
  }

  obtenerPokemones()

//Map
// El map funciona para recorrer el arreglo y devolver una propiedad, es como el forEach
const obtenerPokemones = async() =>{
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/') // con wait le decimos que esperamos una respuesta de fetch de la web
        const data = await res.json() // esperamos la respuesta de res pero en json 
        //console.log(data.result)
        const arrayNombres = data.result.map(poke => poke.name)
        console.log(arrayNombres)
    } catch (error) {
        console.log(error)
    }
}
obtenerPokemones()
//Filter
// La propiedad de filter nos permite filtar en un arreglo propiedades que queremos o que no queremos
const obtenerPokemones = async() =>{
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/') // con wait le decimos que esperamos una respuesta de fetch de la web
        const data = await res.json() // esperamos la respuesta de res pero en json 
        //console.log(data.result)
        const arrayNombres = data.results.filter(poke => poke.name === 'bulbasaur' ) // filtrar por nombre bulbasaur
       // const arrayNombres = data.results.filter(poke => poke.name !== 'bulbasaur' )
        console.log(arrayNombres)
    } catch (error) {
        console.log(error)
    }
}

obtenerPokemones()