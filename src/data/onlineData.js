export const onlinePrizes = [
  {
    category: "5 Winners",
    amount: "₹10,000",
    total: "₹50,000",
    badge: "🥇 Winners",
    color: "gold",
  },
  {
    category: "5 Runner-Ups",
    amount: "₹6,000",
    total: "₹30,000",
    badge: "🥈 Runner-Ups",
    color: "accent",
  },
  {
    category: "5 Consolation Prizes",
    amount: "₹4,000",
    total: "₹20,000",
    badge: "🥉 Consolation",
    color: "primary",
  },
];

export const scoringSystem = [
  { particular: "Correct Answer", details: "+4 marks for every correct answer", points: "+4", color: "green" },
  { particular: "Incorrect Answer", details: "−1 mark for every incorrect answer", points: "−1", color: "red" },
  { particular: "Unattempted Question", details: "0 marks", points: "0", color: "gray" },
];

export const tieBreakerCriteria = [
  {
    step: "1",
    title: "Total Marks",
    desc: "The participant with the Highest overall score/marks wins.",
  },
  {
    step: "2",
    title: "Least Negative Marks",
    desc: "The participant with fewer total Negative marks deducted wins.",
  },
  {
    step: "3",
    title: "Timing",
    desc: "The participant with the Fastest completion time wins.",
  },
];

export const onlineRules = [
  "Each participant must attempt the quiz individually without any external help (books, internet, or peers).",
  "Total 50 questions per set with a duration of exactly 30 minutes.",
  "Time-based evaluation: Try to complete the quiz as fast as possible for a higher qualification advantage.",
  "Marking Scheme: +4 marks for every correct answer, −1 mark for every incorrect answer, 0 marks for unattempted questions.",
  "Tie-Breaker Priority: (1) Total Marks → (2) Least Negative Marks → (3) Fastest Completion Time.",
  "Switching browser tabs or minimizing the quiz window during the test may lead to disqualification.",
  "The final decision regarding the evaluation and selection of winners shall rest solely with the Organising Team.",
];

export const onlineEligibility = [
  "Exclusively open to students of Classes 11th and 12th (any stream: Science, Commerce, or Humanities)",
  "Individual participation — no team formation required for the online round",
  "Access & Login via official KIET Quiz Portal (quiz.kiet.edu)",
  "Mock Test: 1st – 2nd October 2026",
  "National Online Quiz Date: 3rd October 2026",
];

export const onlineStructure = [
  "Total Questions: 50 MCQs per set",
  "Duration: 30 Minutes (Time-based assessment)",
  "Marking Scheme: +4 for Correct, −1 for Incorrect, 0 for Unattempted",
  "E-Certificates: Provided to all participants",
  "Offline Final Qualifier: Top 3 best-performing students per school qualify for On-Campus Finale (Mid-October 2026 Tentative)",
];
