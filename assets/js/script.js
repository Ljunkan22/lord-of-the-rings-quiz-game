//qestions that will be asked

let questions = [{
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
        a: [{ text: "1", isCorrect: false }, 
            { text: "2", isCorrect: false },
            { text: "3", isCorrect: false },
            { text: "4", isCorrect: true }
        ]
  
    },
    {
        id: 2,
        q: "3+3=?",
        a: [{ text: "4", isCorrect: false },
            { text: "5", isCorrect: false },
            { text: "6", isCorrect: true },
            { text: "7", isCorrect: false }
        ]
    
    },
    {
        id: 3,
        q: "4+4=?",
        a: [{ text: "7", isCorrect: false },
            { text: "8", isCorrect: true },
            { text: "9", isCorrect: false },
            { text: "10", isCorrect: false }
        ]

    },
    {
        id: 4,
        q: "5+5=?",
        a: [{ text: "8", isCorrect: false },
            { text: "9", isCorrect: false },
            { text: "10", isCorrect: true },
            { text: "11", isCorrect: false }
        ]
        
    },
    {
        id: 4,
        q: "6+6=?",
        a: [{ text: "9", isCorrect: false },
            { text: "10", isCorrect: false },
            { text: "11", isCorrect: false },
            { text: "12", isCorrect: true }
        ]
        
    },
]

let id = 0;
let userAnswer = "";
// Wait for the DOM to finish loading before running the getName function

document.addEventListener("DOMContentLoaded", getName())

/**
 * Event listener for the START button runs displayName function when triggered
 */
function getName(){
    let start = document.getElementById("start-game");
    start.addEventListener("click", function(){
        displayName();
        displayGame(id);
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
 */
function displayGame(id, userAnswer){
    
    //gets the question
    let quest = document.getElementById("question");
    quest.innerText = questions[id].q;
    

    let option1 = document.getElementById("a");
    let option2 = document.getElementById("b");
    let option3 = document.getElementById("c");
    let option4 = document.getElementById("d");

    option1.innerText = questions[id].a[0].text;
    option2.innerText = questions[id].a[1].text;
    option3.innerText = questions[id].a[2].text;
    option4.innerText = questions[id].a[3].text;

    option1.value = questions[id].a[0].isCorrect;
    option2.value = questions[id].a[1].isCorrect;
    option3.value = questions[id].a[2].isCorrect;
    option4.value = questions[id].a[3].isCorrect;

    option1.addEventListener("click", () => {
        userAnswer = option1.value;
        checkAnswer(userAnswer,id);
    })

    option2.addEventListener("click", () => {
        userAnswer = option2.value;
        checkAnswer(userAnswer,id);
    })

    option3.addEventListener("click", () => {
        userAnswer = option3.value;
        checkAnswer(userAnswer,id);
    })

    option4.addEventListener("click", () => {
        userAnswer = option4.value;
        checkAnswer(userAnswer,id);
    })

}

/**
 * Checks if the Answer is correct of wrong
 */
function checkAnswer(userAnswer, id){
    if (userAnswer === "true"){
        console.log(userAnswer);
        alert("Correct!");
        incrementPoints();
        id++;
        userAnswer = undefined;
        delete(userAnswer);
        displayGame(id,userAnswer);
    } else {
        alert("Wrong answer!");
        id++;
        
    }
}

function incrementPoints(){

    let oldPoints = parseInt(document.getElementById("points").innerText);
    document.getElementById("points").innerText = 10 + oldPoints;

}
