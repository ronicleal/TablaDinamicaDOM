/**Habilidades necesarias: Manejo del DOM, eventos, funciones.*
Diseña una página web que inicialmente esté vacía (el body vacío), posteriormente, sólo con JavaScript realiza los siguientes puntos:
- Añade una tabla vacía del contenido que prefieras, con un mínimo de 2 columnas.
- Crea un botón para que cada vez que pulsemos, automáticamente se añada una fila a la tabla con datos aleatorios 
que tendrás previamente declarados.
- El botón deberá ejecutar una función que realice esa tarea.
- Se deberán usar arrays para guardar una serie de nombres y obtenerlos de ahí.
Por ejemplo, una tabla con nombres de personas y sus edades (un array de nombres y que la edad sea aleatoria entre 0-100) */


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



