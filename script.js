/**Habilidades necesarias: Manejo del DOM, eventos, funciones.*
Diseña una página web que inicialmente esté vacía (el body vacío), posteriormente, sólo con JavaScript realiza los siguientes puntos:
- Añade una tabla vacía del contenido que prefieras, con un mínimo de 2 columnas.
- Crea un botón para que cada vez que pulsemos, automáticamente se añada una fila a la tabla con datos aleatorios 
que tendrás previamente declarados.
- El botón deberá ejecutar una función que realice esa tarea.
- Se deberán usar arrays para guardar una serie de nombres y obtenerlos de ahí.
Por ejemplo, una tabla con nombres de personas y sus edades (un array de nombres y que la edad sea aleatoria entre 0-100) */


//Declarar un array con nombres
// const nombre = ["Ronic", "Diego", "Rebeca", "Julia", "Alba"];

//Crear la tabla y el boton con js
// const tabla = document.createElement("table");
// tabla.style.border = "1px solid black";


//Encabezados de la tabla
// const encabezado = document.createElement("tr"); //El tr para el titulo


// const th1 = document.createElement("th");
// th1.textContent = "Nombre";
// th1.style.border = "1px solid black";


// const th2 = document.createElement("th");
// th2.textContent = "Edad";
// th2.style.border = "1px solid black";

// encabezado.appendChild(th1);
// encabezado.appendChild(th2);
// tabla.appendChild(encabezado)

// document.body.appendChild(tabla);


//Crear boton
// const boton = document.createElement("button");
// boton.textContent = "Agregar fila";

// document.body.appendChild(boton);

//Funcion para agregar fila
// function agregarFila(){
//     const fila = document.createElement("tr");
//     const nombreAleatorio = nombre [Math.floor(Math.random() * nombre.length)];
//     const edadAleatoria = Math.floor(Math.random() * 101);

//     const celdaNombre = document.createElement("td");
//     celdaNombre.textContent = nombreAleatorio;

//     const celdaEdad = document.createElement("td");
//     celdaEdad.textContent = edadAleatoria;

//     fila.appendChild(celdaNombre);
//     fila.appendChild(celdaEdad);

//     tabla.appendChild(fila);
// }

// //Evento en el boton
// boton.addEventListener("click", agregarFila);










//------- ------------------TABLA DE ELIAS---------------------------------------
//-------------------------CREAR LA TABLA----------------------------------------

const tableElement = document.createElement("table");
const trElement = document.createElement("tr");

let columnas = ["Nombre", "Edad"];
let nombres = ["Ronic", "Diego", "Julia", "Rebeca", "Alba"]

const maxColumns = 2;

for(let th=0; th < maxColumns; th++){
    const thElement = document.createElement("th");
    thElement.innerText = columnas[th];
    trElement.appendChild(thElement);
}


//LA AÑADO AL BODY
document.body.appendChild(tableElement);

//AÑADO A LA TABLA LA FILA YA FORMADA
tableElement.appendChild(trElement)


//----------------------------CREAR EL BOTON---------------------------------------------------
const buttonElement = document.createElement("button");
buttonElement.innerText = "Añadir Fila";

function newRow(){
    //CREO EL ELEMENTO FILA
   const trElement = document.createElement("tr");

   //CREO EL td PARA EL NOMBRE
   let random = Math.floor(Math.random() * nombres.length );
   let randomName = nombres[random];
   let tdNombre = document.createElement("td");
   tdNombre.innerText = randomName;
   trElement.appendChild(tdNombre);

   //CREO UN td PARA LA EDAD
   let randomAge = Math.floor(Math.random() * 100);
   tdEdad = document.createElement("td");
   tdEdad.innerText = randomAge;
   trElement.appendChild(tdEdad);

   //AÑADO LA FILA YA FORMADA A LA TABLA
   tableElement.appendChild(trElement);
}


//LO AÑADO AL BODY
document.body.appendChild(buttonElement);

//EJECUTAR EL BOTON
buttonElement.addEventListener("click", newRow);



