  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
  import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAH2Qr8xDdg-E6e4X1IYY1aR7Toz8VvBa4",
    authDomain: "quiz-app-daab1.firebaseapp.com",
    projectId: "quiz-app-daab1",
    storageBucket: "quiz-app-daab1.appspot.com",
    messagingSenderId: "14317726387",
    appId: "1:14317726387:web:fe0366ec8bea2e4fb39ec6",
    measurementId: "G-GE287700ET"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase();

 
  function getDataFromDatabase(){
    const reference = ref(db, 'question/')  
    onChildAdded(reference, async function(data){
      console.log(data.val())
     await  questions.push(data.val())
      showQuestion()
    })
  }
  getDataFromDatabase()



var questions = [

  ];
  
  var question = document.getElementById("question");
  var questionNum = document.getElementById("questionNum");
  var ansParent = document.getElementById("ansParent");
  var indexNum = 0;
  var marks = 0;



  function showQuestion() {
    console.log(questions)
    if (questions.length > 0){
      question.innerHTML = questions[indexNum].question;
      questionNum.innerHTML =
        "Question # " + (indexNum + 1) + "/" + questions.length;
      ansParent.innerHTML = "";
      for (var i = 0; i < questions[indexNum].options.length; i++) {
        ansParent.innerHTML += `<div class="col-md-6 py-2">
        <button onclick="checkAns ('${questions[indexNum].options[i]}','${questions[indexNum].correctAnswer}')" class="btn btn-primary px-5 rounded-pill w-50">
        ${questions[indexNum].options[i]}
        </button>
    </div>`;
      }
    }
  }
  showQuestion();

  window.nextQuestion = function() {
    indexNum++;
    showQuestion();
  }
  
  window.checkAns = function(a, b) {
    if (a == b) {
      marks++;
      console.log(marks);
    }
    if (indexNum + 1 == questions.length) {
      alert("Your Result: " + marks);
    } else {
      nextQuestion();
    }
  }





  

  
