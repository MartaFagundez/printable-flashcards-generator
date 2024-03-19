import React from 'react';

export default function CardTwin({gradient}) {
  return (
    <div className="card-twin">
      <div className={`card-twin-back`}>
        <p>A</p>
      </div>
      <div className={`card-twin-front ${gradient}`}>
        <p>Q</p>
      </div>
    </div>
  )
}
