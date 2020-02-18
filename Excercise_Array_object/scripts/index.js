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