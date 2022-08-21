/*tomando como base los ejemplos de for y while,
crear un algoritmo que repita un bloque de instrucciones.
En cada repeticion se debe hacer una operacion o comparacion
para obtener una salida por alert o console

un algoritmo de js que emplee if y for*/

let nombre = prompt("Hola! Cuál es tu nombre?")
let cantidad = Number(prompt(`${nombre},Cuántas entradas quieres comprar?`))

while(cantidad > 4){
    alert(`Lo sentimos, ${nombre}, sólo se pueden comprar
    hasta 4 entradas por persona`)
   
}
let correo = prompt(`${nombre}, ingresa por favor tu e-mail`)

for(cantidad=0; cantidad <= 4; cantidad++){

if(correo.includes('@yahoo.com') || correo.includes('@gmail.com')|| correo.includes('@hotmail.com')){
    alert(`Perfecto, ${nombre}! te enviaremos las entradas 
    al correo que ingresaste`)
}
else{
alert(`${nombre}, recuerda que debes ingresar un correo válido. 
Intenta de nuevo por favor`)
}
 }


