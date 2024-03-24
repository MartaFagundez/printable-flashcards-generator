import React from 'react';
import PropTypes from 'prop-types';

import { colorStylesList } from '../utils/colorStyles.js';
import { useFlashcardsContext } from '../contexts/FlashcardsContext.jsx';

export default function CategoryStyleThumb({category, setShowStylesModal}) {
  const {actions: {setSelectedCategory}} = useFlashcardsContext();

  function handleStyleClick() {
    setSelectedCategory(category);
    setShowStylesModal(true);
  }

  return (
    <div className="category-style-wrapper" onClick={handleStyleClick}>
        <div className={`category-style-gradient ${colorStylesList[category.style].gradientStyle}`}></div>
        <p >{category.name === "none" ? "Uncategorized" : category.name}</p>
    </div>
  )
}

CategoryStyleThumb.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        style: PropTypes.string.isRequired
    }),
    setShowStylesModal: PropTypes.func.isRequired
}
