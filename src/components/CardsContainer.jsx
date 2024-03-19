/* eslint-disable react/prop-types */
import React from "react";

function CardsContainer({ side, bleed, children }) {
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

export default CardsContainer;