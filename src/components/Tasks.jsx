import React from "react";
import { useState } from "react";

export const Tasks = ({ onadd }) => {
  const [text, setText] = useState("");
  const handleSend = () => {
    if (text.trim() !== "") {
      onadd(text);
      setText("");
    }
  };
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border w-[280px] h-[40px] rounded-md border-gray-300 pl-[16px] outline-none"
        placeholder="Enter your task"
      />
      <button
        onClick={handleSend}
        className="w-15 h-10 px-4 rounded-sm bg-blue-500 text-white hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};
