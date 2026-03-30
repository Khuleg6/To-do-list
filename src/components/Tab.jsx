import React from "react";

export const Tab = ({ buttonName, isActive, handleFilterChange }) => {
  return (
    <button
      onClick={() => {
        handleFilterChange(buttonName);
      }}
      className={`rounded-md w-[100px] h-[38px] text-[14px] font-thin ${isActive ? "bg-blue-400" : "bg-gray-100"} `}
    >
      {buttonName}
    </button>
  );
};
