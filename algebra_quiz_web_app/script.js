const allQuestions = Array.isArray(window.questions) ? window.questions : [];

const els = {
  topicFilter: document.getElementById('topicFilter'),
  modeSelect: document.getElementById('modeSelect'),
  restartBtn: document.getElementById('restartBtn'),
  clearErrorsBtn: document.getElementById('clearErrorsBtn'),
  topicBadge: document.getElementById('topicBadge'),
  questionCounter: document.getElementById('questionCounter'),
  questionText: document.getElementById('questionText'),
  hint: document.getElementById('hint'),
  optionsForm: document.getElementById('optionsForm'),
  feedback: document.getElementById('feedback'),
  checkBtn: document.getElementById('checkBtn'),
  nextBtn: document.getElementById('nextBtn'),
  score: document.getElementById('score'),
  answered: document.getElementById('answered'),
  quiz: document.querySelector('.quiz'),
  summary: document.getElementById('summary'),
  summaryText: document.getElementById('summaryText'),
  summaryRestartBtn: document.getElementById('summaryRestartBtn'),
};

let sessionQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = 0;
let locked = false;

const STORAGE_ERRORS = 'algebraQuizWrongIds';

function getWrongIds() {
  try { return JSON.parse(localStorage.getItem(STORAGE_ERRORS)) || []; }
  catch { return []; }
}

function setWrongIds(ids) {
  localStorage.setItem(STORAGE_ERRORS, JSON.stringify([...new Set(ids)]));
}

function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function populateTopics() {
  const topics = [...new Set(allQuestions.map(q => q.topic))].sort((a, b) => a.localeCompare(b));
  topics.forEach(topic => {
    const opt = document.createElement('option');
    opt.value = topic;
    opt.textContent = topic;
    els.topicFilter.appendChild(opt);
  });
}

function buildSession() {
  const topic = els.topicFilter.value;
  const mode = els.modeSelect.value;
  let list = allQuestions;

  if (topic !== 'all') list = list.filter(q => q.topic === topic);
  if (mode === 'errors') {
    const wrong = new Set(getWrongIds());
    list = list.filter(q => wrong.has(q.id));
  }
  if (mode === 'random') list = shuffle(list);

  sessionQuestions = list;
  currentIndex = 0;
  score = 0;
  answered = 0;
  locked = false;
  updateScore();
  showQuestion();
}

function updateScore() {
  els.score.textContent = score;
  els.answered.textContent = answered;
}

function showQuestion() {
  els.feedback.className = 'feedback hidden';
  els.feedback.innerHTML = '';
  els.nextBtn.classList.add('hidden');
  els.checkBtn.classList.remove('hidden');
  els.checkBtn.disabled = false;
  els.optionsForm.innerHTML = '';
  locked = false;
  els.summary.classList.add('hidden');
  els.quiz.classList.remove('hidden');

  if (!sessionQuestions.length) {
    els.quiz.classList.add('hidden');
    els.summary.classList.remove('hidden');
    els.summaryText.textContent = els.modeSelect.value === 'errors'
      ? 'Non ci sono errori salvati. Bravissima: puoi fare tutti i quiz o ricominciare in modalità casuale.'
      : 'Non ci sono domande per questo filtro.';
    return;
  }

  if (currentIndex >= sessionQuestions.length) {
    els.quiz.classList.add('hidden');
    els.summary.classList.remove('hidden');
    const percent = answered ? Math.round((score / answered) * 100) : 0;
    els.summaryText.textContent = `Hai risposto correttamente a ${score} domande su ${answered}. Risultato: ${percent}%.`;
    return;
  }

  const q = sessionQuestions[currentIndex];
  els.topicBadge.textContent = q.topic;
  els.questionCounter.textContent = `Domanda ${currentIndex + 1}/${sessionQuestions.length} · ID ${q.id}`;
  els.questionText.textContent = q.question;
  els.hint.textContent = q.multiple
    ? `Domanda a risposta multipla: seleziona ${q.correctIndexes.length} risposte.`
    : 'Domanda a risposta singola.';

  const inputType = q.multiple ? 'checkbox' : 'radio';
  q.options.forEach((option, index) => {
    const label = document.createElement('label');
    label.className = 'option';
    label.dataset.index = String(index);
    label.innerHTML = `
      <input type="${inputType}" name="answer" value="${index}">
      <span><span class="letter">${String.fromCharCode(65 + index)}.</span>${escapeHtml(option)}</span>
    `;
    els.optionsForm.appendChild(label);
  });
}

function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function selectedIndexes() {
  return [...els.optionsForm.querySelectorAll('input:checked')].map(input => Number(input.value));
}

function sameSet(a, b) {
  if (a.length !== b.length) return false;
  const setB = new Set(b);
  return a.every(x => setB.has(x));
}

function checkAnswer() {
  if (locked) return;
  const q = sessionQuestions[currentIndex];
  const selected = selectedIndexes();
  if (!selected.length) {
    els.feedback.className = 'feedback bad';
    els.feedback.innerHTML = '<strong>Seleziona almeno una risposta.</strong>';
    return;
  }

  locked = true;
  answered++;
  const correct = sameSet(selected, q.correctIndexes);
  if (correct) score++;
  updateScore();

  const wrongIds = getWrongIds();
  if (correct) setWrongIds(wrongIds.filter(id => id !== q.id));
  else setWrongIds([...wrongIds, q.id]);

  [...els.optionsForm.querySelectorAll('.option')].forEach(label => {
    const idx = Number(label.dataset.index);
    const isCorrect = q.correctIndexes.includes(idx);
    const wasSelected = selected.includes(idx);
    if (isCorrect) label.classList.add('correct');
    if (wasSelected && !isCorrect) label.classList.add('wrong');
    label.querySelector('input').disabled = true;
  });

  const answers = q.correctAnswers.map((ans, i) => `${q.correctLetters[i]}. ${ans}`).join('<br>');
  els.feedback.className = correct ? 'feedback good' : 'feedback bad';
  els.feedback.innerHTML = `
    <strong>${correct ? 'Giusto!' : 'Sbagliato.'}</strong>
    <div><b>Risposta corretta:</b><br>${answers}</div>
    <div style="margin-top:8px"><b>Motivazione:</b> ${escapeHtml(q.explanation)}</div>
  `;

  els.checkBtn.classList.add('hidden');
  els.nextBtn.classList.remove('hidden');
}

function nextQuestion() {
  currentIndex++;
  showQuestion();
}

els.checkBtn.addEventListener('click', checkAnswer);
els.nextBtn.addEventListener('click', nextQuestion);
els.restartBtn.addEventListener('click', buildSession);
els.summaryRestartBtn.addEventListener('click', buildSession);
els.topicFilter.addEventListener('change', buildSession);
els.modeSelect.addEventListener('change', buildSession);
els.clearErrorsBtn.addEventListener('click', () => {
  localStorage.removeItem(STORAGE_ERRORS);
  if (els.modeSelect.value === 'errors') buildSession();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    if (!els.checkBtn.classList.contains('hidden')) checkAnswer();
    else nextQuestion();
  }
});

populateTopics();
buildSession();
