const firebaseConfig = {
    apiKey: "AIzaSyA5r_tSfpOZroWC5zF3itKRoyUX2GEigIA",
    authDomain: "myjavascriptquizapp.firebaseapp.com",
    databaseURL: "https://myjavascriptquizapp-default-rtdb.firebaseio.com",
    projectId: "myjavascriptquizapp",
    storageBucket: "myjavascriptquizapp.appspot.com",
    messagingSenderId: "634893617579",
    appId: "1:634893617579:web:0fe46404fbcc7548942aee"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

function addQuiz() {
    var newQues = document.getElementById('newQues').value;
    var newOptionsCollection = document.getElementsByClassName('newOption');
    var correctAns = document.getElementById('correctAns').value;
    var newOptions = []
    for(i=0;i<newOptionsCollection.length;i++){
        var option = newOptionsCollection[i].value
        newOptions.push(option)
    }

    var questionObj = {
        question: newQues,
        answer: correctAns,
        options: newOptions
    }
    
    var db = app.database().ref('questions')
    db.push(questionObj)
}

var num = 0;


var count = 0;
var score = 0;



app.database().ref('questions').on('value', function(data){
   questionArray = Object.values(data.val());
    
   var ques = document.getElementById("ques");
       ques.innerHTML = questionArray[num].question;
       
       var options = document.getElementsByClassName("optionLabel");
       
       for (var i = 0; i<options.length ; i++){
           options[i].innerHTML = questionArray[num].options[i]
       }
   




       
       function calc() {
           var radios = document.getElementsByClassName("radioBtn");
           var options = document.getElementsByClassName("optionLabel");
       
           for(var i = 0; i<radios.length; i++){
               if(radios[i].checked == true){
                   if(options[i].innerHTML == questionArray[count].answer){
                       score++
                   }
               }
           }
       
       }





       
function nextQues(){
    calc()
    var radios = document.getElementsByClassName("radioBtn");
    if(count < questionArray.length -1){
        for(var i=0; i<radios.length; i++ ){
            if(radios[i].checked == true){
                count++
                showQues(count)
                radios[i].checked = false
            }
        }
    }else{
        var ques = document.getElementById("ques");
        ques.innerHTML = "Completed"

        var optionsGroup = document.getElementById("optionsGroup");
        optionsGroup.innerHTML = `<h1>Score: ${score}</h1>`

        // alert("Quiz Completed")
    }
}



})

// console.log(questionArray)











// function showQues(e) {
//     var ques = document.getElementById("ques");
//     ques.innerHTML = questionArray[e].question;
    
//     var options = document.getElementsByClassName("optionLabel");
    
//     for (var i = 0; i<options.length ; i++){
//         options[i].innerHTML = questionArray[e].options[i]
//     }
// }

// var count = 0;
// var score = 0;

// function calc() {
//     var radios = document.getElementsByClassName("radioBtn");
//     var options = document.getElementsByClassName("optionLabel");

//     for(var i = 0; i<radios.length; i++){
//         if(radios[i].checked == true){
//             if(options[i].innerHTML == questionArray[count].answer){
//                 score++
//             }
//         }
//     }

// }

// function nextQues(){
//     calc()
//     var radios = document.getElementsByClassName("radioBtn");
//     if(count < questionArray.length -1){
//         for(var i=0; i<radios.length; i++ ){
//             if(radios[i].checked == true){
//                 count++
//                 showQues(count)
//                 radios[i].checked = false
//             }
//         }
//     }else{
//         var ques = document.getElementById("ques");
//         ques.innerHTML = "Completed"

//         var optionsGroup = document.getElementById("optionsGroup");
//         optionsGroup.innerHTML = `<h1>Score: ${score}</h1>`

//         // alert("Quiz Completed")
//     }
// }