import React from "react";

export const Taskcount = ({ CompletedCount, allcount, deleteAll }) => {
  return (
    <div className="flex justify-between border-t-2 border-[#E4E4E7] pt-2 w-full items-center">
      <p>
        {CompletedCount} of {allcount} tasks completed
      </p>
      <p
        onClick={deleteAll}
        className=" rounded-md px-2 text-[#EF4444] text-sm font-normal"
      >
        Clear Completed
      </p>
    </div>
  );
};
