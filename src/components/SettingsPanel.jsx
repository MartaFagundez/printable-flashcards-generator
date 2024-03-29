import React, {useState} from 'react';

import { useFlashcardsContext } from '../contexts/FlashcardsContext';
import FlashcardsUploader from "../components/FlashcardsUploader.jsx";
import CategoryStyleThumb from './CategoryStyleThumb.jsx';
import StylesModal from './StylesModal.jsx';

export default function SettingsPanel() {
    const {store: {bleed, hideId, qrUrlErrors, flashcardsList, categoriesList}, actions: {setBleed, setHideId}} = useFlashcardsContext();
    const [showStylesModal, setShowStylesModal] = useState(false);

    const categoriesListItems = Object.keys(categoriesList).map(categoryItem => ({
        name: categoryItem,
        style: categoriesList[categoryItem]
    }));

  return (
    <div className='d-flex flex-column p-4 p-md-2 ps-md-0 me-2 text-neutral-20 h-100 overflow-y-auto' style={{ width: "250px" }}>
        {
            flashcardsList.length > 0 && 
            <>
                {/* Title */}
                <div className='border-bottom'>
                    <h3 className='fw-semibold fs-5 mb-3'>Settings</h3>
                </div>

                {/* Formatting section */}
                <div className='border-bottom py-4'>
                    <h4 className='fw-semibold fs-6 mb-3'>Formatting</h4>

                    <div className="form-check mb-2">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="bleed"
                            checked={bleed}
                            onChange={() => {setBleed(!bleed)}}
                        />
                        <label className="form-check-label" htmlFor="bleed">
                            Include Bleed and Crop Marks
                        </label>
                    </div>

                    <div className="form-check mb-2">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="hideId" 
                            checked={hideId} 
                            onChange={() => {setHideId(!hideId)}}
                        />
                        <label className="form-check-label" htmlFor="hideId">
                            Hide IDs
                        </label>
                    </div>

                    {/* Change category styles */}
                    <button 
                        className="btn p-0 mb-2 category-styles-collapse-btn"
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseStyles" 
                        aria-expanded="false" 
                        aria-controls="collapseStyles"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sliders me-2" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"/>
                        </svg>
                        Change category styles
                    </button>

                    <div className="collapse" id="collapseStyles">
                        {/* Categories styles */}
                        <div className="ms-4 mt-2">
                            {
                                categoriesListItems.map(category => {
                                    return (
                                        <CategoryStyleThumb key={category.name} category={category} setShowStylesModal={setShowStylesModal} />
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* Qr Errors */}
                    {
                        qrUrlErrors.length > 0 &&
                        <>
                            <button 
                                className="btn p-0 mb-2 url-errors-collapse-btn"
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#collapseUrlErrors" 
                                aria-expanded="false" 
                                aria-controls="collapseUrlErrors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-triangle me-2" viewBox="0 0 16 16">
                                    <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
                                    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                                </svg>
                                See urls with error
                            </button>

                            <div className="collapse" id="collapseUrlErrors">
                                <div className="ms-4 mt-2">
                                    {
                                        qrUrlErrors.map((qrUrl, index) => {
                                            return (
                                                <p key={index} className='mb-2'>{qrUrl}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </>
                    }
                </div>


                {/* Modal */}
                <StylesModal showModal={showStylesModal} setShowModal={setShowStylesModal}/>
            </>
        }

        {/* Buttons */}
        <div className="d-flex flex-column align-items-center w-100 mt-5 ">
            <FlashcardsUploader page='editor' />

            {/* Button to trigger browser print dialog */}
            {
                flashcardsList.length > 0 &&
                <button className='btn print-button w-100' onClick={window.print}>Print</button>
            }
        </div>
    </div>
  )
}