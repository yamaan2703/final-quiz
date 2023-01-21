  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
  import { getDatabase, set, ref, push } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
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

  var question = document.getElementById("question")
  var option = document.getElementById("option")
  var optionsParent = document.getElementById("optionsParent")
  var correctAnswer = document.getElementById("correctAnswer")


 var options = []
 var correctAnswer

function renderOptions () {
    optionsParent.innerHTML = ''
    for (var i = 0; i < options.length; i++){
        optionsParent.innerHTML +=  `<li onclick = "setCorrectAnswer('${options[i]}')" class = 'p-2 bg-light fs-5 rounded shadow-lg my-2'>${options[i]}</li>`
    }
}
  
  window.addOption = function (){
     options.push(option.value)
     console.log(options)
     renderOptions ()
  }

  window.setCorrectAnswer = function (a) {
    console.log('correct anser work')
    // correctAnswer = a
    // correctAnswerElem.innerHTML = correctAnswer
    correctAnswer.innerHTML = a
  }

  window.submitQuestion = async function() {
  var obj = {
    question: question.value,
    options: options,
    correctAnswer: correctAnswer.innerText,
}

  obj.id = push(ref(db, 'question/')).key
   const reference = ref(db, `question/${obj.id}`)
   await set(reference, obj)
   window.location.href = '/'
   console.log(obj)
  }

