import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "react-tooltip/dist/react-tooltip.css";
import "bootstrap/dist/js/bootstrap.js";

import { FlashcardsContextProvider } from './contexts/FlashcardsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FlashcardsContextProvider>
      <App />
    </FlashcardsContextProvider>
  </React.StrictMode>,
)
