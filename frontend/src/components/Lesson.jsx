import { useState } from 'react';

export default function Lesson({ lesson, onDone }) {
  const [stage, setStage] = useState(lesson.teach ? 'teach' : 'quiz');
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);

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
        setStage('review');
      }
    }, 900);
  }

  if (stage === 'teach') {
    return (
      <div className="teach">
        <h2>{lesson.title}</h2>
        <p className="teach-intro">{lesson.teach.intro}</p>
        <ul className="teach-examples">
          {lesson.teach.examples.map((ex, i) => <li key={i}>{ex}</li>)}
        </ul>
        <button className="back-btn" onClick={() => setStage('quiz')}>Start Practice</button>
      </div>
    );
  }

  if (stage === 'review') {
    return (
      <div className="lesson-done">
        <div className="sticker">🌟</div>
        <h2>Great job!</h2>
        <p>You got {correctCount} out of {lesson.questions.length} right!</p>
        {lesson.review && <p className="review-text">{lesson.review}</p>}
        <button className="back-btn" onClick={onDone}>Back to Lessons</button>
      </div>
    );
  }

  return (
    <div className="lesson">
      <p className="progress">Question {index + 1} of {lesson.questions.length}</p>
      <h2>{question.prompt}</h2>
      <div className="options">
        {question.options.map(opt => (
          <button key={opt} className="option-btn" onClick={() => handleAnswer(opt)}>{opt}</button>
        ))}
      </div>
      {feedback === 'correct' && <p className="feedback correct">✅ Correct!</p>}
      {feedback === 'wrong' && <p className="feedback wrong">Try again next time!</p>}
      <button className="back-btn" onClick={onDone}>Back to Lessons</button>
    </div>
  );
}
