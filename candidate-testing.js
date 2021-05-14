const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions /

// TODO 1.1a: Define candidateName // 

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
// let candidateAnswer1 =(); 
let question2 = ("True or false: 5 kilometer == 5000 meters? ");
let correctAnswer2 = "true";
// let candidateAnswer2 = ();
let question3 = "(5 + 3)/2 * 10 = ? "
let correctAnswer3 = '40';
  
// let candidateAnswer3 
let question4 = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ";
let correctAnswer4 = "Trajectory";
// let candidateAnswer4 
let question5 = "What is the minimum crew size for the ISS? ";
let correctAnswer5 = '3';
// let candidateAnswer5 = 
const questions = [question, question2, question3, question4, question5];
let = candidateAnswer= "";
let candidateAnswers = [];
// console.log(questionArray);
const correctAnswers = [correctAnswer, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5];
// console.log(answerArray);
let candidateName = "";
// let quizGrade = 0;
 let grade = 0;

// console.log(answers);

function askForName() { 
  
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question("Please write your name here:...\n")
  console.log("Candidate Name: " + candidateName);
}

function askQuestion() {

  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++) {
  // let answers = console.log(questionArray[i]);input.question(questions[i])
  candidateAnswer = input.question(questions[i])
  candidateAnswers.push(candidateAnswer)
  console.log('Your Answer: ' + candidateAnswer);
    
}
}

function gradeQuiz(candidateAnswers) {
    for (let i = 0; i < candidateAnswers.length; i++) {
    // if (candidateAnswer[i] === candidateAnswer[i])
if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()) {
        console.log('Correct!');
        grade += 1;
  }else{
    // console.log(correctAnswers[i])
    console.log("Incorrect!")  
  }
}
  const total = (grade/questions.length) * 100;
  
  console.log("Your score is\n" + total + "%"); 
  if (total >= 80) {
    console.log('congratulations you have passed!')
  }else{
    console.log('You did not pass. Please try again');
  }


  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  return total;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers)
    // console.log()
  //   if (gradeQuiz >= 80) {
  //   console.log('congratulations you have passed!')
  // }else{
  //   console.log('You did not pass. Please try again');
  // }
}

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