import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "1. What is React.js?",
    option: ["Library", "Framework", "Programming Language", "Database"],
    answer: "Library",
  },
  {
    question: "2. Who created React.js?",
    option: ["Jordan Walke", "Mark Zuckerberg", "Dan Abramov", "Brendan Eich"],
    answer: "Jordan Walke",
  },
  {
    question: "3. Which company developed React.js?",
    option: ["Google", "Facebook", "Microsoft", "Twitter"],
    answer: "Facebook",
  },
  {
    question: "4. In which year was React.js first released?",
    option: ["2010", "2011", "2013", "2015"],
    answer: "2013",
  },
  {
    question: "5. What is the purpose of React.js?",
    option: [
      "To build user interfaces",
      "To connect databases",
      "To design backend APIs",
      "To manage servers",
    ],
    answer: "To build user interfaces",
  },
  {
    question: "6. What is JSX in React?",
    option: [
      "A templating engine",
      "A syntax extension for JavaScript",
      "A type of CSS framework",
      "A database query language",
    ],
    answer: "A syntax extension for JavaScript",
  },
  {
    question: "7. Which hook is used to handle state in a functional component?",
    option: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState",
  },
  {
    question: "8. What is the virtual DOM in React?",
    option: [
      "A copy of the real DOM kept in memory",
      "A browser feature",
      "A JSON database",
      "A component storage",
    ],
    answer: "A copy of the real DOM kept in memory",
  },
  {
    question: "9. Which method is used to pass data from parent to child components?",
    option: ["Props", "State", "Context", "Hooks"],
    answer: "Props",
  },
  {
    question: "10. Which command is used to create a new React app?",
    option: [
      "npm start react-app",
      "npx create-react-app appname",
      "npm run react appname",
      "node create appname",
    ],
    answer: "npx create-react-app appname",
  },
];

function Quiz({ setscore }) {
  const [questionIdx, setQuestionIdx] = useState(0);
  const navigator = useNavigate();

  const handleAnswer = (selectedAns) => {
    const isCorrect = selectedAns === questions[questionIdx].answer;
    if (isCorrect) setscore((prev) => prev + 1);

    if (questionIdx < questions.length - 1) {
      setQuestionIdx((prev) => prev + 1);
    } else {
      navigator("/result");
    }
  };

  return (
    <div className="quiz-bg min-h-screen flex flex-col justify-center items-center text-center text-white p-4">
      <h1 className="text-3xl font-bold">Welcome to Quiz Page</h1>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        {questionIdx + 1}. {questions[questionIdx].question}
      </h2>

      <div className="flex flex-col gap-3 w-full max-w-md">
        {questions[questionIdx].option.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(opt)}
            className="bg-white text-gray-800 py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            {opt}
          </button>
        ))}
      </div>

      <a href="/home">
        <button className="bg-green-500 text-white px-4 py-2 rounded mt-6 hover:bg-green-600 transition">
          Back to Home
        </button>
      </a>
    </div>
  );
}

export default Quiz;
