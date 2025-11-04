

const Result = ({ user, score }) => {
  const totalQuestions = 10;
  const percentage = (score / totalQuestions) * 100;

  // Feedback message based on score
  let feedback = "";
  if (score === totalQuestions) {
    feedback = "🔥 Excellent! You’re a React Pro!";
  } else if (score >= 7) {
    feedback = "💪 Great job! You really know React!";
  } else if (score >= 4) {
    feedback = "🙂 Not bad! Keep learning React!";
  } else {
    feedback = "😅 Don’t worry, try again and you’ll improve!";
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white animate-fade-in">

      <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-8 w-[90%] max-w-md text-center transform transition-all duration-700 hover:scale-105 hover:shadow-3xl">

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 animate-bounce">
          Quiz Completed Successfully 🎉
        </h1>

        {/* Score */}
        <h2 className="text-2xl font-semibold mb-2">
          Hello <span className="text-blue-600">{user}</span>, your score is{" "}
          <span className="text-green-600 font-bold">{score}</span> / {totalQuestions}.
        </h2>

        {/* Percentage */}
        <p className="text-lg mb-4 text-gray-700">
          You got <span className="font-semibold text-blue-600">{percentage.toFixed(0)}%</span> correct answers.
        </p>

        {/* Progress bar */}
        <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
          <div
            className="bg-green-500 h-4 rounded-full transition-all duration-700"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        {/* Feedback message */}
        <p className="text-xl font-medium mb-6 text-gray-800">{feedback}</p>

        {/* Buttons */}
        {/* <div className="flex flex-col gap-4">
          <a href="/quiz">
            <button className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
              🔁 Play Again
            </button>
          </a>

          <a href="/home">
            <button className="w-full bg-blue-500 hover:bg-blue-700
             text-white font-bold py-2 px-6 rounded transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
              🏠 Go to Home
            </button>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Result;

