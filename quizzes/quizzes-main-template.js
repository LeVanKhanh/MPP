window.quizzesConfig = [
    {
        duration: 45,
        questions: 40,
        passingScore: 70,
        quizName: "Quiz Name Here",
        questionsBank: [
            {
                script: "domain1.js",
                globalVar: "domain1Data"
            }
        ],
        categoryPercentage: []
    }
];

// Optional: define exam configurations for Exam mode.
// Questions from all questionsBank entries are merged, then sampled by categoryPercentage.
// If window.quizzesExamConfig is not defined, the system auto-generates a Full Exam
// that merges all question banks from window.quizzesConfig.
window.quizzesExamConfig = [
    {
        duration: 60,
        questions: 40,
        passingScore: 70,
        quizName: "Full Exam Simulation",
        questionsBank: [
            { script: "domain1.js", globalVar: "domain1Data" },
            { script: "domain2.js", globalVar: "domain2Data" }
        ],
        categoryPercentage: [
            { tag: "Domain 1 Tag", percentage: 50 },
            { tag: "Domain 2 Tag", percentage: 50 }
        ]
    }
];
