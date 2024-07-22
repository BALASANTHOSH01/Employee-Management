import React from 'react';

const Button = ({ text, onClickFunction }) => {
    return (
        <button
            type="button" // Change type to "button" to prevent default form submission
            className="w-[100%] my-[5%] border border-white mx-auto px-[17px] py-[10px] text-center font-semibold bg-[var(--primary-color)] text-white"
            onClick={onClickFunction} // Directly pass the function
        >
            {text}
        </button>
    );
};

export default Button;
