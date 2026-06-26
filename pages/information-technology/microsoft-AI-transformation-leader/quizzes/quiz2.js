(() => {
    const data = {
        questions: [
            {
                tags: ["Microsoft AI Transformation Leader", "Quiz 2"],
                question: "Which controls are essential in responsible AI governance?",
                options: [
                    { id: 1, text: "Bias and fairness evaluation" },
                    { id: 2, text: "Human oversight for high-impact decisions" },
                    { id: 3, text: "Model monitoring and incident response" },
                    { id: 4, text: "No audit trail to improve speed" }
                ],
                score: 10,
                answer: [1, 2, 3]
            },
            {
                tags: ["Microsoft AI Transformation Leader", "Quiz 2"],
                question: "Why is data classification important before connecting enterprise data to GenAI systems?",
                options: [
                    { id: 1, text: "It helps enforce access policies and protect sensitive information." },
                    { id: 2, text: "It guarantees better UI themes." },
                    { id: 3, text: "It avoids the need for identity management." },
                    { id: 4, text: "It removes legal obligations." }
                ],
                score: 10,
                answer: [1]
            },
            {
                tags: ["Microsoft AI Transformation Leader", "Quiz 2"],
                question: "Which MLOps practices support reliable AI in production?",
                options: [
                    { id: 1, text: "Versioning data, models, and prompts" },
                    { id: 2, text: "Automated testing and deployment gates" },
                    { id: 3, text: "Continuous monitoring with rollback strategy" },
                    { id: 4, text: "Manual hotfixes without documentation" }
                ],
                score: 10,
                answer: [1, 2, 3]
            },
            {
                tags: ["Microsoft AI Transformation Leader", "Quiz 2"],
                question: "What is the key purpose of grounding and retrieval in enterprise GenAI apps?",
                options: [
                    { id: 1, text: "To reduce hallucinations by using trusted organizational content." },
                    { id: 2, text: "To eliminate source citation." },
                    { id: 3, text: "To bypass access control checks." },
                    { id: 4, text: "To avoid maintaining knowledge repositories." }
                ],
                score: 10,
                answer: [1]
            },
            {
                tags: ["Microsoft AI Transformation Leader", "Quiz 2"],
                question: "Which metrics should be monitored for an AI assistant used by customer support?",
                options: [
                    { id: 1, text: "Resolution time and first-contact resolution" },
                    { id: 2, text: "Answer quality and groundedness" },
                    { id: 3, text: "Escalation and policy violation rate" },
                    { id: 4, text: "Only number of generated tokens" }
                ],
                score: 10,
                answer: [1, 2, 3]
            },
            {
                tags: ["Microsoft AI Transformation Leader", "Quiz 2"],
                question: "What is the best response when model drift is detected?",
                options: [
                    { id: 1, text: "Investigate root cause and retrain or adjust pipeline with controls." },
                    { id: 2, text: "Ignore it unless users complain publicly." },
                    { id: 3, text: "Disable monitoring dashboards permanently." },
                    { id: 4, text: "Increase randomness for all outputs." }
                ],
                score: 10,
                answer: [1]
            },
            {
                tags: ["Microsoft AI Transformation Leader", "Quiz 2"],
                question: "How should teams handle prompt and policy updates in a regulated environment?",
                options: [
                    { id: 1, text: "Use change management with review, testing, and approval logs." },
                    { id: 2, text: "Apply production changes directly without tracking." },
                    { id: 3, text: "Skip stakeholder communication." },
                    { id: 4, text: "Avoid documenting rationale." }
                ],
                score: 10,
                answer: [1]
            },
            {
                tags: ["Microsoft AI Transformation Leader", "Quiz 2"],
                question: "Which security practices are relevant for enterprise AI workloads?",
                options: [
                    { id: 1, text: "Least-privilege access" },
                    { id: 2, text: "Encryption in transit and at rest" },
                    { id: 3, text: "Secrets management and key rotation" },
                    { id: 4, text: "Shared admin account for convenience" }
                ],
                score: 10,
                answer: [1, 2, 3]
            }
        ]
    };

    window.quiz2Data = data;
})();
