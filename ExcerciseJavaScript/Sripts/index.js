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

    for (let i = 1; i < word.length; i++) {


    }

}
console.log("--------------5. Contar cuantas palabras de una frase tienen las 5 vocales-------------------")

console.log("--------------6. contar cuantos y cuales Hiatos y Diptongos tiene una Frase-------------------")

console.log("--------------7.  Invertir todas las palabras de una frase sin alterar el orden-------------------")

console.log("--------------8. Cambiar la aparición de un numero por el mismo en palabras-------------------")

console.log("--------------9. Determinar si en una expresión existe balanceo de parentesis-------------------")
console.log("--------------10.  Hacer una función que haga un cifrado cesar-------------------")