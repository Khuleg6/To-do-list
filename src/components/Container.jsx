import React from "react";

export const Container = ({ taskname, onDelete }) => {
  return (
    <div className=" bg-gray-100 hover:bg-gray-200 rounded-md h-[62px] w-[345px] flex items-center justify-between px-4">
      <div className="flex gap-2 items-center">
        <input className="w-[20px] h-[20px]" type="checkbox"></input>
        <p className="text-[15px] text-gray-800">{taskname}</p>
      </div>
      <p
        onClick={onDelete}
        className="bg-[#FEF2F2] rounded-[6px] px-[12px] py-[6px] text-[#EF4444] text-sm font-normal"
      >
        Delete
      </p>
    </div>
  );
};
