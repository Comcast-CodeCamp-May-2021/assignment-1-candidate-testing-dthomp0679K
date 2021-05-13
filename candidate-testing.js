const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = input.question("Please write your name here:...\n");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question1 = "Who was the first American woman in space ? ";
let correctAnswer1 = "Sally Ride";
// let candidateAnswer1 =(); 
let question2 = ("true or False: 5000 meters == 5 kilometers ? ");
let correctAnswer2 = "true";
// let candidateAnswer2 = ();
let question3 = "(5+3)/2*10 = ? "
let correctAnswer3 = '40';
  
// let candidateAnswer3 
let question4 = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ";
let correctAnswer4 = "trajectory";
// let candidateAnswer4 
let question5 = "What is the minimum crew size for the ISS? ";
let correctAnswer5 = '3';
// let candidateAnswer5 = 
let questionArray = [question1, question2, question3, question4, question5];
let answers = [];
// console.log(questionArray);
let answerArray = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5];
// console.log(answerArray);

let score = 0;
for (let i = 0; i < questionArray.length; i++) {
  // let answers = console.log(questionArray[i]);
  answers.push(input.question(questionArray[i]))
  if (answers[i] === answerArray[i]) {
        console.log('Correct!');
        score = score + 20;
  }else{
    console.log("Incorrect!")
  }


  }
// console.log(answers);
console.log("Your score is\n" + score) 
  if (score >= 80) {
    console.log('congratulations you have passed!')
  }else{
    console.log('You did not pass. Please try again');
  }
// function askForName() { 
  
  // TODO 1.1b: Ask for candidate's name //

// }

// function askQuestion() {

  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


// }

// function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


//   let grade = grade + 20;
  

//   return grade;
// }

// function runProgram() {
//   askForName();
  // TODO 1.1c: Ask for candidate's name //
  
//   askQuestion();
//   gradeQuiz(this.candidateAnswers);
// }

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};