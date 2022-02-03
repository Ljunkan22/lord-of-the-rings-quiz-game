//qestions that will be asked
/*jshint esversion: 6 */

let questions = [{
    id: 0,
    q: "Who wrote the Lord of the Rings books?",
    a: [{
            text: "JRR Tolkien",
            isCorrect: true,
        },
        {
            text: "RR Martin",
            isCorrect: false,
        },
        {
            text: "JK Rowling",
            isCorrect: false
        },
        {
            text: "JR Moehringer",
            isCorrect: false
        }
    ]

},
{
    id: 1,
    q: "What is the elvish word for friend?",
    a: [{
            text: "Arda",
            isCorrect: false
        },
        {
            text: "Mellon",
            isCorrect: true
        },
        {
            text: "Mithrin",
            isCorrect: false
        },
        {
            text: "Formen",
            isCorrect: false
        }
    ]

},
{
    id: 2,
    q: "What was the name of the first white wizard?",
    a: [{
            text: "Gandalf",
            isCorrect: false
        },
        {
            text: "Radagast",
            isCorrect: false
        },
        {
            text: "Melkor",
            isCorrect: false
        },
        {
            text: "Sauroman",
            isCorrect: true
        }
    ]

},
{
    id: 3,
    q: "How many rings of power are there in Middle earth?",
    a: [{
            text: "1",
            isCorrect: false
        },
        {
            text: "10",
            isCorrect: false
        },
        {
            text: "20",
            isCorrect: true
        },
        {
            text: "17",
            isCorrect: false
        }
    ]

},
{
    id: 4,
    q: "Who was the last king of Gondor? (before the events of the movies/Books)",
    a: [{
            text: "Isildur",
            isCorrect: true
        },
        {
            text: "Sauron",
            isCorrect: false
        },
        {
            text: " Aragon",
            isCorrect: false
        },
        {
            text: "Arathorn",
            isCorrect: false
        }
    ]

},
{
    id: 5,
    q: "Who is this",
    a: [{
            text: "Elanor",
            isCorrect: false
        },
        {
            text: "Arwen",
            isCorrect: false
        },
        {
            text: "Eowyn",
            isCorrect: false
        },
        {
            text: "Galadriel",
            isCorrect: true
        }
    ]

},
{
    id: 6,
    q: "What is the name of Aragon's sword?",
    a: [{
            text: "Anduril-Flame of the west",
            isCorrect: true
        },
        {
            text: "Glamdring-the foehamer",
            isCorrect: false
        },
        {
            text: "Narsil",
            isCorrect: false
        },
        {
            text: "Excalibur",
            isCorrect: false
        }
    ]

},
{
    id: 7,
    q: "Where are Sauroman's spy birds from?",
    a: [{
            text: "Shire",
            isCorrect: false
        },
        {
            text: "Angmar",
            isCorrect: false
        },
        {
            text: "Dunland",
            isCorrect: true
        },
        {
            text: "Mordor",
            isCorrect: false
        }
    ]

},
{
    id: 8,
    q: "What year did Bilbo Baggins celebrate his 111 birthday  (by Shire-reckoning)",
    a: [{
            text: "3434",
            isCorrect: false
        },
        {
            text: "2022",
            isCorrect: false
        },
        {
            text: "1572",
            isCorrect: false
        },
        {
            text: "1400",
            isCorrect: true
        }
    ]

},
{
    id: 9,
    q: "What does one not simply do?",
    a: [{
            text: "Destroy the ring of power",
            isCorrect: false
        },
        {
            text: "Walk into Mordor",
            isCorrect: true
        },
        {
            text: "Ride a dragon",
            isCorrect: false
        },
        {
            text: "Climb a mountain",
            isCorrect: false
        }
    ]

},
];

//global values
let track_id ;


// Wait for the DOM to finish loading before running the getName function
document.addEventListener("DOMContentLoaded", getName());

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
});
}

/**
* displays the submitted name
*/
function displayName() {
let userName = document.getElementById("name").value;
document.getElementById("fname").textContent = userName + " have";
}


/**
* Displays the question and answer options
*/
function displayGame(id) {

//gets the question
let quest = document.getElementById("question");
quest.innerText = questions[id].q;

if (id == 5){
    let image = document.createElement("img");
    image.setAttribute("src", "assets/images/elve.jpg");
    image.setAttribute("id", "elf");
    image.setAttribute("height", "200px");
    image.setAttribute("width", "200px");
    image.setAttribute("alt", "elf");
    image.style.borderRadius = "50%";
    document.getElementById("q-area").appendChild(image);  
}
if (id == 6 ) {
    let del2 = document.getElementById("elf");
    del2.style.display = "none";
}

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
if (track_id < 10){
checkAnswer(event.target.value);
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
    if (track_id < 10){
        displayGame(track_id, userAnswer);
    } else {
        endGameDisplay();
    }
    
} else {
    alert("Wrong answer!");
    track_id++;
    if (track_id < 10){
        displayGame(track_id, userAnswer);
    } else {
        endGameDisplay();
    }
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

let popup = document.getElementsByClassName("end-of-game");
popup[0].style.display = "block";

let gamePoints = parseInt(document.getElementById("points").innerHTML);
let message = document.getElementById("end-message");
console.log(gamePoints);
if (gamePoints > 70){
    message.innerHTML = `You really know your stuff when it 
    comes to Lord of the Rings great job!`;
} else if (gamePoints > 30){
    message.innerHTML = `I think you need to read the books
     or watch the movies one more time to brush up your knowledge a bit ;)`;
} else{
    message.innerHTML = `Have you ever heard of Lord of the Rings before? 
    (If not you should consider reading the books and watch the movies they are amazing!)`;
}

}