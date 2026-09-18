const subjects = [
  { id: 'literacy', label: 'Reading', emoji: '📚', color: '#FF6B6B' },
  { id: 'math', label: 'Math', emoji: '🔢', color: '#4ECDC4' },
  { id: 'science', label: 'Science', emoji: '🔬', color: '#FFD93D' },
  { id: 'manners', label: 'Kindness', emoji: '🤝', color: '#95E1D3' }
];

export default function Home({ onSelect }) {
  return (
    <div className="home">
      <h1>LittleSteps</h1>
      <div className="tiles">
        {subjects.map(s => (
          <button
            key={s.id}
            className="tile"
            style={{ backgroundColor: s.color }}
            onClick={() => onSelect(s.id)}
          >
            <span className="tile-emoji">{s.emoji}</span>
            <span className="tile-label">{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
