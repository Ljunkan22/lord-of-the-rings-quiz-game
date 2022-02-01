

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "start") {
                console.log("Game has started!")
                displayName()
                runGame()
            } else {
                alert("You need to enter you name and press START to play!");
            }
        });
    }
    
    })

function displayName(){
    let userName = document.getElementById("name").value;
    document.getElementById("fname").textContent = userName + " have";
}

function  runGame(){
    
}