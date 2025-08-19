document.addEventListener('DOMContentLoaded', function() {
    const answersChapter2 = {
      q1: 'It is simple, versatile, and has many AI libraries',
      q2: 'TensorFlow',
      q3: 'Matplotlib',
      q4: 'Jupyter Notebook',
      q5: 'Use libraries like Pandas and NumPy'
    };
    const correctValuesChapter2 = {
      q1: 'correct',
      q2: 'correct',
      q3: 'correct',
      q4: 'correct',
      q5: 'correct'
    };
    const userAnswersChapter2 = {};
  
    window.submitSingleChapter2 = function(qNum, event) {
      const options = document.getElementsByName('q' + qNum);
      let selectedText = null;
      for (const option of options) {
        if (option.checked) {
          selectedText = option.nextSibling.textContent.trim();
          break;
        }
      }
      if (selectedText === null) {
        alert('Please select an answer before submitting.');
        return;
      }
      const selectedOption = Array.from(options).find(opt => opt.checked);
      const selectedValue = selectedOption.value;
  
      userAnswersChapter2['q' + qNum] = selectedValue;
  
      for (const option of options) {
        option.disabled = true;
      }
  
      const btn = event.target;
      btn.disabled = true;
  
      const feedbackDiv = document.getElementById('feedback' + qNum);
      const motivationDiv = document.getElementById('motivationChapter2');
  
      if (selectedValue === correctValuesChapter2['q' + qNum]) {
        btn.innerText = 'Correct!';
        feedbackDiv.innerHTML = '<span class="correct-answer">Great job! That is the right answer.</span>';
        motivationDiv.innerText = ''; // Clear motivation message on correct
      } else {
        btn.innerText = 'Wrong!';
        feedbackDiv.innerHTML = `<span class="correct-answer">The correct answer is: <strong>${answersChapter2['q' + qNum]}</strong></span>
                                 <br><span class="motivation-line">Don’t worry, your effort is what matters most! Keep learning!</span>`;
        motivationDiv.innerText = "Don’t worry, every mistake is a step forward! Keep pushing!";
      }
  
      if (Object.keys(userAnswersChapter2).length === 5) {
        showResultAndQuoteChapter2();
      }
    };
  
    function showResultAndQuoteChapter2() {
      let score = 0;
      for (const key in userAnswersChapter2) {
        if (userAnswersChapter2[key] === correctValuesChapter2[key]) score++;
      }
      const percentage = (score / 5) * 100;
      const resultText = `You scored ${score} out of 5 (${percentage}%).`;
      document.getElementById('resultChapter2').innerText = resultText;
  
      const motivationQuotes = [
        "Great job! Keep learning and exploring — the future is yours!",
        "Excellent effort! Every question brings you closer to mastery.",
        "Well done! Remember, learning is a journey, not a race.",
        "Good work! Your curiosity is your greatest strength.",
        "Fantastic! Keep pushing boundaries and stay curious."
      ];
      const randomIndex = Math.floor(Math.random() * motivationQuotes.length);
      document.getElementById('motivationChapter2').innerText = motivationQuotes[randomIndex];
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const answersChapter3 = {
      q1_3: 'An Excel sheet with employee records',
      q2_3: 'Prepare data to improve AI model performance and accuracy',
      q3_3: 'Matplotlib',
      q4_3: 'JSON files',
      q5_3: 'To find patterns and outliers'
    };
    const correctValuesChapter3 = {
      q1_3: 'correct',
      q2_3: 'correct',
      q3_3: 'correct',
      q4_3: 'correct',
      q5_3: 'correct'
    };
    const userAnswersChapter3 = {};
  
    window.submitSingleChapter3 = function(qNum, event) {
      const name = 'q' + qNum + '_3';
      const options = document.getElementsByName(name);
      let selectedText = null;
      for (const option of options) {
        if (option.checked) {
          selectedText = option.nextSibling.textContent.trim();
          break;
        }
      }
      if (selectedText === null) {
        alert('Please select an answer before submitting.');
        return;
      }
      const selectedOption = Array.from(options).find(opt => opt.checked);
      const selectedValue = selectedOption.value;
  
      userAnswersChapter3[name] = selectedValue;
  
      for (const option of options) {
        option.disabled = true;
      }
  
      const btn = event.target;
      btn.disabled = true;
  
      const feedbackDiv = document.getElementById('feedback' + qNum + '_3');
      const motivationDiv = document.getElementById('motivationChapter3');
  
      if (selectedValue === correctValuesChapter3[name]) {
        btn.innerText = 'Correct!';
        feedbackDiv.innerHTML = '<span class="correct-answer">Great job! That is the right answer.</span>';
        motivationDiv.innerText = '';
      } else {
        btn.innerText = 'Wrong!';
        feedbackDiv.innerHTML = `<span class="correct-answer">The correct answer is: <strong>${answersChapter3[name]}</strong></span>
                                 <br><span class="motivation-line">Keep learning and don't give up!</span>`;
        motivationDiv.innerText = "Mistakes help you grow! Keep trying!";
      }
  
      if (Object.keys(userAnswersChapter3).length === 5) {
        showResultAndQuoteChapter3();
      }
    };
  
    function showResultAndQuoteChapter3() {
      let score = 0;
      for (const key in userAnswersChapter3) {
        if (userAnswersChapter3[key] === correctValuesChapter3[key]) score++;
      }
      const percentage = (score / 5) * 100;
      const resultText = `You scored ${score} out of 5 (${percentage}%).`;
      document.getElementById('resultChapter3').innerText = resultText;
  
      const motivationQuotes = [
        "Excellent work! Keep advancing your AI knowledge!",
        "Great effort! Every question is a step closer to mastery.",
        "Well done! Remember, learning is a journey.",
        "Fantastic! Your curiosity is key to success.",
        "Keep pushing boundaries and stay curious!"
      ];
      const randomIndex = Math.floor(Math.random() * motivationQuotes.length);
      document.getElementById('motivationChapter3').innerText = motivationQuotes[randomIndex];
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const answersChapter4 = {
      q1_ml: 'Teaching computers to learn patterns from data',
      q2_ml: 'Supervised Learning',
      q3_ml: 'Learn actions to maximize rewards through trial and error',
      q4_ml: 'Collecting and preparing data',
      q5_ml: 'Manual data entry by humans'
    };
    const correctValuesChapter4 = {
      q1_ml: 'correct',
      q2_ml: 'correct',
      q3_ml: 'correct',
      q4_ml: 'correct',
      q5_ml: 'correct'
    };
    const userAnswersChapter4 = {};
  
    window.submitSingleChapter4 = function(qNum, event) {
      const name = 'q' + qNum + '_ml';
      const options = document.getElementsByName(name);
      let selectedText = null;
      for (const option of options) {
        if (option.checked) {
          selectedText = option.nextSibling.textContent.trim();
          break;
        }
      }
      if (selectedText === null) {
        alert('Please select an answer before submitting.');
        return;
      }
      const selectedOption = Array.from(options).find(opt => opt.checked);
      const selectedValue = selectedOption.value;
  
      userAnswersChapter4[name] = selectedValue;
  
      for (const option of options) {
        option.disabled = true;
      }
  
      const btn = event.target;
      btn.disabled = true;
  
      const feedbackDiv = document.getElementById('feedback' + qNum + '_ml');
      const motivationDiv = document.getElementById('motivationChapter4');
  
      if (selectedValue === correctValuesChapter4[name]) {
        btn.innerText = 'Correct!';
        feedbackDiv.innerHTML = '<span class="correct-answer">Great job! That is the right answer.</span>';
        motivationDiv.innerText = '';
      } else {
        btn.innerText = 'Wrong!';
        feedbackDiv.innerHTML = `<span class="correct-answer">The correct answer is: <strong>${answersChapter4[name]}</strong></span>
                               <br><span class="motivation-line">Keep learning and don’t give up!</span>`;
        motivationDiv.innerText = "Mistakes help you grow! Keep trying!";
      }
  
      if (Object.keys(userAnswersChapter4).length === 5) {
        showResultAndQuoteChapter4();
      }
    };
  
    function showResultAndQuoteChapter4() {
      let score = 0;
      for (const key in userAnswersChapter4) {
        if (userAnswersChapter4[key] === correctValuesChapter4[key]) score++;
      }
      const percentage = (score / 5) * 100;
      const resultText = `You scored ${score} out of 5 (${percentage}%).`;
      document.getElementById('resultChapter4').innerText = resultText;
  
      const motivationQuotes = [
        "Excellent work! You're mastering Machine Learning concepts!",
        "Great effort! Every question makes you stronger.",
        "Well done! Keep building your AI skills.",
        "Fantastic! Your skills are growing rapidly.",
        "Keep pushing boundaries and stay curious!"
      ];
      const randomIndex = Math.floor(Math.random() * motivationQuotes.length);
      document.getElementById('motivationChapter4').innerText = motivationQuotes[randomIndex];
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const answersChapter5 = {
      q1_ai: 'A program that can converse with users automatically',
      q2_ai: 'Detect positive, negative, or neutral feelings in text',
      q3_ai: 'MNIST handwritten digits dataset',
      q4_ai: 'Suggest products or content based on user preferences',
      q5_ai: 'Start small with simple datasets and clear goals'
    };
    const correctValuesChapter5 = {
      q1_ai: 'correct',
      q2_ai: 'correct',
      q3_ai: 'correct',
      q4_ai: 'correct',
      q5_ai: 'correct'
    };
    const userAnswersChapter5 = {};
  
    window.submitSingleChapter5 = function(qNum, event) {
      const name = 'q' + qNum + '_ai';
      const options = document.getElementsByName(name);
      let selectedText = null;
      for (const option of options) {
        if (option.checked) {
          selectedText = option.nextSibling.textContent.trim();
          break;
        }
      }
      if (selectedText === null) {
        alert('Please select an answer before submitting.');
        return;
      }
      const selectedOption = Array.from(options).find(opt => opt.checked);
      const selectedValue = selectedOption.value;
  
      userAnswersChapter5[name] = selectedValue;
  
      for (const option of options) {
        option.disabled = true;
      }
  
      const btn = event.target;
      btn.disabled = true;
  
      const feedbackDiv = document.getElementById('feedback' + qNum + '_ai');
      const motivationDiv = document.getElementById('motivationChapter5');
  
      if (selectedValue === correctValuesChapter5[name]) {
        btn.innerText = 'Correct!';
        feedbackDiv.innerHTML = '<span class="correct-answer">Great job! That is the right answer.</span>';
        motivationDiv.innerText = '';
      } else {
        btn.innerText = 'Wrong!';
        feedbackDiv.innerHTML = `<span class="correct-answer">The correct answer is: <strong>${answersChapter5[name]}</strong></span>
                               <br><span class="motivation-line">Keep learning and don’t give up!</span>`;
        motivationDiv.innerText = "Mistakes help you grow! Keep trying!";
      }
  
      if (Object.keys(userAnswersChapter5).length === 5) {
        showResultAndQuoteChapter5();
      }
    };
  
    function showResultAndQuoteChapter5() {
      let score = 0;
      for (const key in userAnswersChapter5) {
        if (userAnswersChapter5[key] === correctValuesChapter5[key]) score++;
      }
      const percentage = (score / 5) * 100;
      const resultText = `You scored ${score} out of 5 (${percentage}%).`;
      document.getElementById('resultChapter5').innerText = resultText;
  
      const motivationQuotes = [
        "Awesome! Keep building your AI skills!",
        "Great work! You’re getting better every day.",
        "Well done! Stay curious and motivated.",
        "Fantastic! Keep pushing your limits.",
        "Excellent effort! The AI world is yours to explore."
      ];
      const randomIndex = Math.floor(Math.random() * motivationQuotes.length);
      document.getElementById('motivationChapter5').innerText = motivationQuotes[randomIndex];
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const answersEthics = {
      q1_ethics: "It protects people's sensitive and personal information",
      q2_ethics: "Treating people equally and avoiding discrimination",
      q3_ethics: "Clearly explaining how AI makes decisions",
      q4_ethics: "The people and companies who develop or use the AI",
      q5_ethics: "Discriminating against people based on race or gender"
    };
    const correctValuesEthics = {
      q1_ethics: "correct",
      q2_ethics: "correct",
      q3_ethics: "correct",
      q4_ethics: "correct",
      q5_ethics: "correct"
    };
    const userAnswersEthics = {};
  
    window.submitSingleEthics = function(qNum, event) {
      const name = 'q' + qNum + '_ethics';
      const options = document.getElementsByName(name);
      let selectedText = null;
      for (const option of options) {
        if (option.checked) {
          selectedText = option.nextSibling.textContent.trim();
          break;
        }
      }
      if (selectedText === null) {
        alert('Please select an answer before submitting.');
        return;
      }
      const selectedOption = Array.from(options).find(opt => opt.checked);
      const selectedValue = selectedOption.value;
  
      userAnswersEthics[name] = selectedValue;
  
      for (const option of options) {
        option.disabled = true;
      }
  
      const btn = event.target;
      btn.disabled = true;
  
      const feedbackDiv = document.getElementById('feedback' + qNum + '_ethics');
      const motivationDiv = document.getElementById('motivationEthics');
  
      if (selectedValue === correctValuesEthics[name]) {
        btn.innerText = 'Correct!';
        feedbackDiv.innerHTML = '<span class="correct-answer">Great job! That is the right answer.</span>';
        motivationDiv.innerText = '';
      } else {
        btn.innerText = 'Wrong!';
        feedbackDiv.innerHTML = `<span class="correct-answer">The correct answer is: <strong>${answersEthics[name]}</strong></span>
                               <br><span class="motivation-line">Keep learning and don’t give up!</span>`;
        motivationDiv.innerText = "Mistakes help you grow! Keep trying!";
      }
  
      if (Object.keys(userAnswersEthics).length === 5) {
        showResultAndQuoteEthics();
      }
    };
  
    function showResultAndQuoteEthics() {
      let score = 0;
      for (const key in userAnswersEthics) {
        if (userAnswersEthics[key] === correctValuesEthics[key]) score++;
      }
      const percentage = (score / 5) * 100;
      const resultText = `You scored ${score} out of 5 (${percentage}%).`;
      document.getElementById('resultEthics').innerText = resultText;
  
      const motivationQuotes = [
        "Well done! Your ethical awareness is key to responsible AI development.",
        "Great job! Ethics ensures AI benefits everyone.",
        "Awesome! Keep prioritizing fairness and transparency.",
        "Fantastic! Your commitment to ethics strengthens technology.",
        "Excellent! Responsible AI starts with you."
      ];
      const randomIndex = Math.floor(Math.random() * motivationQuotes.length);
      document.getElementById('motivationEthics').innerText = motivationQuotes[randomIndex];
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const answersChapter7 = {
      q1_fut: 'Deep Learning',
      q2_fut: 'Understand and generate human language',
      q3_fut: 'Analyzing and interpreting images and videos',
      q4_fut: 'Machines that can make decisions and act independently',
      q5_fut: 'Machine Learning Engineer'
    };
    const correctValuesChapter7 = {
      q1_fut: 'correct',
      q2_fut: 'correct',
      q3_fut: 'correct',
      q4_fut: 'correct',
      q5_fut: 'correct'
    };
    const userAnswersChapter7 = {};
  
    window.submitSingleChapter7 = function(qNum, event) {
      const name = 'q' + qNum + '_fut';
      const options = document.getElementsByName(name);
      let selectedText = null;
      for (const option of options) {
        if (option.checked) {
          selectedText = option.nextSibling.textContent.trim();
          break;
        }
      }
      if (selectedText === null) {
        alert('Please select an answer before submitting.');
        return;
      }
      const selectedOption = Array.from(options).find(opt => opt.checked);
      const selectedValue = selectedOption.value;
  
      userAnswersChapter7[name] = selectedValue;
  
      for (const option of options) {
        option.disabled = true;
      }
  
      const btn = event.target;
      btn.disabled = true;
  
      const feedbackDiv = document.getElementById('feedback' + qNum + '_fut');
      const motivationDiv = document.getElementById('motivationChapter7');
  
      if (selectedValue === correctValuesChapter7[name]) {
        btn.innerText = 'Correct!';
        feedbackDiv.innerHTML = '<span class="correct-answer">Great job! That is the right answer.</span>';
        motivationDiv.innerText = '';
      } else {
        btn.innerText = 'Wrong!';
        feedbackDiv.innerHTML = `<span class="correct-answer">The correct answer is: <strong>${answersChapter7[name]}</strong></span>
                                 <br><span class="motivation-line">Keep learning and don’t give up!</span>`;
        motivationDiv.innerText = "Mistakes help you grow! Keep trying!";
      }
  
      if (Object.keys(userAnswersChapter7).length === 5) {
        showResultAndQuoteChapter7();
      }
    };
  
    function showResultAndQuoteChapter7() {
      let score = 0;
      for (const key in userAnswersChapter7) {
        if (userAnswersChapter7[key] === correctValuesChapter7[key]) score++;
      }
      const percentage = (score / 5) * 100;
      const resultText = `You scored ${score} out of 5 (${percentage}%).`;
      document.getElementById('resultChapter7').innerText = resultText;
  
      const motivationQuotes = [
        "Fantastic! You're ready to be part of AI’s bright future!",
        "Great job! Keep exploring and growing your AI skills.",
        "Well done! Your knowledge of AI trends is solid.",
        "Excellent! The future of AI is exciting, and so is your journey.",
        "Keep going! Your curiosity will take you far."
      ];
      const randomIndex = Math.floor(Math.random() * motivationQuotes.length);
      document.getElementById('motivationChapter7').innerText = motivationQuotes[randomIndex];
    }
  });
            