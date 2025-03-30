import React from "react";

const Input = ({ name, value, label, color, checked, onChange }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
      {!color ? (
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
        />
      ) : (
        <>
          <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            className="hidden peer"
          />
          <span
            className={`w-5 h-5 rounded-full ${color} ring-2 ring-offset-2 ${
              checked ? "ring-blue-500" : "ring-transparent"
            }`}
          />
        </>
      )}
      <span className="text-gray-600">{label}</span>
    </label>
  );
};

export default Input;
