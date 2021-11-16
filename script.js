var timeCountdown
let timer = 0
let gameLevel = 1
var timeChecker

function startButton() {
    const timerDisplay = document.getElementById('timer')
    document.getElementById("title-screen").style.display = "none"
    document.getElementById("game-board").style.display = "flex"
    timeCountdown = setInterval( () => {
        timer++
        timerDisplay.innerHTML = "timer: "+timer
      }
      , 1000)

    timeChecker = setInterval( () => {
        if (timer >= 600){
            alert("TIMES UP! Looks like you were unable to finish the game on time.")
        }
      }
      , 1000)
}

addEventListener('keypress', function (e){
    if (e.key === 'Enter') {
        checkAnswer()
    }
})

function checkAnswer() {
    var inputBoxValue = document.getElementById("inputbox").value
    switch (gameLevel) {
        case 1:
            if (inputBoxValue == "mutien marie hall"){
                gameLevel++
                document.getElementById("question").innerHTML = "ruedr lahl"
                document.getElementById("inputbox").value = ""
            } else {
                alert("OOPS! Your answer is incorrect.")
            }
            break;
        case 2:
            if (inputBoxValue == "duerr hall"){
                document.getElementById("question").innerHTML = "lebssed olmsono alha"
                document.getElementById("inputbox").value = ""
                gameLevel++
            } else {
                alert("OOPS! Your answer is incorrect.")
            }
            break;
        case 3:
            if (inputBoxValue == "blessed solomon hall"){
                document.getElementById("question").innerHTML = "ts inbelde llha"
                document.getElementById("inputbox").value = ""
                gameLevel++
            } else {
                alert("OOPS! Your answer is incorrect.")
            }
            break;
        case 4:
            if (inputBoxValue == "st benilde hall"){
                document.getElementById("question").innerHTML = "fatt umcpas"
                document.getElementById("inputbox").value = ""
                gameLevel++
            } else {
                alert("OOPS! Your answer is incorrect.")
            }
            break;
        case 5:
            if (inputBoxValue == "taft campus"){
                document.getElementById("question").innerHTML = "logane gnik nenioaltirnta trecen puscam"
                document.getElementById("inputbox").value = ""
                gameLevel++
            } else {
                alert("OOPS! Your answer is incorrect.")
            }
            break;
        case 6:
            if (inputBoxValue == "angelo king international center campus"){
                document.getElementById("question").innerHTML = "holosc fo sniged nad tras supcam"
                document.getElementById("inputbox").value = ""
                gameLevel++
            } else {
                alert("OOPS! Your answer is incorrect.")
            }
            break;
        case 7:
            if (inputBoxValue == "school of design and arts campus"){
                document.getElementById("question").innerHTML = "het mtiura ta liedben"
                document.getElementById("inputbox").value = ""
                gameLevel++
            } else {
                alert("OOPS! Your answer is incorrect.")
            }
            break;
        case 8:
            if (inputBoxValue == "the atrium at benilde"){
                document.getElementById("question").innerHTML = "dnileneb bhu fo oiatnvnoni rfo ilncunsio"
                document.getElementById("inputbox").value = ""
                gameLevel++
            } else {
                alert("OOPS! Your answer is incorrect.")
            }
            break;
        case 9:
            if (inputBoxValue == "benilde hub of innovation for inclusion"){
                clearInterval(timeCountdown)
                alert("CONGRATULATIONS! You finished the game in " + timer + " seconds.")
                clearInterval(timeCountdown)
            } else {
                alert("OOPS! Your answer is incorrect.")
            }
            break;
        default:
            break;
    }

}

