import React from "react";

const Button = ({ buttonText, clickEvent, buttonStyle, icon }) => {
  return (
    <button
      onClick={clickEvent}
      className={`${buttonStyle} text-base bg-primary-color px-10 font-medium py-4 transition-all duration-400 ease-in-out`}
    >
      {buttonText}
      {icon}
    </button>
  );
};

export default Button;