
var currentPage = 0;
var timerEl = document.querySelector('.timer');
var secondsLeft = 30;
var pageContent = [
    {
        header: `<h1 class="quiz-header">Coding Quiz Challenge</h1>`,
        content: `<p class="quiz-description">This week, we're tasked with generating a series of questions. We'll have 30 seconds
    to answer 3 critical questions relating to coding. Good Luck!</p>
<div class="starter-box">
    <h2 class="begin">Press Start to begin our quiz!</h2>
</div>
<button id="submit-button">Start</button>`,
        buttonCallBack: function () {

                var timer = setInterval(function() {
                     secondsLeft--;
                    console.log('startTimer', secondsLeft);
                     timerEl.textContent = secondsLeft;
                     
                     if (secondsLeft === 0) {
                         clearInterval(timer)
                     }
                     
                 }, 1000)
                 
            
             
            currentPage++;
            renderPage();

        },
        correctAnswer: null
    },
    {
        header: `<h1 class="quiz-header">In the term JSON, what does the J stand for?</h1>`,
        content: `<div>
    <input type="radio" id="Jason" name="q1" value="Jason"
               <label for="Jason">Jason</label>
  </div>
  <div>
    <input type="radio" id="Jonny" name="q1" value="Jonny"
               <label for="Jonny">Jonny</label>
  </div>
  <div>
    <input type="radio" id="Javascript" name="q1" value="Javascript"
               <label for="Javascript">Javascript</label>
  </div>
  <button id="submit-button" type="button">Submit</button>`,
        correctAnswer: "Javascript",
        buttonCallBack: function () {
            // get selected radio button and its value. check value against correct answer
            var answerValue = document.querySelector("input[name='q1']:checked").value;
            

            var score= window.localStorage.getItem("score");
            
            if (answerValue === this.correctAnswer)
            {
                window.localStorage.setItem("score", parseInt(score)+1);
            }
            else
            {
                // subtract time from the timer here.
                secondsLeft -= 5;
            }

            currentPage++;
            renderPage();
        }
    },
    {
        header: `<h1 class="quiz-header">Which of these is not a coding language?</h1>`,
        content: `<div>
    <input type="radio" id="CSS" name="q2" value="CSS"
               <label for="CSS">CSS</label>
  </div>
  <div>
    <input type="radio" id="HTML" name="q2" value="HTML"
               <label for="HTML">HTML</label>
  </div>
  <div>
    <input type="radio" id="SOS" name="q1" value="SOS"
               <label for="SOS">SOS</label>
  </div>
  <button id="submit-button" type="button">Submit</button>`,
        correctAnswer: "SOS",
        buttonCallBack: function () {
            // get selected radio button and its value. check value against correct answer
            var answerValue = document.querySelector("input[name='q2']:checked").value;
            

            var score= window.localStorage.getItem("score");
            
            if (answerValue === this.correctAnswer)
            {
                window.localStorage.setItem("score", parseInt(score)+1);
            }
            else
            {
                // subtract time from the timer here.
                secondsLeft -= 5;
            }

            currentPage++;
            renderPage();
        }
    },
   // {
       // header:
     //   content:,
       // correctAnswer:,
        //buttonCallBack: function () {
            // get selected radio button and its value. check value against correct answer
            
    //         var answerValue = document.querySelector("input[name='q2']:checked").value;
            

    //         var score= window.localStorage.getItem("score");
            
    //         if (answerValue === this.correctAnswer)
    //         {
    //             window.localStorage.setItem("score", score+1);
    //         }
    //         else
    //         {
    //             // subtract time from the timer here.
    //             secondsLeft -= 5;
    //         }

    //         currentPage++;
    //         renderPage();
    //     }
    // }

];

function renderPage() {

    var heading = document.getElementById("heading");
    var content = document.getElementById("content");
    var pageData = pageContent[currentPage];

    heading.innerHTML = pageData.header;
    content.innerHTML = pageData.content;

    var submitButton = document.getElementById("submit-button");

    if (submitButton) {
        submitButton.addEventListener("click", pageData.buttonCallBack.bind(pageData));


    }
}


 
//setup timer

// Before the first render set the score to 0 in localStorage
window.localStorage.setItem("score", 0);
renderPage(); // First rendering of the page
