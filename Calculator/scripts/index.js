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