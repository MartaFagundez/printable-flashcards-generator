import React, {useState} from "react";

import { useFlashcardsContext } from "../contexts/FlashcardsContext.jsx";
import { colorStylesList } from "../utils/colorStyles.js";

import SettingsPanel from "../components/SettingsPanel.jsx";
import SettingsButton from "../components/SettingsButton.jsx";
import CardsContainer from "../components/CardsContainer.jsx";
import CardFront from "../components/CardFront.jsx";
import CardBack from "../components/CardBack.jsx";
import InfoModal from "../components/InfoModal";

export default function Editor() {
  const {store: {flashcardsList, categoriesList, bleed}} = useFlashcardsContext();
  const [showModal, setShowModal] = useState(false);

  /*
  Initialize two containers to place the card components inside.
  The front component of the cards will be placed in the first container 
  and the back component in the second container.
  */
  const containers = [[], []];
  let currentFrontContainerIndex = 0;
  const maxCardsPerContainer = 8;

  if (flashcardsList.length > 0) {
    flashcardsList.forEach((flashcard, index) => {
      const { id, question, answer, category_name, qr_url } = flashcard;
      const categoryStyle = categoriesList[category_name ? category_name : "none"];
      const { colorStyle, gradientStyle } = colorStylesList[categoryStyle];

      const front = (
        <CardFront
          key={`front-${index}`}
          id={ id === undefined ? index + 1 : id}
          category={category_name}
          question={question}
          colorStyle={colorStyle}
          gradientStyle={gradientStyle}
        />
      );

      const back = (
        <CardBack
          key={`back-${index}`}
          id={ id === undefined ? index + 1 : id}
          answer={answer}
          qrUrl={qr_url}
          colorStyle={colorStyle}
          gradientStyle={gradientStyle}
        />
      );

      containers[currentFrontContainerIndex].push(front);
      containers[currentFrontContainerIndex + 1].push(back); // Add the back component of the card to the next container

      if (
        (index + 1) % maxCardsPerContainer === 0 &&
        index + 1 < flashcardsList.length
      ) {
        // Check if the card limit per container has been reached
        containers.push([]); // Add a new container for the front components of the cards
        containers.push([]); // Add a new container for the back components of the cards
        currentFrontContainerIndex += 2;
      }
    });
  }

  return (
    <div className="editor-wrapper">
      <InfoModal showModal={showModal} setShowModal={setShowModal} />
      
      {/* Navbar */}
      <div className="editor-navbar">
        {/* Button to open Controls Panel */}
        <SettingsButton dataBsTarget="#offcanvasResponsive" ariaControls="offcanvasResponsive"/>
      </div>

      {/* Panels */}
      <div className="panels-wrapper">
        {/* Settings Panel */}
        <section className="settings-section offcanvas-xxl offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
            <div className="d-flex d-xxl-none justify-content-end position-relative z-3">
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasResponsive"
                className="btn-close btn-close-white position-absolute"
                style={{ top: 0, right: 0 }}
                aria-label="Close">
              </button>
            </div>

            <SettingsPanel />
        </section>

        {/* Cards Panel */}
        { flashcardsList.length > 0 && (
        <section className="cards-section">
          {containers.map((cards, index) => (
            <CardsContainer
              key={`container-${index}`}
              side={index % 2 === 0 ? "front" : "back"}
              bleed={bleed}
            >
              {cards}
            </CardsContainer>
          ))}
        </section>
        )}
      </div>
    </div>
  );
}
