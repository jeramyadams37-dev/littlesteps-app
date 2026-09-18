import React, { useState } from 'react';
import illustrations from './Illustrations';
import { categories, workshops } from './workshopData';

export default function WorkshopDashboard() {
  const [activeCategory, setActiveCategory] = useState('reading');
  const [activeLearner, setActiveLearner] = useState('Ilah Hugh');

  // Roster state to handle multiple profiles 
  const learners = [
    { id: 1, name: 'Ilah Hugh', avatar: '🌱', color: '#FF6B6B' },
    { id: 2, name: 'Learner 2', avatar: '⭐', color: '#4ECDC4' },
    { id: 3, name: 'Learner 3', avatar: '🚀', color: '#FFD93D' },
    { id: 4, name: 'Learner 4', avatar: '🎨', color: '#95E1D3' }
  ];

  const currentCategory = categories.find(c => c.id === activeCategory);
  const visibleWorkshops = workshops.filter(w => w.category === activeCategory);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      
      {/* Header & Profile Selector */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ margin: 0, color: '#333' }}>Learning Hub</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          {learners.map(learner => (
            <button
              key={learner.id}
              onClick={() => setActiveLearner(learner.name)}
              style={{
                background: activeLearner === learner.name ? learner.color : '#f0f0f0',
                color: activeLearner === learner.name ? '#fff' : '#666',
                border: 'none',
                borderRadius: '20px',
                padding: '8px 16px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.2s'
              }}
            >
              {learner.avatar} {learner.name}
            </button>
          ))}
        </div>
      </header>

      {/* Category Navigation */}
      <nav style={{ display: 'flex', gap: '15px', marginBottom: '30px', overflowX: 'auto', paddingBottom: '10px' }}>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            style={{
              padding: '12px 24px',
              border: `2px solid ${category.color}`,
              borderRadius: '12px',
              background: activeCategory === category.id ? category.color : 'white',
              color: activeCategory === category.id ? 'white' : category.color,
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '16px',
              whiteSpace: 'nowrap'
            }}
          >
            {category.title}
          </button>
        ))}
      </nav>

      {/* Workshop Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '24px' 
      }}>
        {visibleWorkshops.map(workshop => {
          const Illustration = illustrations[workshop.key];
          
          return (
            <div 
              key={workshop.id}
              style={{
                border: '1px solid #eee',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'white',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ background: currentCategory.bgColor, padding: '20px' }}>
                {Illustration ? <Illustration /> : <div style={{ height: '150px' }} />}
              </div>
              
              <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, color: '#333', fontSize: '18px' }}>{workshop.title}</h3>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%', 
                  background: currentCategory.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: currentCategory.color
                }}>
                  ➔
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
