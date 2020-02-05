//sobreescribe el documento, si existe algo lo elimina y escribe lo que se le pide
//sobreescribe lo que ya existe
//document.write("ANTU CHIMUELO")

function main() {
    //  alert("hello");
    //  console.log("Hi little panther")
    //No usarlo en funciones 
    // document.write("AMARU")
    //.innerhtml cambiar el contenido del elemento y el contenido puede ser texto o html
    document.getElementById("container").innerHTML = "<h1>Black Cats</h1>"
        //en vez de sobreescribir se puede concatenar
    document.getElementById("container").innerHTML += "<h2>ANTU</h2>"

    document.getElementById("container").innerHTML += "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
}