import React, { useState } from 'react';
import "../styles/achievements.css"

const Achievements = () => {
  const [selectedDesign, setSelectedDesign] = useState('table');
  const [expandedPlayer, setExpandedPlayer] = useState(null);

  const players = [
    { id: 1, name: "Adira Sandeep Bhagat", rankings: [
      { category: "U10", rank: 2, state: "MAHA", color: "bg-yellow-500" },
      { category: "U12", rank: 10, state: "MAHA", color: "bg-orange-500" }
    ]},
    { id: 2, name: "Sejal Arun Jadhav", rankings: [
      { category: "U10", rank: 3, state: "MAHA", color: "bg-yellow-400" },
      { category: "U12", rank: 9, state: "MAHA", color: "bg-blue-500" }
    ]},
    { id: 3, name: "Tasmai Nagesh Pohakar", rankings: [
      { category: "U10", rank: 5, state: "MAHA", color: "bg-orange-400" },
      { category: "U12", rank: 11, state: "MAHA", color: "bg-green-500" }
    ]},
  ];

  const getRankIcon = (rank) => {
    if (rank === 1) return <span className="rank-icon gold">🏆</span>;
    if (rank === 2) return <span className="rank-icon silver">🥈</span>;
    if (rank === 3) return <span className="rank-icon bronze">🥉</span>;
    return <span className="rank-icon star">⭐</span>;
  };

//   const CardDesign = () => (
//     <div className="card-grid">
//       {players.map((player) => (
//         <div key={player.id} className="player-card">
//           <div className="card-header">
//             <h3 className="card-title">
//               <span className="icon">🏆</span>
//               {player.name}
//             </h3>
//           </div>
//           <div className="card-content">
//             {player.rankings.map((ranking, idx) => (
//               <div key={idx} className="ranking-item">
//                 <div className="ranking-info">
//                   {getRankIcon(ranking.rank)}
//                   <div>
//                     <span className="ranking-category">{ranking.category}</span>
//                     <p className="ranking-state">{ranking.state} State</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <div className="rank-badge">
//                     Rank {ranking.rank}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );

  const TableDesign = () => (
    <div className="table-container">
      <div className="table-header">
        <h2 className="table-title">
          <span className="icon">🏆</span>
          Player Rankings
        </h2>
      </div>
      <div className="table-wrapper">
        <table className="rankings-table">
          <thead>
            <tr>
              <th className="table-th">Player</th>
              <th className="table-th">Category</th>
              <th className="table-th">State</th>
              <th className="table-th">Rank</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => 
              player.rankings.map((ranking, idx) => (
                <tr key={`${player.id}-${idx}`}>
                  <td className="table-td">
                    <div className="player-name-cell">
                      {getRankIcon(ranking.rank)}
                      <span className="player-name">{player.name}</span>
                    </div>
                  </td>
                  <td className="table-td">
                    <span className="category-badge">
                      {ranking.category}
                    </span>
                  </td>
                  <td className="table-td state-text">{ranking.state}</td>
                  <td className="table-td">
                    <div className="table-rank-badge">
                      #{ranking.rank}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  const ExpandableDesign = () => (
    <div className="expandable-list">
      {players.map((player) => (
        <div key={player.id} className="expandable-card">
          <div 
            className="expandable-header"
            onClick={() => setExpandedPlayer(expandedPlayer === player.id ? null : player.id)}
          >
            <div className="expandable-header-content">
              <h3 className="expandable-player-name">
                <span className="icon">🏆</span>
                {player.name}
              </h3>
              <div className="expandable-meta">
                <span className="category-count">
                  {player.rankings.length} categories
                </span>
                <span className="expand-toggle-icon">
                  {expandedPlayer === player.id ? '▲' : '▼'}
                </span>
              </div>
            </div>
          </div>
          {expandedPlayer === player.id && (
            <div className="expandable-content">
              {player.rankings.map((ranking, idx) => (
                <div key={idx} className="expandable-ranking-item">
                  <div className="expandable-ranking-info">
                    {getRankIcon(ranking.rank)}
                    <div>
                      <span className="expandable-category">{ranking.category}</span>
                      <p className="expandable-state">{ranking.state} State Championship</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="expandable-rank-badge">
                      Rank {ranking.rank}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="achievements-container">
      <div className="section-header">
        
        {/* Design Selector */}
        <div className="design-selector">
          {/* <button
            onClick={() => setSelectedDesign('cards')}
            className={`design-button ${selectedDesign === 'cards' ? 'active' : ''}`}
          >
            Card Design
          </button> */}
          <button
            onClick={() => setSelectedDesign('table')}
            className={`design-button ${selectedDesign === 'table' ? 'active' : ''}`}
          >
            Table Design
          </button>
          <button
            onClick={() => setSelectedDesign('expandable')}
            className={`design-button ${selectedDesign === 'expandable' ? 'active' : ''}`}
          >
            Expandable Design
          </button>
        </div>
      </div>

      {/* {selectedDesign === 'cards' && <CardDesign />} */}
      {selectedDesign === 'table' && <TableDesign />}
      {selectedDesign === 'expandable' && <ExpandableDesign />}
    </div>
  );
};

export default Achievements;