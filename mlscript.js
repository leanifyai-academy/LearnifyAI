// JavaScript for quizzes from Chapter 1 to Chapter 7: Machine Learning

// Chapter 1 - Introduction to ML (Example Setup)
const ch1Answers = { q1: 'correct', q2: 'correct', q3: 'correct' };
const ch1Correct = { q1: 'correct', q2: 'correct', q3: 'correct' };
const userCh1 = {};
function submitCh1(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer.'); return; }
  userCh1['q' + qNum] = selected;
  updateUI(qNum, selected, ch1Correct, ch1Answers, 'ch1');
  if (Object.keys(userCh1).length === 3) showResult(userCh1, ch1Correct, 'Ch1Result', 'Ch1Motivation');
}

// Chapter 2 - Data Preprocessing
const ch2Answers = {
  q1: 'To improve accuracy by removing errors and inconsistencies',
  q2: 'To bring all features to a similar range for better model performance',
  q3: 'Representing categories as binary columns',
  q4: 'To evaluate how the model performs on new, unseen data',
  q5: 'Remove or replace them with a suitable value'
};
const ch2Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh2 = {};
function submitCh2(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer.'); return; }
  userCh2['q' + qNum] = selected;
  updateUI(qNum, selected, ch2Correct, ch2Answers, 'ch2');
  if (Object.keys(userCh2).length === 5) showResult(userCh2, ch2Correct, 'Ch2Result', 'Ch2Motivation');
}

// Chapter 3 - Supervised Learning
const ch3Answers = {
  q1: 'Regression',
  q2: 'Logistic Regression',
  q3: 'By splitting data based on feature values',
  q4: 'The ratio of correct positive predictions to total predicted positives',
  q5: 'The harmonic mean of precision and recall'
};
const ch3Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh3 = {};
function submitCh3(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer.'); return; }
  userCh3['q' + qNum] = selected;
  updateUI(qNum, selected, ch3Correct, ch3Answers, 'ch3');
  if (Object.keys(userCh3).length === 5) showResult(userCh3, ch3Correct, 'Ch3Result', 'Ch3Motivation');
}

// Chapter 4 - Unsupervised Learning
const ch4Answers = {
  q1: 'Partition data into K clusters by minimizing within-cluster variance',
  q2: 'DBSCAN finds clusters of arbitrary shape and detects noise',
  q3: 'To reduce the dimensionality of data while retaining most variance',
  q4: 'Email spam classification',
  q5: 'Density-Based Spatial Clustering of Applications with Noise'
};
const ch4Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh4 = {};
function submitCh4(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer.'); return; }
  userCh4['q' + qNum] = selected;
  updateUI(qNum, selected, ch4Correct, ch4Answers, 'ch4');
  if (Object.keys(userCh4).length === 5) showResult(userCh4, ch4Correct, 'Ch4Result', 'Ch4Motivation');
}

// Chapter 5 - Beginner ML Projects
const ch5Answers = {
  q1: "Predicting student's final grade based on study hours",
  q2: 'Converting text to numeric features using encoding or vectorization',
  q3: 'Logistic Regression',
  q4: 'Define the problem clearly',
  q5: 'Mean Absolute Error (MAE)'
};
const ch5Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh5 = {};
function submitCh5(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer.'); return; }
  userCh5['q' + qNum] = selected;
  updateUI(qNum, selected, ch5Correct, ch5Answers, 'ch5');
  if (Object.keys(userCh5).length === 5) showResult(userCh5, ch5Correct, 'Ch5Result', 'Ch5Motivation');
}

// Chapter 6 - Model Evaluation
const ch6Answers = {
  q1: 'The counts of true positives, false positives, true negatives, and false negatives',
  q2: 'When the model performs well on training data but poorly on unseen data',
  q3: 'To evaluate model’s generalization by testing on different data splits',
  q4: 'F1-score',
  q5: 'Underfitting'
};
const ch6Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh6 = {};
function submitCh6(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer.'); return; }
  userCh6['q' + qNum] = selected;
  updateUI(qNum, selected, ch6Correct, ch6Answers, 'ch6');
  if (Object.keys(userCh6).length === 5) showResult(userCh6, ch6Correct, 'Ch6Result', 'Ch6Motivation');
}

// Chapter 7 - Deployment
const ch7Answers = {
  q1: 'joblib',
  q2: 'A web interface that allows apps to communicate with your ML model over the internet',
  q3: "Allows other programs or users to use the model's predictions easily",
  q4: 'Drawing scatterplots using matplotlib',
  q5: 'Making the model available to provide predictions to applications/users'
};
const ch7Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh7 = {};
function submitCh7(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer.'); return; }
  userCh7['q' + qNum] = selected;
  updateUI(qNum, selected, ch7Correct, ch7Answers, 'ch7');
  if (Object.keys(userCh7).length === 5) showResult(userCh7, ch7Correct, 'Ch7Result', 'Ch7Motivation');
}

// Helper functions used by all
function getSelectedAnswer(qNum) {
  const options = document.getElementsByName('q' + qNum);
  for (const opt of options) if (opt.checked) return opt.value;
  return null;
}

function updateUI(qNum, selected, correctMap, answerMap, chapterPrefix) {
  const options = document.getElementsByName('q' + qNum);
  options.forEach(opt => opt.disabled = true);
  const btn = event.target;
  btn.disabled = true;
  const feedbackDiv = document.getElementById('feedback' + qNum);
  if (selected === correctMap['q' + qNum]) {
    btn.innerText = 'Correct!';
    feedbackDiv.innerHTML = `<span class="correct-answer">Great job! That is the right answer.</span>`;
  } else {
    btn.innerText = 'Wrong!';
    feedbackDiv.innerHTML = `<span class="correct-answer">The correct answer is: <strong>${answerMap['q' + qNum]}</strong></span><br>
      <span class="motivation-line">Keep trying, every mistake is a step forward!</span>`;
  }
}

function showResult(userAnswers, correctMap, resultId, motivationId) {
  let score = 0;
  for (const key in userAnswers) {
    if (userAnswers[key] === correctMap[key]) score++;
  }
  const percentage = (score / Object.keys(correctMap).length) * 100;
  document.getElementById(resultId).innerText = `You scored ${score} out of ${Object.keys(correctMap).length} (${percentage}%).`;
  const motivationQuotes = [
    "Great job! Keep practicing to master the concepts.",
    "Well done! Every step you take improves your ML skills.",
    "Excellent! Understanding grows with every question.",
    "Keep it up! Your knowledge is getting stronger.",
    "Fantastic! You’re on the path to ML mastery."
  ];
  const randomIndex = Math.floor(Math.random() * motivationQuotes.length);
  document.getElementById(motivationId).innerText = motivationQuotes[randomIndex];
}
