export default function SubjectHome({ title, items, onSelectItem, onBack }) {
  return (
    <div className="subject-home">
      <h1>{title}</h1>
      <div className="lesson-list">
        {items.map(item => (
          <button key={item.id} className="lesson-card" onClick={() => onSelectItem(item.id)}>
            {item.title}
          </button>
        ))}
      </div>
      <button className="back-btn" onClick={onBack}>Back to Home</button>
    </div>
  );
}
