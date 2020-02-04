function saludar() {
    var saludo = prompt("Ingrese su nombre");
    alert("Hola " + saludo);
}

function operaciones_aritmeticas() {
    var num1 = parseInt(prompt("Ingrese un numero: "));
    var num2 = parseInt(prompt("Ingrese un numero"));
    alert("EL resultado de la suma es " + (num1 + num2));
    alert("EL resultado de la resta es " + (num1 - num2));
    alert("EL resultado de la multiplicacion es " + (num1 * num2));
    alert("EL resultado del modulo es " + (num1 % num2));
}

function area_cuadrado() {

    var base = parseInt(prompt("Ingrese la base del cuadrado"));
    var altura = parseInt(prompt("Ingrese la altura del cuadrado"));

    alert("El área del cuadrado es " + (base * altura));
}

function perimetro_circulo() {

    var radio = parseInt(prompt("Ingrese el radio del circulo"))
    alert("El perimetro del circulo es " + (2 * Math.PI * radio))
}


function numeroParImpar() {

    var n1 = parseInt(prompt("Ingrese un numero: "));
    if (n1 % 2 == 0) {
        alert('Es par')
    } else {
        alert('Es impar')
    }

}

function edadPersona() {

    var edad = parseInt(prompt("Ingrese su edad: "));
    if (edad <= 10 && edad > 10) {
        alert("Usted es un niñe")
    } else if (edad > 10 && edad < 18) {
        alert("Usted es un adolecente")
    } else if (edad <= 0 || edad > 150) {
        alert("Usted no existe :(")
    } else {
        alert("Usted esta grandotQ")
    }
}

function ejercicioMatematico1() {

    var n1 = parseInt(prompt("Ingrese primer numero "));
    var n2 = parseInt(prompt("Ingrese segundo numero "));
    var cuadrado1 = n1 * n1;
    var cuadrado2 = n2 * n2;
    if (cuadrado1 >= n2) {
        alert("Modulo " + (cuadrado1 % n2))
    } else {
        alert("Resta " + (cuadrado2 - n1))
    }
}

function mayorDeTresNum() {

    var v1, v2, v3
    v1 = parseInt(prompt("Ingrese primer numero "));
    v2 = parseInt(prompt("Ingrese segundo numero "));
    v3 = parseInt(prompt("Ingrese tercer numero "));

    if (v1 > v2 && v1 > v3) {
        alert("el mayor de los numeros es " + v1)
    } else if (v2 > v1 && v2 > v3) {
        alert("el mayor de los numeros es " + v2)
    } else {
        alert("el mayor de los numeros es " + v3)
    }
}

//ciclos definidos ->for,ciclos indefinidos->while
function ciclo_for() {
    var resp = ""
    for (let i = 2; i <= 20; i++) {

        if (i % 2 == 0) {

            resp = resp + " , " + i;
        }

    }
    alert(resp)

}

function reutilizacon(aumento, limite) {
    var resp = ""
    for (let i = 0; i <= limite; i += aumento) {
        resp = resp + " , " + i;
    }
    alert(resp)
}
//parametros ayudan a manejar la funcion

function cicloWhile() {

    while (confirm("Desea Continuar?")) {
        alert("THis is a cycle while")
    }
}

function cycleDoWhile() {
    do {
        alert("THis is a cycle Do While")
    } while (confirm("Desea Continuar?"));
}

//Arreglo tipo de dato almacenar n cantidad de datos 

function arreglos() {
    var numeros = new Array()
    var numeros2 = [1, 2, 4, 5, 8, 13]
    var textos = ["hello", "world", "friends"]
    alert(numeros2[1])

}