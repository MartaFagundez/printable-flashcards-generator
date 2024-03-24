import React from 'react';
import PropTypes from "prop-types";

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

CardTwin.propTypes = {
  gradient: PropTypes.string
}
