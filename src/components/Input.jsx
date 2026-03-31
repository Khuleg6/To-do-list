import React from "react";

export const Input = ({ inputChanger, inputValue }) => {
  const handleChange = (event) => {
    inputChanger(event.target.value);
  };
  return (
    <div>
      <input
        value={inputValue}
        onChange={handleChange}
        className="border w-[280px] h-10 rounded-md border-gray-300 pl-4"
        placeholder=" Enter your email address"
      ></input>
    </div>
  );
};
