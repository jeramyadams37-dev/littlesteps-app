import { useState } from 'react';
import Home from './components/Home';
import SubjectHome from './components/SubjectHome';
import Lesson from './components/Lesson';
import Scenario from './components/Scenario';
import literacyData from './data/literacy.json';
import mathData from './data/math.json';
import scienceData from './data/science.json';
import mannersData from './data/manners.json';
import './App.css';

const subjects = {
  literacy: { title: 'Reading', type: 'quiz', items: literacyData.lessons },
  math: { title: 'Math', type: 'quiz', items: mathData.lessons },
  science: { title: 'Science', type: 'quiz', items: scienceData.lessons },
  manners: { title: 'Kindness', type: 'scenario', items: mannersData.scenarios }
};

export default function App() {
  const [screen, setScreen] = useState({ view: 'home' });

  function goHome() { setScreen({ view: 'home' }); }
  function openSubject(subjectId) { setScreen({ view: 'subject', subject: subjectId }); }
  function openItem(subjectId, itemId) { setScreen({ view: 'item', subject: subjectId, itemId }); }

  if (screen.view === 'home') {
    return <Home onSelect={openSubject} />;
  }

  const subject = subjects[screen.subject];

  if (screen.view === 'subject') {
    return (
      <SubjectHome
        title={subject.title}
        items={subject.items}
        onSelectItem={(itemId) => openItem(screen.subject, itemId)}
        onBack={goHome}
      />
    );
  }

  if (screen.view === 'item') {
    const item = subject.items.find(i => i.id === screen.itemId);
    const backToList = () => openSubject(screen.subject);
    return subject.type === 'scenario'
      ? <Scenario scenario={item} onDone={backToList} />
      : <Lesson lesson={item} onDone={backToList} />;
  }

  return null;
}
