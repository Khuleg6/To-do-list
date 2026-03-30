"use client";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { Tab } from "@/components/Tab";

import { useState } from "react";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("Completed");
  const handleClick = () => {
    setTasks([inputValue, ...tasks]);
  };
  const handleFilterChange = (buttonName) => {
    setCurrentFilter(buttonName);
  };
  const filterButton = ["All", "Active", "Completed"];
  const deleteTask = (indexToDelete) => {
    const updatedTask = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTask);
  };
  return (
    <div className="bg-gray-200 h-dvh flex items-center justify-center">
      <div className="w-[377px]  bg-amber-50 flex justify-center flex-col items-center rounded-md shadow-lg">
        <div className=" w-[345px] flex flex-col justify-evenly items-center gap-6 ">
          <p className="text-[20px] pt-5 font-semibold">To-Do List</p>
          <div className="flex justify-center gap-1.5">
            <Input inputChanger={setInputValue} />
            <button
              onClick={handleClick}
              className="w-15 h-10 text-[14px] rounded-sm bg-blue-500 text-white"
            >
              Add
            </button>
          </div>
          <div className="flex gap-2 justify-start w-[345px] ">
            {filterButton.map((btn) => {
              return (
                <Tab
                  handleFilterChange={handleFilterChange}
                  buttonName={btn}
                  isActive={btn == currentFilter}
                />
              );
            })}
          </div>
          <div className="flex flex-col items-center gap-1">
            {tasks.length > 0 ? (
              tasks.map((task, index) => {
                return (
                  <Container
                    key={index}
                    taskname={task}
                    onDelete={() => deleteTask(index)}
                  />
                );
              })
            ) : (
              <p className="text-[14px] text-gray-600 pt-3">
                No Tasks yet. Add one above
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-2 text-[12px] p-6">
          <p>Powered by</p>
          <p className="text-blue-500 text-[12px]">Pinecone academy</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
