//1. El usuario deberá ingresar el radio de un circulo, y se deberá mostrar su Area
function excercise1() {

    var input = document.getElementById("input1")
    var output = document.getElementById("output1")

    var inputValue = parseFloat(input.value)

    var area = Math.PI * (inputValue) ** 2

    output.innerHTML = "El área del circulo es " + area

}
//2. El usuario deberá ingresar el lado de un cubo y se deberá mostrar su Volumen
function excercise2() {
    var input = document.getElementById("input2")
    var output = document.getElementById("output2")

    var inputValue = parseFloat(input.value)

    var volumen = inputValue * inputValue * inputValue

    output.innerHTML = "El volumen del cubo es " + volumen

}
//3. El usuario deberá ingresar un volumen en Galones y se deberá mostrar en Litros
function excercise3() {
    var input = document.getElementById("input3")
    var output = document.getElementById("output3")

    var inputValue = parseFloat(input.value)

    var volumenG = inputValue * inputValue * inputValue

    output.innerHTML = "El volumen en litros del cubo es " + volumenG

}
//4. El usuario deberá ingresar una temperatura en grados centigrados (°C) y se deberá mostrar en Fahrenheit (°F)
function excercise4() {


}
//5. El usuario deberá ingresar dos lados de un triangulo y se deberá mostrar la hipotenusa
function excercise5() {


}
//6. El usuario deberá adivinar si una moneda lanzada cae Cruz o Cara (1 o 0), este valor será determinado con numeros aleatorios. y se dirá si acertó o no.
function excercise6() {


}
//7. El usuario deberá apostar el valor de un dado, y por medio de numeros aleatorios se deberá decir si ganó o no
function excercise7() {


}
//8. El usuario deberá ingresar tres lados de un triangulo y se deberá demostrar que corresponden a un triangulo (ejemplo, un triangulo de lados 1, 1 y 10 no existe)
function excercise8() {


}
//9. El usuario deberá ingresar 8 numeros y se deberá mostrar cuál es el mayor, el menor y el promedio (si desea, muestre la mediana, la moda y la desviación estandar)
function excercise9() {


}
//10. El usuario deberá ingresar una coordenada x, y (osea, dos inputs) y se deberá mostrar la distancia hasta el origen y el ángulo con el horizonte (coordenadas polares)
function excercise10() {


}