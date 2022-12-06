//HELADERIA

// Ingresar a una heladeria y pedir uno. Elegir entre las opciones que nos ofrece el local.

/* const bienvenida = "Bienvenid@ a Heladeria H";

alert(bienvenida);

let pedido = prompt("Para realizar tu pedido ingresa 1. Para cerrar y seguir navengado, presiona otro numero");

let validar = "1" ;

function login(){

    if (pedido == validar) {
        // bloque de código a ejecutar
        alert(cantidad);
    } else{
        alert("gracias vuelva pronto")
    }


}



// function login(){
//     let confirmacion = false;

// }

let cantidad = prompt ("Seleccioná la cantidad: 1 kg. 1/2 kilo. 1/4 de kilo. Cucurucho/vasito")






let producto = prompt ("Nuestro catálogo: 1- Chocolate. 2- Dulce de Leche. 3- Limon ")

// alert (pedido)

while (opcion != )

switch (cantidad){
    case "1kg":
        alert("$2000");
        break;
    case "1/2kg": 
        alert("$1500");
        break;
    case "1/4kg": 
        alert("$1000");
        break;          
    case "cono/vaso": 
        alert("$500");
        break;      
} */



// CINE

// PEDIR USUARIO (DNI) PARA PODER PEDIR LAS ENTRADAS ONLINE

let savedPIN = "34589654";

function login() {
  let ingresar = false;

  for (let i = 2; i >= 0; i--) {
    let userPIN = prompt("Ingresa tu numero de Dni.");

    if (userPIN === savedPIN) {
      alert("Bienvenido a Cinema La Plata");
      ingresar = true;
      break;
    } else {
      alert("Error. Te quedan " + i + "intentos");
    }
  }
  return ingresar;
}

let exito = login();

//Estoy dentro de mi cuenta

if (exito) {
  //Definicion de valores y cartelera
  let valor = 500;
  let cantidad
  let opcion = prompt(
    "Cartelera: \n1- Top Gun. \n2 - Titanic . \n3 - Spiderman. \n4- Volver al futuro I \n5- Forest Gump \nPresioná X para finalizar."
  );
  let horarios = prompt(
    "Funciones: \n1- 19:15 hs. \n2 - 21:30 hs . \n3 - 23:00 hs. \nPresioná X para finalizar."
  );
  let dias = prompt(
    "Día: \n1- Lunes. \n2 - Martes. \n3 - Miercoles. \n4- Jueves. \n5- Viernes. \n6-Sábado. \n7- Domingo. \nPresioná X para finalizar.");


  while (opcion != "X" && opcion != "x") {
    switch (opcion) {
      
      // INTERACCION CON EL USUARIO PARA QUE ELIGA PELICULA, DIA Y HORARIO

      case "1":
        horarios 
        cantidad = parseInt(prompt("Cantidad de entradas"))
        alert("El valor de tu entrada es $" + cantidad * valor);
        alert(`Tu pelicula es: Top Gun \nDía: ${dias} \nHorario:  ${+ horarios} \nSala: VIP \nCantidad de entradas:  ${+ cantidad} \nTOTAL: ${cantidad * valor} `)

        break;

      case "2":

        horarios 
        cantidad = parseInt(prompt("Cantidad de entradas"))
        alert("El valor de tu entrada es $" + cantidad * valor);
        alert(`Tu pelicula es: Titanic \nDía: ${dias} \nHorario:  ${+ horarios} \nSala: Anfiteatro \nCantidad de entradas:  ${+ cantidad} \nTOTAL: ${cantidad * valor} `)
        break;

      case "3":
        horarios 
        cantidad = parseInt(prompt("Cantidad de entradas"))
        alert("El valor de tu entrada es $" + cantidad * valor);
        alert(`Tu pelicula es: Spiderman \nDía: ${dias} \nHorario:  ${+ horarios} \nSala: 4D \nCantidad de entradas:  ${+ cantidad} \nTOTAL: ${cantidad * valor} `)
        break;

      case "4":
        horarios 
        cantidad = parseInt(prompt("Cantidad de entradas"))
        alert("El valor de tu entrada es $" + cantidad * valor);
        alert(`Tu pelicula es: Volver al futuro I \nDía: ${dias} \nHorario:  ${+ horarios} \nSala: UNO \nCantidad de entradas:  ${+ cantidad} \nTOTAL: ${cantidad * valor} `)
        break;  

      case "5":
        horarios 
        cantidad = parseInt(prompt("Cantidad de entradas"))
        alert("El valor de tu entrada es $" + cantidad * valor);
        alert(`Tu pelicula es: Forest Gump \nDía: ${dias} \nHorario:  ${+ horarios} \nSala: Atleti \nCantidad de entradas:  ${+ cantidad} \nTOTAL: ${cantidad * valor} `)
        break;

      default:
        alert("Pelicula o funcion no disponible");
        break;
    }

    //SALIDA DEL WHILE
    opcion = prompt(
        "Cartelera: \n1- Top Gun. \n2 - Titanic . \n3 - Spiderman. \n4- Volver al futuro I \n5- Forest Gump \nPresioná X para finalizar."
    );
  }
} else {
  // SE BLOQUEA EL USUARIO Y TIENE QUE LLAMAR AL CINE 
  alert("Cuenta bloqueada, llamá al 08005556565");
}

// FIN DEL PROGRAMA
alert("Gracias por visitar CINEMA LA PLATA. Te esperamos para futuros estrenos!!");