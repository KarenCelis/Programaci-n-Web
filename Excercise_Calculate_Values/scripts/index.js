//1. El usuario deberá ingresar el radio de un circulo, y se deberá mostrar su Area
function excercise1() {

    var input = document.getElementById("input1")
    var output = document.getElementById("output1")
    var inputValue = parseFloat(input.value)
    var area = Math.PI * (inputValue) ** 2

    output.innerHTML = "El área del circulo es: " + area

}
//2. El usuario deberá ingresar el lado de un cubo y se deberá mostrar su Volumen
function excercise2() {
    var input = document.getElementById("input2")
    var output = document.getElementById("output2")
    var inputValue = parseFloat(input.value)
    var volumen = inputValue * inputValue * inputValue

    output.innerHTML = "El volumen del cubo es: " + volumen

}
//3. El usuario deberá ingresar un volumen en Galones y se deberá mostrar en Litros
function excercise3() {
    var input = document.getElementById("input3")
    var output = document.getElementById("output3")
    var inputValue = parseFloat(input.value)
    var volumenG = inputValue * 3.7854118

    output.innerHTML = "El volumen en litros es: " + volumenG

}
//4. El usuario deberá ingresar una temperatura en grados centigrados (°C) y se deberá mostrar en Fahrenheit (°F)
function excercise4() {

    var input = document.getElementById("input4")
    var output = document.getElementById("output4")
    var inputValue = parseFloat(input.value)
    var farenheitG = (inputValue * 9 / 5) + 32

    output.innerHTML = "La temperatura en grados Fahrenheit es: " + farenheitG
}
//5. El usuario deberá ingresar dos lados de un triangulo y se deberá mostrar la hipotenusa
function excercise5() {
    var input = document.getElementById("input5")
    var input1 = document.getElementById("input51")
    var output = document.getElementById("output5")

    var c1 = parseFloat(input.value)
    var c2 = parseFloat(input1.value)

    var hipotenusa = (((c1) ** 2) + ((c2) ** 2)) ** (1 / 2)

    output.innerHTML = "La hipotenusa es:  " + hipotenusa

}
//6. El usuario deberá adivinar si una moneda lanzada cae Cruz o Cara (1 o 0), este valor será determinado con numeros aleatorios. y se dirá si acertó o no.
function excercise6() {
    var input = document.getElementById("input6")
    var output = document.getElementById("output6")

    var num1 = parseInt(input.value)
    var aleatorio = Math.round(1 * Math.random())

    if (num1 == aleatorio) {
        output.innerHTML = "Usted adivino!! :)"
    } else {
        output.innerHTML = "Lo siento no adivino :("
    }


}
//7. El usuario deberá apostar el valor de un dado, y por medio de numeros aleatorios se deberá decir si ganó o no
function excercise7() {
    var input = document.getElementById("input7")
    var output = document.getElementById("output7")
    var num1 = parseInt(input.value)
    var aleatorio = (Math.round((5 * Math.random()))) + 1

    console.log(aleatorio)
    if (num1 == aleatorio) {
        output.innerHTML = "Usted gano!!! :)"
    } else {
        output.innerHTML = "Lo siento no gano :("
    }


}
//8. El usuario deberá ingresar tres lados de un triangulo y se deberá demostrar que corresponden a un triangulo (ejemplo, un triangulo de lados 1, 1 y 10 no existe)
function excercise8() {
    var input = document.getElementById("input8")
    var input1 = document.getElementById("input81")
    var input2 = document.getElementById("input82")
    var output = document.getElementById("output8")
    var lado1 = parseInt(input.value)
    var lado2 = parseInt(input1.value)
    var lado3 = parseInt(input2.value)


    if (lado1 > lado2 + lado3 || lado2 > lado1 + lado3 || lado3 > lado1 + lado2) {
        output.innerHTML = "Lo siento no es un triangulo :("
    } else {
        output.innerHTML = "Que gran triangulo!! :0"
    }



}
//9. El usuario deberá ingresar 8 numeros y se deberá mostrar cuál es el mayor, el menor y el promedio (si desea, muestre la mediana, la moda y la desviación estandar)
function excercise9() {
    var input = document.getElementById("input9")
    var input1 = document.getElementById("input91")
    var input2 = document.getElementById("input92")
    var input3 = document.getElementById("input93")
    var input4 = document.getElementById("input94")
    var input5 = document.getElementById("input95")
    var input6 = document.getElementById("input96")
    var input7 = document.getElementById("input97")
    var output = document.getElementById("output9")
    var output = document.getElementById("output91")
    var output = document.getElementById("output92")
    var num1 = parseInt(input.value)
    var num2 = parseInt(input1.value)
    var num3 = parseInt(input2.value)
    var num4 = parseInt(input3.value)
    var num5 = parseInt(input4.value)
    var num6 = parseInt(input5.value)
    var num7 = parseInt(input6.value)
    var num8 = parseInt(input7.value)


    var numeros = [num1, num2, num3, num4, num5, num6, num7, num8]
    var mayor = numeros[0]
    var menor = numeros[0]

    for (let index = 1; index < numeros.length; index++) {
        if (numeros[index] > mayor) {
            mayor = numeros[index]
        }

    }
    for (let index = 1; index < numeros.length; index++) {
        if (numeros[index] < menor) {
            menor = numeros[index]
        }

    }
    var promedio = (num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8) / 8

    output9.innerHTML = "El mayor es: " + mayor.toString()
    output91.innerHTML = "El menor es: " + menor.toString()
    output92.innerHTML = "El promedio es: " + promedio.toString()
}
//10. El usuario deberá ingresar una coordenada x, y (osea, dos inputs) y se deberá mostrar la distancia hasta el origen y el ángulo con el horizonte (coordenadas polares)
function excercise10() {
    var input = document.getElementById("input10")
    var input1 = document.getElementById("input101")

    var output = document.getElementById("output10")
    var output1 = document.getElementById("output101")
    var coorx = parseFloat(input.value)
    var coory = parseFloat(input1.value)

    var distancia = (((coorx ** 2) + (coory ** 2)) ** (1 / 2))

    output.innerHTML = "La distancia del punto al origen es: " + distancia.toString()

    var angulo = (Math.round(359 * Math.atan(coory / coorx)))


    output1.innerHTML = "El angulo con el horizonte es: " + angulo.toString()
}