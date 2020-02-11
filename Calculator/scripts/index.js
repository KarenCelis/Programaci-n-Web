var result1 = document.getElementById("result")
var content = ""

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
    var acum = 0;
    var num1 = 0;
    var operac = '';
    var num2 = 0;

    if (contentA.length > 1) {
        var num1 = convertNUmber(contentA[0])
        var operac = contentA[1]
        var num2 = convertNUmber(contentA[2])
        var acum = calculater(num1, num2, operac)
        for (let i = 3; i < contentA.length - 3; i++) {
            console.log(contentA[i] + "   cotenidpp")
            num1 = acum
            console.log(num1 + "aaaa")
            operac = contentA[i + 1]
            console.log(operac + "eee")
            num2 = convertNUmber(contentA[i + 2])
            console.log(num2 + "iii")
            acum += calculater(num1, num2, operac)
            console.log(acum + "oo")
        }


    }
    content = acum.toString()
    result1.innerHTML = content
        /*
            if (contentA.length > 1) {

                var num1 = convertNUmber(contentA[0])
                var operac = contentA[1]
                var num2 = convertNUmber(contentA[2])
                var resultado = calculater(num1, num2, operac)


                content = resultado.toFixed(5)
                result1.innerHTML = content
            }*/

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
        default:
            return "NOT"
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