/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

export default function CardsContainer({ side, bleed=false, children }) {
  const firstRowCards = children.slice(0, 4); // Take the first 4 components
  const secondRowCards = children.slice(4); // Take the remaining components

  return (
    <div className={`cards-container ${side} ${bleed ? "with-bleed" : ""}` }>
      <div className="cards-row">
        {firstRowCards}
      </div>
      <div className="cards-row">
        {secondRowCards}
      </div>
    </div>
  );
}

CardsContainer.propTypes = {
  side: PropTypes.string.isRequired,
  bleed: PropTypes.bool,
  children: PropTypes.node.isRequired
}