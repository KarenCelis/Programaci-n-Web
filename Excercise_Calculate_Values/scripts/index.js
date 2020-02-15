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

    var volumenG = inputValue * 3.7854118

    output.innerHTML = "El volumen en litros es " + volumenG

}
//4. El usuario deberá ingresar una temperatura en grados centigrados (°C) y se deberá mostrar en Fahrenheit (°F)
function excercise4() {

    var input = document.getElementById("input4")

    var output = document.getElementById("output4")

    var inputValue = parseFloat(input.value)

    var farenheitG = (inputValue * 9 / 5) + 32

    output.innerHTML = "La temperatura en grados Fahrenheit es " + farenheitG
}
//5. El usuario deberá ingresar dos lados de un triangulo y se deberá mostrar la hipotenusa
function excercise5() {
    var input = document.getElementById("input5")
    var input1 = document.getElementById("input51")

    var output = document.getElementById("output5")

    var c1 = parseFloat(input.value)
    var c2 = parseFloat(input1.value)

    var hipotenusa = (((c1) ** 2) + ((c2) ** 2)) ** (1 / 2)

    output.innerHTML = "La hipotenusa es  " + hipotenusa

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