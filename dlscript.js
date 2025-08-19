// Combined JavaScript code for all Chapter quizzes (1 to 8 exercise quizzes)

// Utility functions used for all chapters
function getSelectedAnswer(qNum) {
  const options = document.getElementsByName('q' + qNum);
  for (const opt of options) {
    if (opt.checked) return opt.value;
  }
  return null;
}

function updateUI(qNum, selected, correctMap, answerMap, chapterPrefix, event) {
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
    "Great job! Keep building your deep learning skills.",
    "Excellent work! Practice makes perfect.",
    "Fantastic! You're mastering these concepts.",
    "Well done! Every step counts toward mastery.",
    "Impressive! Your learning journey is progressing well."
  ];

  const randomIndex = Math.floor(Math.random() * motivationQuotes.length);
  document.getElementById(motivationId).innerText = motivationQuotes[randomIndex];
}

// Chapter 1 - Deep Learning Intro
const ch1Answers = {
  q1: 'Learns hierarchical representations automatically from raw data',
  q2: 'Computer vision (e.g. image recognition)',
  q3: 'Multiple layers of neurons (nodes) connected with weights',
  q4: 'From the input layer through hidden layers to the output layer',
  q5: 'Many hidden layers between input and output'
};
const ch1Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh1 = {};
function submitCh1(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer before submitting.'); return; }
  userCh1['q' + qNum] = selected;
  updateUI(qNum, selected, ch1Correct, ch1Answers, 'ch1', event);
  if (Object.keys(userCh1).length === 5) showResult(userCh1, ch1Correct, 'resultDLIntro', 'motivationDLIntro');
}

// Chapter 2 - Perceptrons & Activations
const ch2Answers = {
  q1: 'Computes a weighted sum and passes it through an activation',
  q2: 'XOR logic gate',
  q3: '0 to 1',
  q4: 'To allow the model to learn complex, non-linear patterns',
  q5: 'ReLU (Rectified Linear Unit)'
};
const ch2Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh2 = {};
function submitCh2(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer before submitting.'); return; }
  userCh2['q' + qNum] = selected;
  updateUI(qNum, selected, ch2Correct, ch2Answers, 'ch2', event);
  if (Object.keys(userCh2).length === 5) showResult(userCh2, ch2Correct, 'resultPerceptrons', 'motivationPerceptrons');
}

// Chapter 3 - Training Neural Networks
const ch3Answers = {
  q1: 'Control the signals and thresholds during data flow',
  q2: 'Compute output predictions from inputs',
  q3: 'Cross-Entropy Loss',
  q4: 'Computes gradients for weights and biases to minimize loss',
  q5: 'One full pass through the entire training set'
};
const ch3Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh3 = {};
function submitCh3(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer before submitting.'); return; }
  userCh3['q' + qNum] = selected;
  updateUI(qNum, selected, ch3Correct, ch3Answers, 'ch3', event);
  if (Object.keys(userCh3).length === 5) showResult(userCh3, ch3Correct, 'resultTrainNN', 'motivationTrainNN');
}

// Chapter 4 - Optimization Techniques
const ch4Answers = {
  q1: 'Minimize the loss function by updating weights',
  q2: 'Stochastic Gradient Descent (SGD)',
  q3: 'Combining momentum and adaptive learning rates',
  q4: 'To gradually lower learning rate for fine-tuning',
  q5: 'Model performs well on training data but poorly on new data'
};
const ch4Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh4 = {};
function submitCh4(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer before submitting.'); return; }
  userCh4['q' + qNum] = selected;
  updateUI(qNum, selected, ch4Correct, ch4Answers, 'ch4', event);
  if (Object.keys(userCh4).length === 5) showResult(userCh4, ch4Correct, 'resultOptim', 'motivationOptim');
}

// Chapter 5 - CNN Basics
const ch5Answers = {
  q1: 'They capture spatial relationships between pixels efficiently',
  q2: 'Detects specific features like edges by scanning the image',
  q3: 'To reduce spatial dimensions by taking the maximum value in regions',
  q4: 'AlexNet',
  q5: 'ReLU'
};
const ch5Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh5 = {};
function submitCh5(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer before submitting.'); return; }
  userCh5['q' + qNum] = selected;
  updateUI(qNum, selected, ch5Correct, ch5Answers, 'ch5', event);
  if (Object.keys(userCh5).length === 5) showResult(userCh5, ch5Correct, 'resultCNN', 'motivationCNN');
}

// Chapter 6 - RNNs & LSTMs
const ch6Answers = {
  q1: 'They maintain a hidden state that captures sequence information',
  q2: 'The model forgets long-term dependencies',
  q3: 'Through gated cells controlling information flow',
  q4: 'Sequence prediction like text or stock trends',
  q5: 'Stores information about previous inputs in the sequence'
};
const ch6Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh6 = {};
function submitCh6(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer before submitting.'); return; }
  userCh6['q' + qNum] = selected;
  updateUI(qNum, selected, ch6Correct, ch6Answers, 'ch6', event);
  if (Object.keys(userCh6).length === 5) showResult(userCh6, ch6Correct, 'resultRNN', 'motivationRNN');
}

// Chapter 7 - Deep Learning Projects
const ch7Answers = {
  q1: 'Automatically identify the class of an image (e.g., digit 0-9)',
  q2: 'Convolutional Layer',
  q3: 'Tokenizing and padding sequences',
  q4: 'Past sequential values used to predict the future',
  q5: 'Demonstrates real practical skills to employers'
};
const ch7Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh7 = {};
function submitCh7(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer before submitting.'); return; }
  userCh7['q' + qNum] = selected;
  updateUI(qNum, selected, ch7Correct, ch7Answers, 'ch7', event);
  if (Object.keys(userCh7).length === 5) showResult(userCh7, ch7Correct, 'resultProjects', 'motivationProjects');
}

// Chapter 8 - Ethics in Deep Learning
const ch8Answers = {
  q1: 'Biased or unrepresentative training data',
  q2: 'AI uses large amounts of often personal data',
  q3: 'It clarifies why a model made a particular decision',
  q4: 'Transparency, fairness, and accountability',
  q5: 'GDPR (General Data Protection Regulation)'
};
const ch8Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh8 = {};
function submitCh8(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer before submitting.'); return; }
  userCh8['q' + qNum] = selected;
  updateUI(qNum, selected, ch8Correct, ch8Answers, 'ch8', event);
  if (Object.keys(userCh8).length === 5) showResult(userCh8, ch8Correct, 'resultEthics', 'motivationEthics');
}

// Chapter 9 - Future of Deep Learning
const ch9Answers = {
  q1: 'A neural network architecture using attention for sequence modeling',
  q2: 'Generating realistic images and data',
  q3: 'Healthcare',
  q4: 'Ensuring fairness, trust, and responsible use',
  q5: 'AI/ML engineering and data science'
};
const ch9Correct = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' };
const userCh9 = {};
function submitCh9(qNum, event) {
  const selected = getSelectedAnswer(qNum);
  if (!selected) { alert('Please select an answer before submitting.'); return; }
  userCh9['q' + qNum] = selected;
  updateUI(qNum, selected, ch9Correct, ch9Answers, 'ch9', event);
  if (Object.keys(userCh9).length === 5) showResult(userCh9, ch9Correct, 'resultFuture', 'motivationFuture');
}
