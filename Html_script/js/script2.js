//Creando y Eliminando imagenes
function crearImagen() {
    const contenedor = document.getElementById("image-container");
    const image = document.createElement("img");
    image.src = "img/p1.png";
    image.alt = "Imagen";
    image.id ="miImagen";//Le asignamos un id para poder e
    contenedor.appendChild(img);
    document.getElementById("imagen-nueva").appendChild(image);
    
}
function eliminarImagen() {
    const img = document.getElementById("miImagen");
    if(img){
        img.remove();//Elimina la imagen
    }
}

function crearParrafo(){
    const contenedor = document.getElementById("parrafo");
    const parrafo = document.createElement("p");
    parrafo.id = "miParrafo";
    parrafo.textContent = "Esta es una oracion ejemplo";
    contenedor,appendChild(parrafo);
}

function eliminarParrafo(){
    const parrafo = document.getElementById("miParrafo");
    if(parrafo){
        parrafo.remove();
    }
}