const Results = ({ data, onRestart }) => {
    return (
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-400">Test Results</h2>
        
        <div className="mb-8">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <div className="text-sm text-gray-400">Score</div>
              <div className="text-2xl font-bold">{data.score}%</div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <div className="text-sm text-gray-400">Correct</div>
              <div className="text-2xl font-bold text-green-400">{data.correctAnswers}</div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <div className="text-sm text-gray-400">Incorrect</div>
              <div className="text-2xl font-bold text-red-400">{data.incorrectAnswers}</div>
            </div>
          </div>
        </div>
  
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 border-b border-gray-700 pb-2">Feedback</h3>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="whitespace-pre-line">{data.feedback}</p>
          </div>
        </div>
  
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 border-b border-gray-700 pb-2">Question Analysis</h3>
          <div className="space-y-4">
            {data.questionAnalysis.map((item, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-medium">{item.question}</div>
                  <span className={`px-2 py-1 rounded text-xs ${item.correct ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
                    {item.correct ? 'Correct' : 'Incorrect'}
                  </span>
                </div>
                <div className="text-sm text-gray-400 mb-1">Your answer: {item.userAnswer}</div>
                {!item.correct && (
                  <div className="text-sm text-gray-400">Correct answer: {item.correctAnswer}</div>
                )}
                <div className="mt-2 text-sm">
                  <div className="text-blue-300 font-medium">Explanation:</div>
                  <p className="whitespace-pre-line">{item.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <button
          onClick={onRestart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
        >
          Take Another Test
        </button>
      </div>
    )
  }
  
  export default Results