function excercise1() {
    var input = document.getElementById("input1")
    var para = document.getElementById("output1")

    var inputValue = parseFloat(input.value)

    var output = Math.abs(inputValue)

    para.innerHTML = "El valor ingresado es " + output


}

function excercise2() {
    var input = document.getElementById("input2")

    var inputValue = parseFloat(input.value)
    var output = Math.sin(inputValue * Math.PI / 180)

    var para = document.getElementById("output2")
    para.innerHTML = "El seno es: " + output

    var para2 = document.getElementById("output3")
    para2.innerHTML = "El coseno es :" + Math.cos(inputValue * Math.PI / 180)

    var para3 = document.getElementById("output4")
    para3.innerHTML = "La tangente es :" +
        Math.tan(inputValue * Math.PI / 180)

    var para4 = document.getElementById("output5")
    para4.innerHTML = "La cotangente es :" + (1 / Math.tan(inputValue * Math.PI / 180))


    var para5 = document.getElementById("output6")
    para5.innerHTML = "La secante es :" + (1 / Math.cos(inputValue * Math.PI / 180))


    var para6 = document.getElementById("output7")
    para6.innerHTML = "La cosecante es :" + (1 / Math.sen(inputValue * Math.PI / 180))



}

function excercise3() {
    var input = document.getElementById("input3")
    var inputValue = parseFloat(input.value)
        //aproximar hacia hacia abajo 5
    var output = Math.round(inputValue)
    var para = document.getElementById("output8")
    para.innerHTML = "Numero redondeado hacia abajo " + output
        //aproximar hacia hacia abajo 5
    var output2 = Math.ceil(inputValue)
    var para2 = document.getElementById("output9")
    para2.innerHTML = "Numero redondeado hacia arriba " + output2
}

function excercise4() {
    var input = document.getElementById("input5")
    var base = parseFloat(input.value)

    var input2 = document.getElementById("input6")
    var potencia = parseFloat(input2.value)

    var output = Math.pow(base, potencia)

    var para = document.getElementById("output10")
    para.innerHTML = "La potencia es " + output

    var para2 = document.getElementById("output11")
    para2.innerHTML = "La raiz es " + Math.pow(base, 1 / potencia)
}

function excercise5() {
    var input = document.getElementById("input7")
    var inputVaule = parseFloat(input.value)
    var aleatorio = Math.round(inputVaule * Math.random())
    var para = document.getElementById("output12")
    para.innerHTML = "El numero aleatorio con el rango es " + aleatorio

}