//array.sort()->muestra un arreglo de menor a mayor
//array.reverse()->muestra el arreglo de mayor a menor
//array.join()-> une todos los elementos del arregloen una sola cadena de texto, se puede colocar un separador ("-")
//array.split()-> divide la cadena de texto a un array
//array.push("qw","sdf","rrrr")-> agregar elementos al arreglo
//array.pop()->devuelve solo el ultimo elemnto del arreglo y lo saco
//array.concat()->concatena a este arreglo elementos de otro arreglo
/*
var array = []
array.sort()
array.reverse()
array.join()
array.push("New Element")
var elements = []
elements.push(array.pop())
array.concat(["Other Elemnts"])*/

var carrosCaros = ["Alfa", "Porshe", "Masserati"]
var carrosBaratos = ["Renault", "Chevrolet", "Mazda"]
var todosCarros = carrosCaros.concat(carrosBaratos)
todosCarros = todosCarros.sort()
var lista = todosCarros.join("\n")
console.log(lista)
console.log(todosCarros.length)

while (todosCarros.length > 0) {

    console.log(todosCarros.pop())
}
console.log(todosCarros)
    //(----------------------------OBJECTS------------------------------)
    //el objeto define algo
var persona = {
        'Nombre': "Amaru",
        'Apellido': "Antu",
        'Edad': "1",
        'Telefono': "234567",
        'FechaNacimiento': new Date(2018, 11, 1),
        'casado': false,
        //Agregar una funcion al objeto
        'Hablar': sohwMessage,
        'presentarse': function() {
            //this atributo propio del objeto dentro del mismo objeto
            alert("Hi my name is " + this.Nombre)
        },
        'saludar': function() {

            alert("Hi other person " + otraPersona.nombre)
        }
    }
    //JSON JS Objects Notation
var otraPersona = {

    'nombre': "Michin",
    'Apellido': "Amarillo",
    'Edad': "3",
    'Telefono': "23456745"

}

function sohwMessage() {

    alert("Hello World")
}
console.log(persona)
console.log(persona.Apellido)
console.log(persona.FechaNacimiento.getMonth())

// -------------------------------------------------------------
var starWars = {
    'Nombre': "Star Wars Episodio I",
    'FechaEstreno': new Date(1977, 1, 1),
    'DuracionMinutos': 120,
    'Genero': "Ciencia Ficcion",
    'Clasificacion': "A",
    'Nominaciones': 12,
    'Personajes': [
        "Dath Vader",
        "Luke Skywalker",
        "Leia Organa",
        "Han Solo",
        "Chewbaca"
    ]
}

var menInBlack = {
    'Nombre': "Men in BLack",
    'FechaEstreno': new Date(1997, 1, 1),
    'DuracionMinutos': 98,
    'Genero': "Accion",
    'Clasificacion': "PG-13",
    'Nominaciones': 3,
    'Personajes': [
        "Agente K",
        "Agente J",
        "Angete L",
        "Frak el perro"

    ]
}
var candelaria = {
    'Nombre': "Candelaria",
    'FechaEstreno': new Date(2017, 1, 1),
    'DuracionMinutos': 88,
    'Genero': "Cine Dramatico",
    'Clasificacion': "PG-13",
    'Nominaciones': 10,
    'Personajes': [
        "Victor Hugo",
        "Candelaria"

    ]
}
var sherk = {
    'Nombre': "Sherk",
    'FechaEstreno': new Date(2001, 1, 1),
    'DuracionMinutos': 92,
    'Genero': "Animació ",
    'Clasificacion': "PG",
    'Nominaciones': 40,
    'Personajes': [
        "Sherk",
        "Princesa Fiona",
        "Burro",
        "Lord Farquaad",
        "Jengibre"

    ]
}
var harryPotter = {
    'Nombre': "Harry Potter y la Piedra Filosofal",
    'FechaEstreno': new Date(2001, 1, 1),
    'DuracionMinutos': 152,
    'Genero': "Fantasia",
    'Clasificacion': "PG",
    'Nominaciones': 30,
    'Personajes': [
        "Harry Potter",
        "Ron Weaslye",
        "Hermione Granger",
        "Albus Dumbledore",
        "Rubeus Hagrid",
        "Severus Snape",
        "Minerva McGonagall"

    ]
}

var comoEntrenarATuDragon = {
    'Nombre': "Cómo entrenar a tu dragón",
    'FechaEstreno': new Date(2010, 1, 1),
    'DuracionMinutos': 98,
    'Genero': "Animación",
    'Clasificacion': "PG",
    'Nominaciones': 20,
    'Personajes': [
        "Stoick",
        "Hipo",
        "Gobber",
        "Astrid",
        "Chimuelo",
        "Brutilda Torton",
        "Brutacio Torton"

    ]
}

var peliculasCine = [
    starWars,
    menInBlack,
    candelaria,
    sherk,
    harryPotter,
    comoEntrenarATuDragon

]
for (let index = 0; index < peliculasCine.length; index++) {
    console.log(peliculasCine[index].Nombre)

}

var vieja = peliculasCine[0].FechaEstreno.getFullYear()
var nueva = peliculasCine[0].FechaEstreno.getFullYear()

for (let index = 1; index < peliculasCine.length; index++) {
    if (peliculasCine[index].FechaEstreno.getFullYear() < vieja) {
        vieja = peliculasCine[index].FechaEstreno.getFullYear()

    }

}
console.log(vieja.toString() + " es el año de la pelicula más vieja")

for (let index = 1; index < peliculasCine.length; index++) {
    if (peliculasCine[index].FechaEstreno.getFullYear() > nueva) {
        nueva = peliculasCine[index].FechaEstreno.getFullYear()

    }

}

console.log(nueva.toString() + " es el año de la pelicula más nueva")