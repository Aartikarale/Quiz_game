const quizData = [  
      {
        question: "1.What does HTML stand for?",
          a: "Hypertext Markup Language",
          b: "Hypertext Markdown Language",
          c: "Hyperloop Machine Language",
          d: "Hypertext Machine Language",
          correct: "a",
      },
      {
        question:"2.The correct sequence of HTML tags for starting a webpage is -",
         a: "Head, Title, HTML, body",
         b: "HTML, Body, Title, Head",
         c: "HTML, Body, Head, Title",
         d: "HTML, Head, Title, Body",
         correct: "d",
    },
    {
        question:"3.Which of the following element is responsible for making the text bold in HTML?",
         a: "<pre>",
         b: "<a>",
         c: "<b>",
         d: "<br>",
         correct: "c",
    },
    {
        question:"4.Which of the following is the container for <tr>, <th>, and <td> ?",
        a: "<data>",
        b: "<table>",
        c: "<group>",
        d: "All of the above",
        correct: "b",
    },
    {
        question: "5.What year was JavaScript launched?",
          a: "1996",
          b: "1995",
          c: "1994",
          d: "none of the above",
          correct: "b",
    },
    {
        question:"6.Front end in full stack is called as-",
         a: "Client side",
         b: "Server Side",
         c: "Both",
         d: "None",
         correct: "a",
    },
    {
        question: "7.<input> is -",

         a: "a format tag.",
         b: "an empty tag.",
         c: "All of the above",
         d:"None of the above",
         correct: "b",
      },
      {
        question: "8.HTML tags are enclosed in-",
          a: "# and #",
          b: "{ and }",
          c: "! and ?",
          d: "< and >",
          correct: "d",
      },
      {
        question: "9.Which of the following attribute is used to provide a unique name to an element?",
          a: "class",
          b: "id",
          c: "type",
          d: "none",
          correct: "b",
      },
      {
        question: "10.Which of the following HTML tag is used to display the text with scrolling effect?",
          a: "<marquee>",
          b: "<scroll>",
          c: "<div>",
          d: "none of the above",
          correct: "a",
      }
  ];
  
  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const submitBtn = document.getElementById("submit");
  
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  
  let score = 0;
  let currentQuestion = 0;
  let percent=0;
  
  function loadQuestion(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question ; 
  
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  
  function deselectAnswers(){
    answerEls.forEach(answerEl=> answerEl.checked=false);
  }
  
  function getSelected(){
    let answer;
    answerEls.forEach(answerEl => {
      if(answerEl.checked){
        answer = answerEl.id ;
      }
    })
    console.log(answer);
    return answer;
  }
  
  loadQuestion();
  
  submitBtn.addEventListener("click", ()=>{
    const answer = getSelected();
    if(answer){
      if(answer===quizData[currentQuestion].correct){
        score++;
      }

      percent=(score/quizData.length)*100;
      currentQuestion++
      if(currentQuestion<quizData.length){
        loadQuestion();
      }
      else{
        quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly
        Percentage= ${percent}%
  </h2>
  <button onclick="location.reload()">Reload</button>
      `;
      }
      
    }
  });