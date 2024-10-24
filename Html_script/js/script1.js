//Ejemplos de Seleccion
//query selector selecciona una etiqueta(selector) o el primero de la
//por etiqueta
console.log(document.querySelector('p'))
//por id
console.log(document.querySelector('#texto1'))
console.log(document.getElementById('texto1'))
//por clase

//Cambiar el contenido
const cambio=document.getElementById('texto1')
cambio.textContent = "ejemplo de Textcontent"

//Para crear un elemento parrafo
var p_nuevo = document.createElement('p');
p_nuevo.textContent = "Este es un parrafo NUEVO";
document.getElementById("parrafo-nuevo").appendChild(p_nuevo);

//para crear la imagen
const contenedor = document.getElementById("imagen-nueva");
const image = document.createElement("img");
image.src = "img/p1.png";
image.alt = "Imagen";
contenedor.appendChild(image);
document.getElementById("imagen-nueva").appendChild(image);

//Para crear la tabla
const tabla = document.crateElement("table");
const tablaBody = document.createElement("tbody");
    //Crear las filas y las celdas
    
    for(let i =0; i < 2; i++){
        const fila = document.createElement("tr");

        for( let j = 0; j < 2; j++){
            const celda= document.createElement("td");
            celda.textContent = `Fila ${i + 1}Columna ${j + 1}`
            celda.appendChild(celda); //Añadir celda a la fila
        }

        tablaBody.appendChild(fila);//Añadir fila al cuerpo
    }
    //Añadir eñ cuerpo de la tabla a la tabla
    tabla.appendChild(tablaBody);
    //Añadir tabla al contenedor en el HTML
    document.getElementById("tabla-nueva").appendChild(tabla);