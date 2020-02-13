var date = new Date()



function writeDa() {
    var date1 = document.getElementById("output1")
    date1.innerHTML = new Date()
}
//dia
function getDayWeek(dayw) {
    switch (dayw) {
        case 0:
            return "Sunday"
            break;
        case 1:
            return "Monday"
            break;
        case 2:
            return "Tuesday"
            break;
        case 3:
            return "Wednesday"
            break;
        case 4:
            return "Thursday"
            break;
        case 5:
            return "Friday"
            break;
        case 6:
            return "Saturday"
            break;
        default:
            break;
    }
}

function writeDay() {
    var date1 = document.getElementById("output2")

    //   var day = new Date().getDate().toString()
    var dayw = new Date().getDay()
    var week = getDayWeek(dayw)

    date1.innerHTML = "Today is " + new Date().getDate().toString() + " and is " + week
}
//mes
function getMonth1(month) {
    switch (month) {
        case 0:
            return "January"
            break;
        case 1:
            return "February"
            break;
        case 2:
            return "March"
            break;
        case 3:
            return "April"
            break;
        case 4:
            return "May"
            break;
        case 5:
            return "June"
            break;
        case 6:
            return "July"
            break;
        case 6:
            return "August"
            break;
        case 6:
            return "September"
            break;
        case 6:
            return "October"
            break;
        case 6:
            return "November"
            break;
        case 6:
            return "December"
            break;
        default:
            break;
    }

}

function writeMonth() {
    var mon = document.getElementById("output3")

    var month = new Date().getMonth()
    var month1 = getMonth1(month)


    mon.innerHTML = "We are in the month of " + month1
}
//año
function writeYear() {
    var date1 = document.getElementById("output4")
    date1.innerHTML = "We are in the year of " + new Date().getFullYear()
}
//hora

function writeHours() {
    var date1 = document.getElementById("output5")
    var iap
    var hour = new Date().getHours()
    if (hour >= 13) {
        hour -= 12
        hour = hour.toString()
        iap = "pm"
    } else {

        hour = hour.toString()
        iap = "am"
    }
    // var minute = new Date().getMinutes().toString()
    //  var seconds = new Date().getSeconds().toString()

    date1.innerHTML = hour + " : " + new Date().getMinutes().toString() + " : " + new Date().getSeconds().toString() + " " + iap


}

function calculateOld() {
    var monstrarAnos = document.getElementById("output6")
    var inputFecha = document.getElementById("dateBirthday")
    var arr = inputFecha.value.split("-")
    console.log(inputFecha.value.split("-"))
    var ano = parseInt(arr[0], 10)
    var mes = parseInt(arr[1], 10)
    var dia = parseInt(arr[2], 10)
    var edad
    if (mes > new Date().getMonth() || dia > new Date().getDate()) {

        edad = new Date().getFullYear() - ano - 1
    } else {
        edad = new Date().getFullYear() - ano
    }

    monstrarAnos.innerHTML = edad.toString()


}