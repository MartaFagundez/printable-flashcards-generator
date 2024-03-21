import React from 'react';

import { useFlashcardsContext } from '../contexts/FlashcardsContext';
import FlashcardsUploader from "../components/FlashcardsUploader.jsx";
import CategoryStyleThumb from './CategoryStyleThumb.jsx';

export default function SettingsPanel() {
    const {store: {bleed, hideId, qrImageErrors, flashcardsList, categoriesList}, actions: {setBleed, setHideId, setQrImageErrors}} = useFlashcardsContext();

    const categoriesListItems = Object.keys(categoriesList).map(categoryItem => ({
        name: categoryItem,
        style: categoriesList[categoryItem]
    }));

  return (
    <div className='d-flex flex-column p-4 p-md-2 ps-md-0 me-2 text-neutral-20 h-100' style={{ width: "250px" }}>
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

                    <div className="form-check">
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

                    <div className="form-check">
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
                </div>

                {/* Categories styles */}
                <div className="border-bottom py-4">
                    <h4 className='fw-semibold fs-6 mb-3'>Category Styles</h4>
                    {
                        categoriesListItems.map(category => {
                            return (
                                <CategoryStyleThumb key={category.name} category={category} />
                            )
                        })
                    }
                </div>
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