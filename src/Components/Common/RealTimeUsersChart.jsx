import React, { useState, useEffect } from 'react';

const RealTimeUsersChart = ({ initialData = 15, maxHistory = 20 }) => {
  // State pour les données du graphique
  const [data, setData] = useState(Array(maxHistory).fill(0).map((_, i) => ({
    time: new Date(Date.now() - (maxHistory - i) * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'}),
    value: Math.floor(Math.random() * 10) + initialData - 5
  })));

  // Simulation d'activité utilisateur en temps réel avec un intervalle
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData];
        newData.shift(); // Retire la première entrée
        
        // Ajoute une nouvelle valeur avec un peu de variation aléatoire
        const lastValue = prevData[prevData.length - 1].value;
        const newValue = Math.max(0, Math.min(100, lastValue + (Math.random() * 6 - 3)));
        
        newData.push({
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'}),
          value: Math.round(newValue)
        });
        
        return newData;
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Calculer les dimensions et l'échelle du graphique
  const chartHeight = 200;
  const chartWidth = '100%';
  const maxValue = Math.max(...data.map(d => d.value), 20);
  
  return (
    <div className="card">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Activité Utilisateur en Temps Réel</h5>
        <span className="badge bg-light text-primary">{data[data.length - 1].value} utilisateurs actifs</span>
      </div>
      <div className="card-body">
        <div style={{ position: 'relative', height: `${chartHeight}px`, width: chartWidth }}>
          {/* Lignes horizontales de référence */}
          {[0.25, 0.5, 0.75].map(level => (
            <div 
              key={level}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: `${chartHeight - (level * chartHeight)}px`,
                borderBottom: '1px dashed #ccc',
                zIndex: 1
              }}
            />
          ))}
          
          {/* Graphique en ligne */}
          <svg
            viewBox={`0 0 ${maxHistory} ${maxValue}`}
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 2
            }}
          >
            {/* Ligne du graphique */}
            <path
              d={data.map((point, i) => `${i === 0 ? 'M' : 'L'} ${i / (data.length - 1) * maxHistory} ${maxValue - point.value}`).join(' ')}
              stroke="#0d6efd"
              strokeWidth="2"
              fill="none"
            />
            
            {/* Zone remplie sous la ligne */}
            <path
              d={`
                ${data.map((point, i) => `${i === 0 ? 'M' : 'L'} ${i / (data.length - 1) * maxHistory} ${maxValue - point.value}`).join(' ')} 
                L ${maxHistory} ${maxValue} 
                L 0 ${maxValue} 
                Z
              `}
              fill="rgba(13, 110, 253, 0.1)"
            />
            
            {/* Points sur la ligne */}
            {data.map((point, i) => (
              <circle
                key={i}
                cx={i / (data.length - 1) * maxHistory}
                cy={maxValue - point.value}
                r="0.5"
                fill="#0d6efd"
              />
            ))}
          </svg>
        </div>
        
        <div className="d-flex justify-content-between mt-3 px-2">
          {data.filter((_, i) => i % 4 === 0).map((point, i) => (
            <div key={i} style={{ fontSize: '0.75rem', textAlign: 'center' }}>
              {point.time}
            </div>
          ))}
        </div>
        
        <div className="mt-3">
          <div className="d-flex justify-content-between mb-2">
            <small>0 utilisateurs</small>
            <small>{maxValue} utilisateurs</small>
          </div>
          <div className="progress" style={{ height: '6px' }}>
            <div 
              className="progress-bar bg-primary" 
              role="progressbar" 
              style={{ width: `${(data[data.length - 1].value / maxValue) * 100}%` }} 
              aria-valuenow={data[data.length - 1].value} 
              aria-valuemin="0" 
              aria-valuemax={maxValue}
            ></div>
          </div>
        </div>
      </div>
      <div className="card-footer bg-light">
        <small className="text-muted">Les données sont mises à jour toutes les 2 secondes (simulation)</small>
      </div>
    </div>
  );
};

export default RealTimeUsersChart;
