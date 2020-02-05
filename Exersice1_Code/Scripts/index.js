//sobreescribe el documento, si existe algo lo elimina y escribe lo que se le pide
//sobreescribe lo que ya existe
//document.write("ANTU CHIMUELO")

function main() {
    //  alert("hello");
    //  console.log("Hi little panther")
    //No usarlo en funciones 
    // document.write("AMARU")
    //.innerhtml cambiar el contenido del elemento y el contenido puede ser texto o html
    var conteiner = document.getElementById("container")
    conteiner.innerHTML = "<h1>Black Cats</h1>"
        //en vez de sobreescribir se puede concatenar
    conteiner.innerHTML += "<h2>ANTU</h2>"

    conteiner.innerHTML += "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
    var cities = ["New York", "Sao Pablo", "Madrid", "Grece"]
    conteiner.innerHTML += "<ul>";
    for (let index = 0; index < cities.length; index++) {
        conteiner.innerHTML += "<li>" + cities[index] + "</li>";


    }
    conteiner.innerHTML += "</ul>"

    var table = "<table>"
    var days = ["Hours", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saurday", "Sunday"];
    //Arreglo bidimensional o matrices
    var content = [
        ["7:00-9:00", "Breakfast", "Breakfast", "Breakfast", "Breakfast", "Breakfast", "Breakfast", "Breakfast"],
        ["9:00-11:00", "Flower", "", "", "", "", "", ""],
        ["11:00-13:00", "", "c", "", "Hello", "", "", ""],
        ["13:00-14:00", "Lunch", "Lunch", "Lunch", "Lunch", "Lunch", "Lunch", "Lunch"],
        ["14:00-16:00", "", "", "d", "", "", "", ""],
        ["16:00-18:00", "", "", "", "e", "", "", "Good Night"],
        ["18:00-20:00", "Dinner", "Dinner", "Dinner", "Dinner", "Dinner", "Dinner", "Dinner"],

    ]
    for (let index = 0; index < days.length; index++) {
        table += "<th>" + days[index] + " " + "</th>"

    }
    for (let i = 0; i < content.length; i++) {
        table += "<tr>"
        for (let j = 0; j < content[i].length; j++) {
            table += "<td>" + content[i][j] + "</td>"

        }
        table += "</tr>"
    }
    table += "</table>"
    conteiner.innerHTML += table;
}