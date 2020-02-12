var result1 = document.getElementById("result")
var content = ""
var ans = ""

function writeC(message) {
    content += message
    result1.innerHTML = content
}

function deleteEverything() {
    content = ""
    result1.innerHTML = content
}

function deleteOne() {

    if (content != "") {
        var last = content.charAt(content.length - 1)
        if (last == " ") {
            content = content.substr(0, content.length - 3)
        } else {
            content = content.substr(0, content.length - 1)
        }
        result1.innerHTML = content

    }
}

function calculate() {
    var contentA = content.split(" ")

    if (contentA.length > 1) {

        var num1 = convertNUmber(contentA[0])
        var operac = contentA[1]
        var num2 = convertNUmber(contentA[2])
        if (isNaN(num1) || isNaN(num2) || num1 == "" || num2 == "") {

            content = ""
            result1.innerHTML = "ERROR"
        } else {
            var resultado = calculater(num1, num2, operac)
            var aux = resultado.toFixed(5)

            content = parseFloat(aux)
            result1.innerHTML = content.toString()
        }

    }

}



function convertNUmber(text) {
    var num = parseFloat(text)
    if (isNaN(num)) {
        return text

    } else {
        return num

    }
}

function writeOperation(message) {

    calculate()
    writeC(message)

}

function equal() {
    calculate()
    ans = content
    content = ""
    if (ans != "") {
        writeC(ans)
    }



}


function calculater(num1, num2, opera) {

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

        case '%':
            return num1 % num2
            break;
        default:
            return "NOT"
    }

}