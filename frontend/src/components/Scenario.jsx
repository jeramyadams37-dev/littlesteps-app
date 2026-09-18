import { useState } from 'react';

export default function Scenario({ scenario, onDone }) {
  const [choiceFeedback, setChoiceFeedback] = useState(null);
  const [showDiscussion, setShowDiscussion] = useState(false);

  if (showDiscussion) {
    return (
      <div className="lesson-done">
        <div className="sticker">🤝</div>
        <h2>Talk About It</h2>
        <p>{scenario.discussion}</p>
        <button className="back-btn" onClick={onDone}>Back to Lessons</button>
      </div>
    );
  }

  return (
    <div className="lesson">
      <h2>{scenario.title}</h2>
      <p>{scenario.prompt}</p>
      {!choiceFeedback && (
        <div className="options">
          {scenario.choices.map(choice => (
            <button key={choice.text} className="option-btn" onClick={() => setChoiceFeedback(choice)}>
              {choice.text}
            </button>
          ))}
        </div>
      )}
      {choiceFeedback && (
        <div>
          <p className={`feedback ${choiceFeedback.correct ? 'correct' : 'wrong'}`}>{choiceFeedback.feedback}</p>
          <button className="back-btn" onClick={() => setShowDiscussion(true)}>Continue</button>
        </div>
      )}
    </div>
  );
}
