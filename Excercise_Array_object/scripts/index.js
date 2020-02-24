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
/*
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



//---------------------------------------------------------------
console.log(persona.FechaNacimiento.getMonth())
for (let index = 0; index < peliculasCine.length; index++) {
    console.log(peliculasCine[index].Nombre)

}

var vieja = peliculasCine[0].FechaEstreno.getFullYear()
var nueva = peliculasCine[0].FechaEstreno.getFullYear()
var inicev = 0
var indicen = 0

for (let index = 1; index < peliculasCine.length; index++) {
    if (peliculasCine[index].FechaEstreno.getFullYear() < vieja) {
        vieja = peliculasCine[index].FechaEstreno.getFullYear()
        inicev = index

    }

}
console.log(peliculasCine[inicev].Nombre + " Estrenada en el año " + vieja.toString() + " es el año de la pelicula más vieja")

for (let index = 1; index < peliculasCine.length; index++) {
    if (peliculasCine[index].FechaEstreno.getFullYear() > nueva) {
        nueva = peliculasCine[index].FechaEstreno.getFullYear()

        inicen = index
    }

}

console.log(peliculasCine[inicen].Nombre + " Estrenada en el año " + nueva.toString() + " es la pelicula más nueva")

*/

//----------------------------------------------------------------

var root = document.getElementById("root")
    /*
    root.style.height = "100px"
    root.style.backgroundColor = "blue"
    root.style.border = "5px solid yellow"
    root.style.borderRadius = "20px"
        //root.style se cambian todos los elemntos de estilo del div o el contenido

    //un elemneto puede tener mas d e una clase

    console.log(root.classList)*/
function darkMode() {
    if (root.className.indexOf("dark") == -1) {
        root.classList.add("dark")
    } else {
        root.classList.remove("dark")
    }

    console.log(root.classList)
    console.log(root.className)
}
//crear elementos en la pag
var salto = document.createElement("br")
var salto1 = document.createElement("br")
root.appendChild(salto)

var hipervinculo = document.createElement("a")
hipervinculo.href = "https://www.facebook.com/"
hipervinculo.innerText = "Go to FACE"
root.appendChild(hipervinculo)

root.appendChild(salto1)

var img1 = document.createElement("img")
img1.src = "img/img1.jpg"
img1.alt = "TOkio"
img1.style.width = "180px"
root.appendChild(img1)
root.appendChild(salto)

var img2 = document.createElement("img")
img2.src = "https://www.bthetravelbrand.com/dondear/wp-content/uploads/2016/04/Japon_General_Sean-Pavone.jpg"
img2.alt = "JApón"
img2.style.width = "150px"
root.appendChild(img2)