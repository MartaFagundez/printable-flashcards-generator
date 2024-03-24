/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

import { useFlashcardsContext } from "../contexts/FlashcardsContext";

export default function CardFront({ id="", category="", question="", gradientStyle="gradient-default", colorStyle="color-default" }) {
  const {store: {hideId}} = useFlashcardsContext();

  let fontSizeStyle = "";
  if (question.length >= 50 && question.length < 70) {
      fontSizeStyle = "md";
  }
  else if (question.length >= 70 && question.length < 85) {
      fontSizeStyle = "lg";
  }
  else if (question.length >= 85 && question.length < 100) {
      fontSizeStyle = "xl";
  }
  else if (question.length >= 100) {
      fontSizeStyle = "xxl";
  }


  return (
    <div className={`card-wrapper ${colorStyle === "color-special-card" ? "color-special-card" : ""}`}>
      {/* Marks Container */}
      <div className="marks-wrapper">
        <div className="left-marks-container">
          <div className="left-marks"></div>
        </div>
        <div className="center-marks-container">
          <div className="center-marks"></div>
          <div className="center-marks"></div>
        </div>
        <div className="right-marks-container">
          <div className="left-marks"></div>
        </div>
      </div>

      {/* Card */}
      <div className={`bleed-area ${gradientStyle}`}>
        <div className="flashcard front">
          {
            category && 
            <p className="category">{category}</p>
          }
          <div className="question-wrapper">
            <p className={`question ${fontSizeStyle}`}>{question}</p>
          </div>

          {
            !hideId &&
            <div className="id-wrapper">
              <p className={`id ${colorStyle}`}>{id.toString().padStart(2,"0")}</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

CardFront.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  question: PropTypes.string.isRequired,
  gradientStyle: PropTypes.string,
  colorStyle: PropTypes.string
}