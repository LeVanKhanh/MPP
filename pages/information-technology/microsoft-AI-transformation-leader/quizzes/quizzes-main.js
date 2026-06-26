window.quizzesConfig = [
    {
        duration: 30,
        questions: 40,
        passingScore: 70,
        quizName: "Microsoft AI Transformation Leader",   
        questionsBank: [
            {
                script: "quiz1.js",
                globalVar: "quiz1Data"
            },
            {
                script: "quiz2.js",
                globalVar: "quiz2Data"
            },
        ],
        categoryPercentage: [
            {
                tag: 'Quiz 1',
                percentage: 50
            },
            {
                tag: 'Quiz 2',
                percentage: 50
            }
        ]
    }
];