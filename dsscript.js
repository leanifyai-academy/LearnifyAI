// Combined JavaScript code for all Chapter quizzes (1 to 8)

// Utility functions used for all chapters
function getSelectedAnswer(qNum) {
  const options = document.getElementsByName('q' + qNum);
  for (const opt of options) {
    if (opt.checked) return opt.value;
  }
  return null;
}

function updateUI(qNum, selected, correctMap, answerMap, event) {
  const options = document.getElementsByName('q' + qNum);
  for (const opt of options) opt.disabled = true;
  const btn = event.target;
  btn.disabled = true;

  const feedbackDiv = document.getElementById('feedback' + qNum);

  if (selected === correctMap['q' + qNum]) {
    btn.innerText = 'Correct!';
    feedbackDiv.innerHTML = '<span class="correct-answer">Well done! That is correct.</span>';
  } else {
    btn.innerText = 'Wrong!';
    feedbackDiv.innerHTML =
      `<span class="correct-answer">Correct answer: <strong>${answerMap['q' + qNum]}</strong></span><br>` +
      `<span class="motivation-line">Keep practicing and learning!</span>`;
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
    "Great job! Keep building your skills.",
    "Excellent work! Practice makes perfect.",
    "Fantastic! You're mastering these concepts.",
    "Well done! Every step counts.",
    "Impressive! Your learning journey progresses."
  ];

  const randomIndex = Math.floor(Math.random() * motivationQuotes.length);
  document.getElementById(motivationId).innerText = motivationQuotes[randomIndex];
}

// Chapter 1 - Introduction to Data Science
const ch1Answers = {
  q1: 'Extracting insights and knowledge from data',
  q2: 'Python',
  q3: 'Building predictive models to solve problems',
  q4: 'Finance',
  q5: 'Querying and managing relational databases'
};
const ch1Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh1 = {};
function submitCh1(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer before submitting.'); return; }
  userCh1['q' + qNum] = selected;
  updateUI(qNum, selected, ch1Correct, ch1Answers, event);
  if (Object.keys(userCh1).length === 5) showResult(userCh1, ch1Correct, 'resultDSIntro', 'motivationDSIntro');
}

// Chapter 2 - Python for Data Science
const ch2Answers = {
  q1: 'Pandas',
  q2: 'A two-dimensional labeled data structure',
  q3: 'pandas.read_csv()',
  q4: 'One-dimensional labeled arrays',
  q5: 'Matplotlib'
};
const ch2Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh2 = {};
function submitCh2(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer before submitting.'); return; }
  userCh2['q' + qNum] = selected;
  updateUI(qNum, selected, ch2Correct, ch2Answers, event);
  if (Object.keys(userCh2).length === 5) showResult(userCh2, ch2Correct, 'resultPythonDS', 'motivationPythonDS');
}

// Chapter 3 - Statistics & Probability
const ch3Answers = {
  q1: 'The average of values',
  q2: 'Normal distribution',
  q3: 'Means of two groups',
  q4: 'Because other variables might influence both correlated variables',
  q5: 'The spread of data around the mean'
};
const ch3Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh3 = {};
function submitCh3(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer before submitting.'); return; }
  userCh3['q' + qNum] = selected;
  updateUI(qNum, selected, ch3Correct, ch3Answers, event);
  if (Object.keys(userCh3).length === 5) showResult(userCh3, ch3Correct, 'resultStats', 'motivationStats');
}

// Chapter 4 - Data Cleaning & Preprocessing
const ch4Answers = {
  q1: 'Imputation using mean or median',
  q2: 'A value that is significantly different from most others',
  q3: 'Min-Max scaling',
  q4: 'Converting categorical variables into binary vectors',
  q5: 'Creating new features to improve model performance'
};
const ch4Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh4 = {};
function submitCh4(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer before submitting.'); return; }
  userCh4['q' + qNum] = selected;
  updateUI(qNum, selected, ch4Correct, ch4Answers, event);
  if (Object.keys(userCh4).length === 5) showResult(userCh4, ch4Correct, 'resultCleaning', 'motivationCleaning');
}

// Chapter 5 - Data Visualization
const ch5Answers = {
  q1: 'Matplotlib',
  q2: 'To show the intensity of values (e.g., correlation matrix)',
  q3: 'Plotly',
  q4: 'Relationships between pairs of variables in a dataset',
  q5: 'It helps turn data into actionable insights'
};
const ch5Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh5 = {};
function submitCh5(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer before submitting.'); return; }
  userCh5['q' + qNum] = selected;
  updateUI(qNum, selected, ch5Correct, ch5Answers, event);
  if (Object.keys(userCh5).length === 5) showResult(userCh5, ch5Correct, 'resultViz', 'motivationViz');
}

// Chapter 7 - Machine Learning for Data Science
const ch7Answers = {
  q1: 'Learning from labeled data with known outputs',
  q2: 'Linear Regression',
  q3: 'Groups data into clusters based on similarity',
  q4: 'F1-score',
  q5: 'Logistic Regression'
};
const ch7Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh7 = {};
function submitCh7(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer before submitting.'); return; }
  userCh7['q' + qNum] = selected;
  updateUI(qNum, selected, ch7Correct, ch7Answers, event);
  if (Object.keys(userCh7).length === 5) showResult(userCh7, ch7Correct, 'resultML', 'motivationML');
}

// Chapter 8 - Data Science Projects
const ch8Answers = {
  q1: 'Understand the problem and define objectives',
  q2: 'Data cleaning and preprocessing',
  q3: 'Understand data patterns and relationships',
  q4: 'Web design',
  q5: 'To communicate process, results, and insights clearly'
};
const ch8Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh8 = {};
function submitCh8(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer before submitting.'); return; }
  userCh8['q' + qNum] = selected;
  updateUI(qNum, selected, ch8Correct, ch8Answers, event);
  if (Object.keys(userCh8).length === 5) showResult(userCh8, ch8Correct, 'resultProjects', 'motivationProjects');
}
