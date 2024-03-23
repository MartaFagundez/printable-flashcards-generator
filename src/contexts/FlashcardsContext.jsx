import React, {createContext, useContext, useState} from "react";
import PropTypes from "prop-types";

// Create the context for the store
export const FlashcardsContext = createContext(null);

// Initial state of the store
const storeInitialState = {
    flashcardsList: [],
    categoriesList: {},
    selectedCategory: null,
    qrImageErrors: [],
    hideId: false,
    bleed: false
}

// =============== CONTEXT PROVIDER ================ //
export function FlashcardsContextProvider({children}) {

    // ================== STORE ================== //
    // Contains the Context data.
    const [store, setStore] = useState(storeInitialState);

    // =============== ACTIONS ================= //
    // Contains the functions that modify the store.
    const actions = {
        setFlashcardsList: (payload) => {
            return setStore(prevState => ({
                ...prevState,
                flashcardsList: payload
            }))
        },
        setCategoriesList: (payload) => {
            return setStore(prevState => ({
                ...prevState,
                categoriesList: payload
            }))
        },
        setSelectedCategory: (payload) => {
            return setStore(prevState => ({
                ...prevState,
                selectedCategory: payload
            }))
        },
        setQrImageErrors: (payload) => {
            return setStore(prevState => ({
                ...prevState,
                qrImageErrors: payload
            }))
        },
        setHideId: (payload) => {
            return setStore(prevState => ({
                ...prevState,
                hideId: payload
            }))
        },
        setBleed: (payload) => {
            return setStore(prevState => ({
                ...prevState,
                bleed: payload
            }))
        },
    }

    return (
        <FlashcardsContext.Provider value={{store, actions}} >
            {children}
        </FlashcardsContext.Provider>
    );
}


// Custom hook to access context
export function useFlashcardsContext() {
    const context = useContext(FlashcardsContext);
    if (!context) {
        throw new Error("useFlashcardsContext must be used inside a FlashcardsContextProvider");
    }
    return context;
}

FlashcardsContextProvider.propTypes = {
    children: PropTypes.node
}