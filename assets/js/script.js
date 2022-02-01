//qestions that will be asked

let qestions = [{
    id: 0,
        q: "1+1=?",
        a: [{ text: "1", isCorrect: false },
            { text: "2", isCorrect: true },
            { text: "3", isCorrect: false },
            { text: "4", isCorrect: false }
        ]
  
    },
    {
        id: 1,
        q: "2+2=?",
        a: [{ text: "1", isCorrect: false, 
            { text: "2", isCorrect: false },
            { text: "3", isCorrect: false },
            { text: "4", isCorrect: true }
        ]
  
    },
    {
        id: 2,
        q: "3+3=?",
        a: [{ text: "6", isCorrect: false },
            { text: "5", isCorrect: false },
            { text: "6", isCorrect: true },
            { text: "7", isCorrect: false }
        ]
}]

// Wait for the DOM to finish loading before running the getName function

document.addEventListener("DOMContentLoaded", getName())

/**
 * Event listener for the START button runs displayName function when triggered
 */
function getName(){
    let start = document.getElementById("start-game");
    start.addEventListener("click", function(){
        displayName();
        displaygame("0");
    })
}

function displayName(){
   let userName = document.getElementById("name").value;
   document.getElementById("fname").textContent = userName + " have"
   //let del = document.getElementsByClassName("enter-name");
   //del[0].remove();
}


/**
 * Displays the question and answer options
 * function pickAnswer(id){
    let buttons = document.getElementsByClassName("answer-button").innerText;

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (button) {
                console.log(button)
            }
        })
    }
}
 */
function displaygame(id){

    //gets the question
    let quest = document.getElementById("question");
    quest.innerText = qestions[id].q;

    let option1 = document.getElementById("a");
    let option2 = document.getElementById("b");
    let option3 = document.getElementById("c");
    let option4 = document.getElementById("d");

    option1.innerText = qestions[id].a[0].text;
    option2.innerText = qestions[id].a[1].text;
    option3.innerText = qestions[id].a[2].text;
    option4.innerText = qestions[id].a[3].text;

    option1.innerText = qestions[id].a[0].isCorrect;
    option2.innerText = qestions[id].a[1].isCorrect;
    option3.innerText = qestions[id].a[2].isCorrect;
    option4.innerText = qestions[id].a[3].isCorrect;



    pickAnswer(id)
}


