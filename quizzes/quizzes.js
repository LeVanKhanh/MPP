(() => {
	'use strict';

	const state = {
		configs: [],
		configScriptPath: null,
		selectedConfigIndex: 0,
		activeConfig: null,
		activeQuestions: [],
		currentQuestionIndex: 0,
		answers: new Map(),
		timerSecondsRemaining: 0,
		timerIntervalId: null,
		quizStarted: false,
	};

	const elements = {
		quizTitle: document.getElementById('quiz-title'),
		quizSubtitle: document.getElementById('quiz-subtitle'),
		setupPanel: document.getElementById('setup-panel'),
		quizPanel: document.getElementById('quiz-panel'),
		resultPanel: document.getElementById('result-panel'),
		statusPanel: document.getElementById('status-panel'),
		statusText: document.getElementById('status-text'),
		quizSelect: document.getElementById('quiz-select'),
		configMetrics: document.getElementById('config-metrics'),
		startBtn: document.getElementById('start-btn'),
		reloadBtn: document.getElementById('reload-btn'),
		timer: document.getElementById('timer'),
		questionIndex: document.getElementById('question-index'),
		answeredCount: document.getElementById('answered-count'),
		progressWrap: document.getElementById('progress-wrap'),
		progressBar: document.getElementById('progress-bar'),
		questionText: document.getElementById('question-text'),
		questionTags: document.getElementById('question-tags'),
		optionsForm: document.getElementById('options-form'),
		prevBtn: document.getElementById('prev-btn'),
		nextBtn: document.getElementById('next-btn'),
		submitBtn: document.getElementById('submit-btn'),
		resultScore: document.getElementById('result-score'),
		resultPassThreshold: document.getElementById('result-pass-threshold'),
		resultCorrect: document.getElementById('result-correct'),
		resultStatus: document.getElementById('result-status'),
		retryBtn: document.getElementById('retry-btn'),
		backBtn: document.getElementById('back-btn'),
	};

	function escapeHtml(value) {
		return String(value)
			.replaceAll('&', '&amp;')
			.replaceAll('<', '&lt;')
			.replaceAll('>', '&gt;')
			.replaceAll('"', '&quot;')
			.replaceAll("'", '&#39;');
	}

	function shuffle(array) {
		const result = [...array];
		for (let i = result.length - 1; i > 0; i -= 1) {
			const randomIndex = Math.floor(Math.random() * (i + 1));
			[result[i], result[randomIndex]] = [result[randomIndex], result[i]];
		}
		return result;
	}

	function sample(array, count) {
		if (count <= 0) {
			return [];
		}
		return shuffle(array).slice(0, Math.min(count, array.length));
	}

	function toNumber(value, fallback = 0) {
		const number = Number(value);
		return Number.isFinite(number) ? number : fallback;
	}

	function formatTime(totalSeconds) {
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;
		return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
	}

	function setStatus(message, type = 'info') {
		elements.statusText.textContent = message;
		elements.statusPanel.dataset.type = type;
	}

	function togglePanel(panelName) {
		elements.setupPanel.classList.toggle('hidden', panelName !== 'setup');
		elements.quizPanel.classList.toggle('hidden', panelName !== 'quiz');
		elements.resultPanel.classList.toggle('hidden', panelName !== 'result');
	}

	function getConfigScriptPath() {
		const params = new URLSearchParams(window.location.search);
		return params.get('config') || 'quizzes-main.js';
	}

	function removeExistingConfigScript(path) {
		const existing = document.querySelector(`script[data-quiz-config-path="${CSS.escape(path)}"]`);
		if (existing) {
			existing.remove();
		}
	}

	function loadConfigScript(path) {
		return new Promise((resolve, reject) => {
			removeExistingConfigScript(path);
			const script = document.createElement('script');
			script.src = path;
			script.async = true;
			script.dataset.quizConfigPath = path;
			script.onload = () => resolve();
			script.onerror = () => reject(new Error(`Khong the tai file cau hinh: ${path}`));
			document.head.appendChild(script);
		});
	}

	function normalizeAnswerIds(answerList) {
		const unique = new Set((answerList || []).map((id) => toNumber(id, -1)).filter((id) => id >= 0));
		return [...unique].sort((a, b) => a - b);
	}

	function normalizeQuestion(question, index) {
		const options = Array.isArray(question.options) ? question.options : [];
		const normalizedOptions = options
			.map((option, optionIndex) => {
				const optionId = toNumber(option.id, optionIndex + 1);
				return {
					id: optionId,
					text: typeof option.text === 'string' ? option.text : `Lua chon ${optionId}`,
				};
			})
			.filter((option) => Number.isFinite(option.id));

		return {
			id: `${index + 1}-${Math.random().toString(36).slice(2, 10)}`,
			question: typeof question.question === 'string' ? question.question : `Cau hoi ${index + 1}`,
			tags: Array.isArray(question.tags) ? question.tags.map((tag) => String(tag)) : [],
			options: normalizedOptions,
			answer: normalizeAnswerIds(Array.isArray(question.answer) ? question.answer : []),
			score: Math.max(1, toNumber(question.score, 1)),
		};
	}

	function normalizeConfig(config, index) {
		return {
			quizName: typeof config.quizName === 'string' ? config.quizName : `Quiz ${index + 1}`,
			duration: Math.max(1, toNumber(config.duration, 30)),
			questions: Math.max(1, toNumber(config.questions, 10)),
			passingScore: Math.max(0, toNumber(config.passingScore, 70)),
			questionsBank: Array.isArray(config.questionsBank) ? config.questionsBank : [],
			categoryPercentage: Array.isArray(config.categoryPercentage) ? config.categoryPercentage : [],
		};
	}

	async function parseQuestionBankSource(source) {
		if (typeof source === 'string') {
			const response = await fetch(source);
			if (!response.ok) {
				throw new Error(`Khong tai duoc question bank: ${source}`);
			}
			return response.json();
		}

		if (Array.isArray(source)) {
			return { questions: source };
		}

		if (source && typeof source === 'object') {
			if (Array.isArray(source.questions)) {
				return source;
			}
			if (typeof source.file === 'string') {
				const response = await fetch(source.file);
				if (!response.ok) {
					throw new Error(`Khong tai duoc question bank: ${source.file}`);
				}
				return response.json();
			}
		}

		throw new Error('questionsBank co phan tu khong hop le.');
	}

	function tagsContain(question, targetTag) {
		const normalizedTag = String(targetTag || '').trim().toLowerCase();
		if (!normalizedTag) {
			return false;
		}
		return question.tags.some((tag) => String(tag).trim().toLowerCase() === normalizedTag);
	}

	function buildCategoryQuotas(categoryRules, questionCount) {
		const normalized = categoryRules
			.map((rule) => ({
				tag: String(rule.tag || '').trim(),
				percentage: Math.max(0, toNumber(rule.percentage, 0)),
			}))
			.filter((rule) => rule.tag && rule.percentage > 0);

		if (normalized.length === 0) {
			return [];
		}

		const totalPercentage = normalized.reduce((sum, rule) => sum + rule.percentage, 0);
		if (totalPercentage <= 0) {
			return [];
		}

		const rawQuotas = normalized.map((rule) => {
			const ideal = (questionCount * rule.percentage) / totalPercentage;
			return {
				tag: rule.tag,
				base: Math.floor(ideal),
				decimal: ideal - Math.floor(ideal),
			};
		});

		let assigned = rawQuotas.reduce((sum, item) => sum + item.base, 0);
		let remainder = Math.max(0, questionCount - assigned);

		const sortedByDecimal = [...rawQuotas].sort((a, b) => b.decimal - a.decimal);
		for (let i = 0; i < sortedByDecimal.length && remainder > 0; i += 1) {
			sortedByDecimal[i].base += 1;
			remainder -= 1;
			assigned += 1;
		}

		if (assigned > questionCount) {
			const overflow = assigned - questionCount;
			const sortedDescending = [...sortedByDecimal].sort((a, b) => b.base - a.base);
			for (let i = 0; i < sortedDescending.length && i < overflow; i += 1) {
				sortedDescending[i].base = Math.max(0, sortedDescending[i].base - 1);
			}
		}

		return sortedByDecimal.map((item) => ({ tag: item.tag, count: item.base }));
	}

	function pickQuestionsByCategory(questions, categoryRules, targetCount) {
		const quotas = buildCategoryQuotas(categoryRules, targetCount);
		const selectedMap = new Map();

		quotas.forEach(({ tag, count }) => {
			const candidates = questions.filter((question) => tagsContain(question, tag));
			sample(candidates, count).forEach((question) => {
				selectedMap.set(question.id, question);
			});
		});

		const selected = [...selectedMap.values()];
		if (selected.length >= targetCount) {
			return sample(selected, targetCount);
		}

		const selectedIds = new Set(selected.map((question) => question.id));
		const remaining = questions.filter((question) => !selectedIds.has(question.id));
		return [...selected, ...sample(remaining, targetCount - selected.length)];
	}

	async function loadAllQuestions(activeConfig) {
		const banks = await Promise.all(activeConfig.questionsBank.map((source) => parseQuestionBankSource(source)));
		const merged = banks.flatMap((bank) => (Array.isArray(bank.questions) ? bank.questions : []));

		const normalized = merged
			.map((question, index) => normalizeQuestion(question, index))
			.filter((question) => question.options.length >= 2 && question.answer.length > 0);

		if (normalized.length === 0) {
			throw new Error('Khong co cau hoi hop le trong questionsBank.');
		}

		return normalized;
	}

	function updateSetupMetrics() {
		const config = state.configs[state.selectedConfigIndex];
		if (!config) {
			elements.configMetrics.innerHTML = '';
			return;
		}

		const categoryText = config.categoryPercentage.length > 0
			? config.categoryPercentage
				.map((item) => `${escapeHtml(String(item.tag || 'N/A'))}: ${toNumber(item.percentage, 0)}%`)
				.join(' | ')
			: 'Khong khai bao (he thong se tron ngau nhien toan bo question bank).';

		elements.configMetrics.innerHTML = `
			<div class="metric-pill"><span>Thoi gian</span><strong>${config.duration} phut</strong></div>
			<div class="metric-pill"><span>So cau</span><strong>${config.questions}</strong></div>
			<div class="metric-pill"><span>Muc dat</span><strong>${config.passingScore}%</strong></div>
			<div class="metric-pill metric-wide"><span>Ty le category</span><strong>${categoryText}</strong></div>
		`;
	}

	function renderConfigSelect() {
		elements.quizSelect.innerHTML = state.configs
			.map((config, index) => `<option value="${index}">${escapeHtml(config.quizName)}</option>`)
			.join('');
		elements.quizSelect.value = String(state.selectedConfigIndex);
		updateSetupMetrics();
	}

	function getSelectedAnswerSet(questionIndex) {
		return new Set(state.answers.get(questionIndex) || []);
	}

	function updateProgressAndCounter() {
		const answeredCount = state.answers.size;
		const total = state.activeQuestions.length;
		const percent = total === 0 ? 0 : Math.round((answeredCount / total) * 100);

		elements.answeredCount.textContent = `${answeredCount}/${total} da tra loi`;
		elements.progressBar.style.width = `${percent}%`;
		elements.progressWrap.setAttribute('aria-valuenow', String(percent));
	}

	function renderCurrentQuestion() {
		const total = state.activeQuestions.length;
		const currentIndex = state.currentQuestionIndex;
		const question = state.activeQuestions[currentIndex];
		if (!question) {
			return;
		}

		elements.questionIndex.textContent = `${currentIndex + 1}/${total}`;
		elements.questionText.textContent = question.question;
		elements.questionTags.textContent = question.tags.length > 0 ? `Tags: ${question.tags.join(', ')}` : 'Tags: N/A';

		const selected = getSelectedAnswerSet(currentIndex);
		const isMultiChoice = question.answer.length > 1;
		const inputType = isMultiChoice ? 'checkbox' : 'radio';

		elements.optionsForm.innerHTML = question.options
			.map((option) => {
				const checked = selected.has(option.id) ? 'checked' : '';
				return `
					<label class="option-item" for="opt-${question.id}-${option.id}">
						<input
							id="opt-${question.id}-${option.id}"
							type="${inputType}"
							name="question-${question.id}"
							value="${option.id}"
							${checked}
						>
						<span>${escapeHtml(option.text)}</span>
					</label>
				`;
			})
			.join('');

		elements.prevBtn.disabled = currentIndex === 0;
		elements.nextBtn.disabled = currentIndex >= total - 1;
		updateProgressAndCounter();
	}

	function stopTimer() {
		if (state.timerIntervalId) {
			clearInterval(state.timerIntervalId);
			state.timerIntervalId = null;
		}
	}

	function startTimer(minutes) {
		stopTimer();
		state.timerSecondsRemaining = Math.max(1, Math.floor(minutes * 60));
		elements.timer.textContent = formatTime(state.timerSecondsRemaining);

		state.timerIntervalId = setInterval(() => {
			state.timerSecondsRemaining -= 1;
			elements.timer.textContent = formatTime(Math.max(0, state.timerSecondsRemaining));

			if (state.timerSecondsRemaining <= 0) {
				stopTimer();
				submitQuiz(true);
			}
		}, 1000);
	}

	function areAnswersEquivalent(left, right) {
		if (left.length !== right.length) {
			return false;
		}

		for (let i = 0; i < left.length; i += 1) {
			if (left[i] !== right[i]) {
				return false;
			}
		}
		return true;
	}

	function evaluateQuiz() {
		const result = {
			totalQuestions: state.activeQuestions.length,
			correctCount: 0,
			scoredPoints: 0,
			maxPoints: 0,
			percentByPoints: 0,
			passed: false,
		};

		state.activeQuestions.forEach((question, index) => {
			const selected = normalizeAnswerIds(state.answers.get(index) || []);
			const correct = normalizeAnswerIds(question.answer || []);
			const isCorrect = areAnswersEquivalent(selected, correct);
			const score = Math.max(1, toNumber(question.score, 1));

			result.maxPoints += score;
			if (isCorrect) {
				result.correctCount += 1;
				result.scoredPoints += score;
			}
		});

		result.percentByPoints = result.maxPoints > 0
			? Number(((result.scoredPoints / result.maxPoints) * 100).toFixed(2))
			: 0;

		result.passed = result.percentByPoints >= state.activeConfig.passingScore;
		return result;
	}

	function showResult(result, timeOver = false) {
		togglePanel('result');
		const summary = timeOver
			? 'Het gio, he thong da nop bai tu dong.'
			: 'Ban da nop bai thanh cong.';
		setStatus(summary, timeOver ? 'warn' : 'ok');

		elements.resultScore.textContent = `${result.percentByPoints}%`;
		elements.resultPassThreshold.textContent = `${state.activeConfig.passingScore}%`;
		elements.resultCorrect.textContent = `${result.correctCount}/${result.totalQuestions}`;
		elements.resultStatus.textContent = result.passed ? 'Dat' : 'Chua dat';
		elements.resultStatus.classList.toggle('pass', result.passed);
		elements.resultStatus.classList.toggle('fail', !result.passed);
	}

	function persistCurrentAnswer() {
		if (!state.quizStarted) {
			return;
		}

		const question = state.activeQuestions[state.currentQuestionIndex];
		if (!question) {
			return;
		}

		const selected = [...elements.optionsForm.querySelectorAll('input:checked')]
			.map((input) => toNumber(input.value, -1))
			.filter((id) => id >= 0);

		if (selected.length === 0) {
			state.answers.delete(state.currentQuestionIndex);
		} else {
			state.answers.set(state.currentQuestionIndex, normalizeAnswerIds(selected));
		}
		updateProgressAndCounter();
	}

	async function startQuiz() {
		try {
			const config = state.configs[state.selectedConfigIndex];
			if (!config) {
				throw new Error('Khong tim thay cau hinh quiz.');
			}

			setStatus('Dang tai questions bank...', 'info');

			const allQuestions = await loadAllQuestions(config);
			const targetCount = Math.min(config.questions, allQuestions.length);
			const selected = pickQuestionsByCategory(allQuestions, config.categoryPercentage, targetCount);

			if (selected.length === 0) {
				throw new Error('Khong chon duoc cau hoi nao. Kiem tra categoryPercentage va tags.');
			}

			state.activeConfig = config;
			state.activeQuestions = shuffle(selected);
			state.currentQuestionIndex = 0;
			state.answers.clear();
			state.quizStarted = true;

			elements.quizTitle.textContent = config.quizName;
			elements.quizSubtitle.textContent = `Tong so ${state.activeQuestions.length} cau hoi, nguong dat ${config.passingScore}%.`;

			togglePanel('quiz');
			startTimer(config.duration);
			renderCurrentQuestion();

			setStatus('Dang lam bai. He thong tu luu lua chon tung cau.', 'ok');
		} catch (error) {
			setStatus(error instanceof Error ? error.message : 'Khong the bat dau quiz.', 'error');
		}
	}

	function submitQuiz(timeOver = false) {
		if (!state.quizStarted) {
			return;
		}

		persistCurrentAnswer();
		stopTimer();
		state.quizStarted = false;

		const result = evaluateQuiz();
		showResult(result, timeOver);
	}

	async function initializeConfig(reload = false) {
		try {
			setStatus('Dang nap cau hinh quiz...', 'info');
			const scriptPath = getConfigScriptPath();

			if (reload || state.configScriptPath !== scriptPath || !Array.isArray(window.quizzesConfig)) {
				window.quizzesConfig = undefined;
				await loadConfigScript(scriptPath);
				state.configScriptPath = scriptPath;
			}

			const rawConfigs = Array.isArray(window.quizzesConfig) ? window.quizzesConfig : [];
			const normalizedConfigs = rawConfigs.map((config, index) => normalizeConfig(config, index));

			if (normalizedConfigs.length === 0) {
				throw new Error('Khong tim thay quizzesConfig hop le trong file cau hinh.');
			}

			state.configs = normalizedConfigs;
			state.selectedConfigIndex = 0;

			renderConfigSelect();
			togglePanel('setup');
			setStatus('Da nap cau hinh thanh cong. Chon bo quiz de bat dau.', 'ok');
		} catch (error) {
			state.configs = [];
			renderConfigSelect();
			togglePanel('setup');
			setStatus(error instanceof Error ? error.message : 'Khong the nap cau hinh quiz.', 'error');
		}
	}

	function bindEvents() {
		elements.quizSelect.addEventListener('change', (event) => {
			state.selectedConfigIndex = toNumber(event.target.value, 0);
			updateSetupMetrics();
		});

		elements.startBtn.addEventListener('click', () => {
			startQuiz();
		});

		elements.reloadBtn.addEventListener('click', () => {
			initializeConfig(true);
		});

		elements.prevBtn.addEventListener('click', () => {
			persistCurrentAnswer();
			state.currentQuestionIndex = Math.max(0, state.currentQuestionIndex - 1);
			renderCurrentQuestion();
		});

		elements.nextBtn.addEventListener('click', () => {
			persistCurrentAnswer();
			state.currentQuestionIndex = Math.min(state.activeQuestions.length - 1, state.currentQuestionIndex + 1);
			renderCurrentQuestion();
		});

		elements.submitBtn.addEventListener('click', () => {
			const accepted = window.confirm('Ban chac chan muon nop bai?');
			if (accepted) {
				submitQuiz(false);
			}
		});

		elements.optionsForm.addEventListener('change', () => {
			persistCurrentAnswer();
		});

		elements.retryBtn.addEventListener('click', () => {
			if (state.activeConfig) {
				state.selectedConfigIndex = state.configs.findIndex((item) => item.quizName === state.activeConfig.quizName);
				if (state.selectedConfigIndex < 0) {
					state.selectedConfigIndex = 0;
				}
				startQuiz();
			}
		});

		elements.backBtn.addEventListener('click', () => {
			stopTimer();
			state.quizStarted = false;
			togglePanel('setup');
			setStatus('Moi chon bo quiz khac.', 'info');
		});
	}

	bindEvents();
	initializeConfig();
})();
