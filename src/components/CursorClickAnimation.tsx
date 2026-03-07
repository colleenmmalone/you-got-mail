
import React, { useState, useEffect } from 'react';
// import './ClickImage.css'; // Create this file for styling
import { lips } from "../assets/index";

const CursorClickAnimation = () => {

    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [isActive, setIsActive] = useState(false)

    const handleClick = (event) => {
        // prevent user form activing again before animation completes 
        window.removeEventListener("click", handleClick);

        // Get cursor position (clientX/clientY provide coordinates relative to the viewport)
        const { clientX: cX, clientY: cY } = event;
        setX(cX)
        setY(cY)
        setIsActive(true) //apply animation to lips

        // Remove the animation and re-add listener
        //  after animation completes
        setTimeout(() => {
            setIsActive(false)
            window.addEventListener("click", handleClick);
        }, 700);
    };

    // add listener on load 
    useEffect(() => {
        window.addEventListener("click", handleClick);
    }, []);

    return (

        <div className=''>

            <img src={lips} alt="lips img"
                className={` fixed z-50 h-[25px] -translate-x-1/2 -translate-y-1/2 opacity-0 ${isActive ? 'animate-kiss' : ''}`}
                style={{ top: y, left: x }}
            />

        </div>
    );
};

export default CursorClickAnimation;






