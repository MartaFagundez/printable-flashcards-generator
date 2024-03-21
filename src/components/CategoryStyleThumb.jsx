import React from 'react';

import { colorStylesList } from '../utils/colorStyles.js';

export default function CategoryStyleThumb({category}) {
  return (
    <div className="category-style-wrapper">
        <div className={`category-style-gradient ${colorStylesList[category.style].gradientStyle}`}></div>
        <p >{category.name === "none" ? "Uncategorized" : category.name}</p>
    </div>
  )
}
