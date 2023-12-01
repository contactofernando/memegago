// declaro la variable y le asigno el valor

imagenActual = "https://tmssl.akamaized.net/images/foto/galerie/fernando-gago-boca-juniors-1585819209-35652.jpg?lm=1585819219";

// creo una funcion para cambiar la imagen 
function cambiarImagen() {
    // declaro mis variables y tomo el valor de los id 
    var imagen = document.getElementById("imagen");
    var titulo = document.getElementById("titulo");
// creo un condicional que cambia la imagen inicial por otra
    if (imagenActual === "https://tmssl.akamaized.net/images/foto/galerie/fernando-gago-boca-juniors-1585819209-35652.jpg?lm=1585819219" ) {
        imagen.src = "https://media.diariopopular.com.ar/p/8978fb6fcbd074268537ee7a7f28e3c0/adjuntos/143/imagenes/005/696/0005696721/1200x675/smart/gagojpg.jpg";
        imagenActual = "https://media.diariopopular.com.ar/p/8978fb6fcbd074268537ee7a7f28e3c0/adjuntos/143/imagenes/005/696/0005696721/1200x675/smart/gagojpg.jpg";
        // Altero el contenido del DOM tambien.
        titulo.innerHTML = "No tan fuerte! Lo lesionaste!..."
        titulo.style.color = "red";
        titulo.style.textDecoration = "none";
    //  revierto los cambios para que el meme sea funcional y se pueda usar varias veces.   
    } else{
        imagen.src = "https://tmssl.akamaized.net/images/foto/galerie/fernando-gago-boca-juniors-1585819209-35652.jpg?lm=1585819219";
        imagenActual = "https://tmssl.akamaized.net/images/foto/galerie/fernando-gago-boca-juniors-1585819209-35652.jpg?lm=1585819219";
        titulo.innerHTML = "Presiona sobre la Imagen de Gago..."
        titulo.style.color = "black";
        titulo.style.textDecoration = "underline";
    }
}