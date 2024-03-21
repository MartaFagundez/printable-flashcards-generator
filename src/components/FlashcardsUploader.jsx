import React, { useState } from "react";
import PropTypes from "prop-types";

import { useFlashcardsContext } from "../contexts/FlashcardsContext";
import { Tooltip } from 'react-tooltip';
import InfoModal from "./InfoModal";

export default function FlashcardsUploader({page="home"}) {
  const {
    store: { qrImageErrors },
    actions: { setFlashcardsList, setCategoriesList },
  } = useFlashcardsContext();
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFileUpload = (event) => {
    setErrorMsg("");
    const file = event.target.files[0];

    if (!file) {
      setErrorMsg("No file selected");
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const jsonData = JSON.parse(event.target.result);

        // Check the number of flashcards
        if (jsonData.length < 1 || jsonData.length > 120) {
          setErrorMsg("The number of flashcards must be between 1 and 120.");
          return;
        }

        // Check the format of each flashcard
        const isValid = jsonData.every((flashcard) => {
          const { id, question, answer, category_name, qr_url } = flashcard;

          if (!question) {
            setErrorMsg("The question field is required");
            return false;
          }

          if (!answer) {
            setErrorMsg("The answer field is required");
            return false;
          }

          if (question.length > 120 || answer.length > 250) {
            setErrorMsg(
              "The question or answer exceeds the allowed character limit (question: 120, answer: 250)."
            );
            return false;
          }

          if (id && id.length > 6) {
            setErrorMsg("ID length exceeds 6 characters.");
            return false;
          }

          if (category_name && category_name.length > 25) {
            setErrorMsg(
              "The length of the name of at least one category exceeds 25 characters."
            );
            return false;
          }

          if (qr_url && !isValidImageUrl(qr_url)) {
            setErrorMsg("The QR code URL is not valid.");
            return false;
          }

          return true;
        });

        if (isValid) {
          // Process the data from the .json file
          setFlashcardsList(jsonData);
          const categoriesList = createCategoriesList(jsonData);
          setCategoriesList(categoriesList);
          setIsLoading(false);
          setErrorMsg("");
        }
      } catch (error) {
        setErrorMsg("The file is not in valid JSON format.");
      }
    };

    reader.readAsText(file);
  };

  const isValidImageUrl = (url) => {
    // Check if the entered value is a string
    if (typeof url !== 'string') {
        return false;
    }

    // Regular expression to validate the URL
    const urlRegex = /^(https?):\/\/[^ "]+$/;

    // Check if the URL appears to be valid
    if (!urlRegex.test(url)) {
        return false;
    }

    // Check if the URL ends with .jpg, .jpeg or .png
    const extensionRegex = /\.(jpg|jpeg|png)$/i;
    return extensionRegex.test(url);
  };

  // Create list of categories with default styles
  function createCategoriesList(cardsList) {
    const categoryList = {none: "defaultStyle"};
    if (cardsList.length > 0) {
      // Save category names and assign a default style to each one
      cardsList.forEach((card) => {
        if (
          card.category_name !== undefined &&
          !(card.category_name in categoryList)
        ) {
          categoryList[card.category_name] = `style${
            Object.keys(categoryList).length
          }`;
        }
      });
    }
    return categoryList;
  }

  return (
    <div className="d-flex flex-column justify-content-start w-100">
      <InfoModal showModal={showModal} setShowModal={setShowModal} />
      {/* Input */}
      <div className="d-flex justify-content-start w-100">
        {/* File input for uploading JSON */}
        <input
          type="file"
          accept=".json"
          name="upload-input"
          id="upload-input"
          className="upload-input"
          onChange={handleFileUpload}
        />
        <label
          htmlFor="upload-input"
          className={`btn my-4 px-5 me-2 ${page === "home" ? "btn-dark" : "btn-outline-light flex-grow-1"}`}
        >
          {isLoading ? "Loading..." : "Choose a file"}
        </label>

        {/* Button to see info about file requeriments */}
        <button 
          className={`btn button-info my-4 p-0 ${page === "home" ? "button-info-dark" : "button-info-light"}`}
          data-tooltip-id="info-tooltip"
          data-tooltip-content="How does it work"
          data-tooltip-place="top"
          onClick={() => {setShowModal(true)}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
          </svg>
        </button>
        <Tooltip id="info-tooltip" />
      </div>

      {/* Error messages */}
      {errorMsg && (
        <div className="alert alert-danger" role="alert">
          {errorMsg}
        </div>
      )}
    </div>
  );
}

FlashcardsUploader.propTypes = {
  page: PropTypes.string
}
