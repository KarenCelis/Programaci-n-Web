//EJERCICIOS JAVASCRIPT
//Karen Celis
/**
 * 
 * @param {*} word : Esta variable es una palabra que va a ser evaluada si es o no palindrome
 */
console.log("--------------1. Palindrome-------------------")

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

console.log("--------------2. Contar Palabras de una frase-------------------")
    /**
     * 
     * @param {*} phrase : Es una frase a la que se e cuentan la cantidad de palabras que contiene
     */
function count_words(phrase) {
    var arr = phrase.split(" ")
    var tam = arr.length

    console.log("la cantidad de palabras son: " + tam)

}
count_words("hola soy yo buneas")


console.log("--------------3. Contar cuantas vocales y consonantes tiene frase-------------------")
    /**
     * 
     * @param {*} phrase Es una frase a la que se le cuentan la cantidad de vocales y consonantes que tiene
     */
function vocalesYConsonantes(phrase) {
    var consonantes = phrase.replace(/[aeiou]/g, '')
        //console.log(consonantes)
    var cant = consonantes.length
    console.log("La cantidad de cosonantes es " + cant)
    console.log("la cantidad de vocales es " + (phrase.length - cant))
}
vocalesYConsonantes("hola")

console.log("--------------4. Contar cuantas letras diferentes tiene una frase y cuanto aparece-------------------")
    /**
     * 
     * @param {*} phrase 
     */



function letras_frase(phrase) {
    var word = phrase.replace(/ /g, "")
    var cuantas;
    for (let i = 0; i < word.length; i++) {
        cuantas = 0;
        cuantas++;
        for (let j = i + 1; j < word.length; j++) {
            if (word.charAt(i) == word.charAt(j) && word.charAt(j) != "") {
                cuantas++;
            }
        }

        console.log("La cantidad de letras " + word.charAt(i) + "es " + cuantas)
        word = word.replace(word.charAt(i), "")
    }

}
letras_frase("hello how are you")
console.log("--------------5. Contar cuantas palabras de una frase tienen las 5 vocales-------------------")

function vocales_palabra_frase(phrase) {
    var arr = phrase.split(" ")
    var a = 0,
        e = 0,
        i = 0,
        o = 0,
        u = 0;

    for (let i = 0; i < arr.length; i++) {
        var palabra = arr[i];
        if (a != 0 && e != 0 && i != 0 && o != 0 && u != 0) {

            console.log("La palabra " + palabra + " tiene todas las vocales")
        }
        a, e, i, o, u = 0;
        for (let j = 0; i < palabra.length; j++) {

            if (palabra[j] == 'a') {
                a++;
            }
            if (palabra[j] == 'e') {
                e++;
            }
            if (palabra[j] == 'i') {
                i++;
            }
            if (palabra[j] == 'o') {
                o++;
            }
            if (palabra[j] == 'u') {
                u++;
            }
        }

    }

}
//vocales_palabra_frase("hola como estas murcielago")

console.log("--------------6. contar cuantos y cuales Hiatos y Diptongos tiene una Frase-------------------")

function hiatos_diptongos(phrase) {


}

console.log("--------------7.  Invertir todas las palabras de una frase sin alterar el orden-------------------")

function invertir_palabras_frase(phrase) {
    var arr = phrase.split(" ")
    var arr1 = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        var palabra = arr[i];

        for (let j = palabra.length; j >= 0; j--) {

            console.log(palabra.charAt(j))

        }
        console.log(palabra)
    }

}
invertir_palabras_frase("hola como estas murcielago")
console.log("--------------8. Cambiar la aparición de un numero por el mismo en palabras-------------------")

function numero_palabras() {


}

console.log("--------------9. Determinar si en una expresión existe balanceo de parentesis-------------------")

function balanceo_parentesis(expresion) {


}
console.log("--------------10.  Hacer una función que haga un cifrado cesar-------------------")

function cifradoCesar(phrase) {



}