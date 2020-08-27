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

