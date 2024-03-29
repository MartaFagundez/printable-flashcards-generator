import React from "react";

import CodeBlock from "./CodeBlock";

const code = `[
    {
      "id": "string (optional, max length: 6)",
      "question": "string (required, max length: 120)",
      "answer": "string (required, max length: 250)",
      "category_name": "string (optional, max length: 25)",
      "qr_url": "string (optional URL pointing to .jpg or .png image)"
    },
    ...
]
`;

const assetsUrlBase = "https://martafagundez.github.io/printable-flashcards-generator/assets/";


export default function Faqs() {
  return (
    <div className="accordion" id="accordionFaqs">
      {/* Required format */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-check me-2" viewBox="0 0 16 16">
                <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
            </svg>
            File Format
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionFaqs"
        >
          <div className="accordion-body">
            <div className="accordion-body-block">
                <p>The data must be contained in a .json file with the following structure:</p>
                <CodeBlock code={code} language={"json"} />
                <p>The file must contain at least 1 flashcard and can have a maximum of 120 flashcards.</p>
            </div>

            <div className="accordion-body-block">
                <h4>Field definitions:</h4>
                <ul>
                    <li><span>id: </span>Optional. Unique identifier for the flashcard. Accepts string values with a maximum length of 6 characters.</li>
                    <li><span>question: </span><mark>Required.</mark>The question for the flashcard. Accepts string values with a maximum length of 120 characters.</li>
                    <li><span>answer: </span><mark>Required.</mark> The answer to the question. Accepts string values with a maximum length of 250 characters.</li>
                    <li><span>category_name: </span>Optional. Name of the category to which the flashcard belongs. Accepts string values with a maximum length of 25 characters.</li>
                    <li><span>qr_url: </span>Optional. URL pointing to a .jpg or .png image for a QR code.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>

        {/* Print Settings */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer me-2" viewBox="0 0 16 16">
                <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
            </svg>
            Print Settings
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFaqs"
        >
          <div className="accordion-body">
            <ul>
              <li>First you generate a pdf file and then print it.</li>
              <li>Make sure the Layout is set to <strong>Landscape</strong>, that paper size is <strong>A4</strong>, and that Margins are set to  <strong>None</strong>.</li>
              <li>In <a href={`${assetsUrlBase}save_as_pdf_settings.png`} target="_blank" rel="noopener noreferrer">this image </a> you can see the configuration required to generate the pdf file correctly.</li>
            </ul>
          </div>
        </div>
      </div>

        {/* Example files */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-arrow-down me-2" viewBox="0 0 16 16">
                <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
            </svg>
            Example Files
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFaqs"
        >
          <div className="accordion-body">
            <ul>
                <li>
                  <a href={`${assetsUrlBase}example.json`} target="_blank" rel="noopener noreferrer">See example file to generate the flashcards (.json)</a> or
                  <a href={`${assetsUrlBase}example.json`} download={"Example.json"}> download it.</a>
                </li>
                <li>
                  <a href={`${assetsUrlBase}example.pdf`} target="_blank" rel="noopener noreferrer">See example of file generated and ready to print (.pdf)</a> or
                  <a href={`${assetsUrlBase}example.pdf`} download={"Example.pdf"}> download it.</a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
