import React from "react";

const Button = ({ name, type = "button", onClicked, className="" }) => {
  return (
    <button
      type={type}
      onClick={onClicked}
      className={`px-4 py-2 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;
