/* eslint-disable react/prop-types */
import React, {useState} from "react";
import PropTypes from 'prop-types';

import { useFlashcardsContext } from "../contexts/FlashcardsContext";

export default function CardBack({ id="", answer="", qrUrl="", gradientStyle="gradient-default", colorStyle="color-default" }) {
    const {store: {qrUrlErrors, hideId}, actions: {setQrUrlErrors}} = useFlashcardsContext();
    const [imageError, setImageError] = useState(false);

    let fontSizeStyle = "";
    if (answer.length >= 120 && answer.length < 140) {
        fontSizeStyle = "md";
    }
    else if (answer.length >= 140 && answer.length < 160) {
        fontSizeStyle = "lg";
    }
    else if (answer.length >= 160 && answer.length < 180) {
        fontSizeStyle = "xl";
    }
    else if (answer.length >= 180 && answer.length < 210) {
        fontSizeStyle = "xxl";
    }
    else if (answer.length >= 210 && answer.length < 220) {
        fontSizeStyle = "xxl";
    }
    else if (answer.length >= 220) {
        fontSizeStyle = "xxxxl";
    }


    function onImageError(url) {
        if (!qrUrlErrors.includes(url))
        {
            setQrUrlErrors([...qrUrlErrors, url]);
        }
        setImageError(true);
    }

    return (
        <div className={`card-wrapper`}>
            {/* Marks Container */}
            <div className="marks-wrapper">
                <div className="left-marks-container">
                <div className="left-marks"></div>
                </div>
                <div className="center-marks-container">
                <div className="center-marks"></div>
                <div className="center-marks"></div>
                </div>
                <div className="right-marks-container">
                <div className="left-marks"></div>
                </div>
            </div>

            {/* Card */}
            <div className="bleed-area">
                <div className="flashcard back">
                    {
                        !hideId &&
                        <div className="header">
                            <div className={`id-wrapper ${gradientStyle}`}>
                                <p className="id">{id.toString().padStart(2,"0")}</p>
                            </div>
                        </div>
                    }
                    <div className="answer-wrapper">
                        <div className={`answer ${fontSizeStyle} ${colorStyle}`}>{answer}</div>
                    </div>

                    {
                        qrUrl && !imageError &&
                        <div className="qr-wrapper">
                            <figure className={`qr ${gradientStyle}`}>
                                <img src={qrUrl} alt="QR code to related information" onError={() => onImageError(qrUrl)} />
                            </figure>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

CardBack.propTypes = {
    id: PropTypes.string,
    answer: PropTypes.string.isRequired,
    qrUrl: PropTypes.string,
    gradientStyle: PropTypes.string,
    colorStyle: PropTypes.string
}