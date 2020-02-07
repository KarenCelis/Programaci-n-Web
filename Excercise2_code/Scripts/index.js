console.log("Black")
    //variable existe pero no tiene contenido
var message
console.log(message)
message = "wichcraft"
console.log(message)

message = "Saint"
console.log(message)
message = 2018
console.log(message)
    //{} <- bloque de codigo 
console.log("-------------------------------------------------")

function firstFunction() {

    console.log("Sunny day")
}
firstFunction()

function secondFunction() {
    firstFunction()
}

console.log("-------------------------------------------------")

function excercise_one() {
    var num1 = 4;
    var num2 = 9;

    var num3 = num1 + num2;
    console.log(num3)
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 * num2)
    console.log(num1 / num2)
    console.log(num1 % num2)
    console.log(num1 ** num2)
    console.log(num1 ** 2 + num2)
    console.log(num1 ** 2 / 2)
    console.log(2 * num1 / (num2 + 1))
    console.log(2 / num1 * 4)
    console.log(2 / (num1 * 4))
    console.log("--------------------Ejercicios---------------------")
    console.log(2 * (num1 ** 2) + 1 / (5 * num2))
    console.log((num1 / num2) - (num2 / (num1 + 1)))
    console.log((5 * num1 + 3 * num2) / (num1 * num2))
    console.log((num1 ** 2 + num2 ** 2) ** (1 / 2))



}
//excercise_one()

function excercise_two() {
    var num = 15

    console.log(num)
    num++
    console.log(num)
    num--
    console.log(num)
        //num++ primero aumneta luego se llama y ahi si lo impirme
    console.log(num++)
    console.log(num)
        //para que aumnete cuando ledigo que imprima primero incremento e imprimo
    console.log(++num)
    console.log(--num)
    console.log("------------------------------------")
    num = 10
    console.log(num)
    num = num + 1
    console.log(num)
    console.log("aumentando el doble")
    num *= 2
    console.log(num)

    num /= 2
    console.log(num)

}
//excercise_two()

function excercise_three() {
    console.log("-- -- -- -- -- -- -- --Three-- -- -- -- -- -- -")
    var num1 = 25
    console.log(num1)
    num1++
    console.log(num1)
    num1 += 5
    console.log(num1)
    num1 *= 2
    console.log(num1)
    num1 /= 2
    console.log(num1)
}

//excercise_three()

function excercise_four() {

    var brigth
    console.log(brigth)
    brigth = true
    console.log(brigth)
    console.log(!brigth)

    var a = true
    var b = true
    console.log(a && b)
    console.log(a && !b)
    console.log(!a && b)
    console.log(!a && !b)

    console.log(a || b)
    console.log(a || !b)
    console.log(!a || b)
    console.log(!a || !b)
}
//excercise_four()

function excercise_five() {
    var num1 = 34
    var num2 = 4
    console.log("comparacion de valores")
    console.log(num1 == num2)
    console.log(num1 != num2)
    console.log(num1 > num2)
    console.log(num1 >= num2)
    console.log(num1 < num2)
    console.log(num1 <= num2)
    num1 = 7
    num2 = 56
    console.log("comparacion de valores")
    console.log(num1 == num2)
    console.log(num1 != num2)
    console.log(num1 > num2)
    console.log(num1 >= num2)
    console.log(num1 < num2)
    console.log(num1 <= num2)

    var num3 = 20
    console.log("------------------------------------")
    console.log(num3 >= num1 && num3 <= num2)
    console.log(num3 > num1 && num3 <= num2)
    console.log(num3 >= num1 && num3 < num2)
    console.log(num3 > num1 && num3 < num2)
}

//excercise_five()

function grades(num) {
    var num1 = 3.7


    if (num >= 0 && num <= 1) {

        console.log("Deficiente")
    } else if (num > 1 && num < 3) {
        console.log("Insuficiente")
    } else if (num >= 3 && num < 3.5) {
        console.log("Aceptable")
    } else if (num > 3.5 && num <= 4) {
        console.log("Sobresaliente")
    } else if (num > 4 && num <= 5) {
        console.log("Excelente")
    } else {
        console.log("Ingrese una calificacion entre 1 y 5")
    }

}
var num
    /*for (let index = 0; index < 5; index++) {
        num = parseFloat(prompt("Ingrse su calificacion"))
        grades(num)

    }*/

/*------FUNCIONES CON RETURN---------*/

function is_pair(numero) {
    if (numero % 2 == 0) {

        return true
    }
    return false
}

function suma(num1, num2) {
    var suma = num1 + num2
    return suma
}


function calculator(num1, num2, opera) {

    if (opera == '+') {
        return num1 + num2
    } else if (opera == '-') {
        return num1 - num2
    } else if (opera == '*') {
        return num1 * num2
    } else if (opera == '/') {
        return num1 / num2
    } else {
        return 0
    }


}
//case posible valor para opera-> variable a operar
function calculator2(num1, num2, opera) {

    switch (opera) {
        case '+':
            return num1 + num2
            break;
        case '-':
            return num1 - num2
            break;
        case '*':
            return num1 * num2
            break;
        case '/':
            return num1 / num2
            break;
        default:
            return 0
            break;
    }
}
//--------------------CADENAS DE TEXTO-----------------
//CONCATENACION
function exercises_text() {
    var message = "Hello World"
    var name = "Chimuelo"
    console.log(message + " " + name)

    var text = "78"
    var num = 20
    var boo = true

    console.log(text + num)
    console.log(text + boo)
        //true = 1 false = 0
        //number+ boolean the boolean coverts to number 
    console.log(num + boo)
        //la resta no esta definida para las cadenas , entonces cualqueir operacion con - que no sea numero se convierte a numero
    console.log(text - num)
    console.log(text - boo)
}
//al hacer sumas con un texto la otra variable se cambia a texto asi sea bool o numeros
//exercises_text()
function converter_a_number(text) {
    //Nan-> not a number
    if (isNaN(text)) {
        return 0
    } else {
        return parseFloat(text)
    }

}

function exercises_text2() {

    var message = "Hello World"
    var submessage = message.substring(0, 5)
    console.log(submessage)
    var messageUpp = message.toUpperCase()
    console.log(messageUpp)
    var messageLow = message.toLowerCase()
    console.log(messageLow)
    var messageCorto = message.slice(4)
    console.log(messageCorto)
    console.log(message.length)

    messageInv = message.substr(0, message.length - 3)
    console.log(messageInv)
    var replace = message.replace("World", "lolo")
    console.log(replace)
    var arr = message.split(" ")
    console.log(arr)
    var arr2 = message.split("l")
    console.log(arr2)

    console.log(message.charAt(6))
    console.log(message.indexOf('l'))

}
//exercises_text2()

function exercises_text3() {
    var message = "Hello World"
    for (let index = 0; index < message.length; index++) {
        console.log(message.charAt(index))

    }

}
exercises_text3()

function palindrome(word) {
    word = word.replace(/ /g, "")
    console.log(word)

    for (let index = 0; index < (word.length) / 2; index++) {
        if (word.charAt(index) != word.charAt((word.length) - 1 - index)) {
            console.log("The word is not  palindrom")
        } else {
            console.log("The word is palimdrom")
        }



    }

}
palindrome("amor a roma")