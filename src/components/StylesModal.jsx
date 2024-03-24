import React from 'react';
import PropTypes from "prop-types";

import { useFlashcardsContext } from '../contexts/FlashcardsContext';
import { colorStylesList } from '../utils/colorStyles';

export default function StylesModal({showModal, setShowModal}) {
    const {store: {categoriesList, selectedCategory}, actions: {setCategoriesList, setSelectedCategory}} = useFlashcardsContext();

    const styles = Object.keys(colorStylesList).map(styleKey => {
        return ({
            name: styleKey,
            gradient: colorStylesList[styleKey].gradientStyle
        })
    })

    function handleClick(styleName) {
        const newCategoriesList = {...categoriesList};
        newCategoriesList[selectedCategory.name] = styleName;
        setCategoriesList(newCategoriesList);
        setSelectedCategory(null);
        setShowModal(false);
    }

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title text-capitalize">Styles</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
                </div>

                <div className="modal-body p-4">
                    {
                        selectedCategory && 
                        <>
                            <p className='mb-4'>Choose the style for the {selectedCategory.name === "none" ? "UNCATEGORIZED" : selectedCategory.name.toUpperCase()} category:</p>
                            <div className="d-flex flex-wrap justify-content-start gap-3 mb-4">
                                {
                                    styles.map(style => {
                                        return (
                                            <div 
                                            key={style.name}
                                            className={`style-gradient-thumb ${style.name === selectedCategory.style ? "selected" : ""}`}
                                            onClick={() => {handleClick(style.name)}}
                                            >
                                                <div className={`thumb-inner ${colorStylesList[style.name].gradientStyle}`}>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>

                    }
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal" onClick={() => setShowModal(false)}>Close</button>
                </div>
            </div>
        </div>
    </div>
  )
}

StylesModal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    setShowModal: PropTypes.func.isRequired,
}