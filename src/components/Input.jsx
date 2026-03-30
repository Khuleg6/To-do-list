import React from "react";

export const Input = ({ inputChanger }) => {
  const handleChange = (event) => {
    inputChanger(event.target.value);
  };
  return (
    <div>
      <input
        onChange={handleChange}
        className="border w-[280px] h-[40px] rounded-md border-gray-300 pl-[16px]"
        placeholder=" Enter your email address"
      ></input>
    </div>
  );
};
