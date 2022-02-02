//qestions that will be asked

let questions = [{
        id: 0,
        q: "1+1=?",
        a: [{
                text: "1",
                isCorrect: false
            },
            {
                text: "2",
                isCorrect: true
            },
            {
                text: "3",
                isCorrect: false
            },
            {
                text: "4",
                isCorrect: false
            }
        ]

    },
    {
        id: 1,
        q: "2+2=?",
        a: [{
                text: "1",
                isCorrect: false
            },
            {
                text: "2",
                isCorrect: false
            },
            {
                text: "3",
                isCorrect: false
            },
            {
                text: "4",
                isCorrect: true
            }
        ]

    },
    {
        id: 2,
        q: "3+3=?",
        a: [{
                text: "4",
                isCorrect: false
            },
            {
                text: "5",
                isCorrect: false
            },
            {
                text: "6",
                isCorrect: true
            },
            {
                text: "7",
                isCorrect: false
            }
        ]

    },
    {
        id: 3,
        q: "4+4=?",
        a: [{
                text: "7",
                isCorrect: false
            },
            {
                text: "8",
                isCorrect: true
            },
            {
                text: "9",
                isCorrect: false
            },
            {
                text: "10",
                isCorrect: false
            }
        ]

    },
    {
        id: 4,
        q: "5+5=?",
        a: [{
                text: "8",
                isCorrect: false
            },
            {
                text: "9",
                isCorrect: false
            },
            {
                text: "10",
                isCorrect: true
            },
            {
                text: "11",
                isCorrect: false
            }
        ]

    },
    {
        id: 5,
        q: "6+6=?",
        a: [{
                text: "9",
                isCorrect: false
            },
            {
                text: "10",
                isCorrect: false
            },
            {
                text: "11",
                isCorrect: false
            },
            {
                text: "12",
                isCorrect: true
            }
        ]

    },
]

//global values
let track_id ;
let userAnswer = "";

// Wait for the DOM to finish loading before running the getName function
document.addEventListener("DOMContentLoaded", getName())

/**
 * Event listener for the START button runs displayName function 
 * add the displayGame function when triggered
 */
function getName() {
    let start = document.getElementById("start-game");
    start.addEventListener("click", function () {
        track_id = 0;
        displayName();
        displayGame(0);
    })
}

/**
 * displays the submitted name
 */
function displayName() {
    let userName = document.getElementById("name").value;
    document.getElementById("fname").textContent = userName + " have"
}


/**
 * Displays the question and answer options
 */
function displayGame(id) {

    //gets the question
    let quest = document.getElementById("question");
    quest.innerText = questions[id].q;

//gets the elements needed from the DOM
    let option1 = document.getElementById("a");
    let option2 = document.getElementById("b");
    let option3 = document.getElementById("c");
    let option4 = document.getElementById("d");

//set the correct options in the DOM
    option1.innerText = questions[id].a[0].text;
    option2.innerText = questions[id].a[1].text;
    option3.innerText = questions[id].a[2].text;
    option4.innerText = questions[id].a[3].text;

//gets the true or false value to the options 
    option1.value = questions[id].a[0].isCorrect;
    option2.value = questions[id].a[1].isCorrect;
    option3.value = questions[id].a[2].isCorrect;
    option4.value = questions[id].a[3].isCorrect;

}

// Gets all the answer option and sends the clicked one to checkAnswer function
const buttons = document.querySelectorAll('.answer-area button');
buttons.forEach(button => button.addEventListener('click', event => {
    if (track_id < 6){
    checkAnswer(event.target.value)
    }
}));

/**
 * Checks if the Answer is correct or wrong
 * increment the value off track_id to get the new question
 */
function checkAnswer(userAnswer, id) {


    if (userAnswer === "true") {
        alert("Correct!");
        incrementPoints();
        track_id++;
        console.log(track_id);

//calls displayGame function if track id is less then 6
//Else calls the endGame Function
        if (track_id < 6){
            displayGame(track_id, userAnswer);
        } else {
            endGameDisplay();
        }
        
    } else {
        alert("Wrong answer!");
        track_id++;
        displayGame(track_id, userAnswer);
    }
    
}

/**
 * increment the point if answer was correct
 */
function incrementPoints() {

    let oldPoints = parseInt(document.getElementById("points").innerText);
    document.getElementById("points").innerText = 10 + oldPoints;

}
/**
 * 
 */
function endGameDisplay(){



}