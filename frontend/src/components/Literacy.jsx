import { useState } from 'react';
import lesson from '../data/literacy.json';

export default function Literacy({ onDone }) {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = lesson.questions[index];

  function handleAnswer(option) {
    if (feedback) return;
    const isCorrect = option === question.answer;
    setFeedback(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) setCorrectCount(c => c + 1);

    setTimeout(() => {
      setFeedback(null);
      if (index + 1 < lesson.questions.length) {
        setIndex(i => i + 1);
      } else {
        setFinished(true);
      }
    }, 900);
  }

  if (finished) {
    return (
      <div className="lesson-done">
        <div className="sticker">🌟</div>
        <h2>Great job!</h2>
        <p>You got {correctCount} out of {lesson.questions.length} right!</p>
        <button className="back-btn" onClick={onDone}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="lesson">
      <p className="progress">Question {index + 1} of {lesson.questions.length}</p>
      <h2>{question.prompt}</h2>
      <div className="options">
        {question.options.map(opt => (
          <button
            key={opt}
            className="option-btn"
            onClick={() => handleAnswer(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
      {feedback === 'correct' && <p className="feedback correct">✅ Correct!</p>}
      {feedback === 'wrong' && <p className="feedback wrong">Try again next time!</p>}
      <button className="back-btn" onClick={onDone}>Back to Home</button>
    </div>
  );
}
