"use client";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { Tab } from "@/components/Tab";
import { Taskcount } from "@/components/Taskcount";

import { useState } from "react";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("All");

  const handleClick = () => {
    const newTasks = [
      { taskName: inputValue, isCompleted: false, id: Date.now() },
      ...tasks,
    ];
    setTasks(newTasks);
    setInputValue("");
  };
  const handleFilterChange = (buttonName) => {
    setCurrentFilter(buttonName);

    console.log(currentFilter);
  };

  const filterButton = ["All", "Active", "Completed"];

  const handleCheck = (taskID) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskID) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskID) => {
    if (window.confirm("Are you to delete?")) {
      const updatedTask = tasks.filter((task) => taskID !== task.id);
      setTasks(updatedTask);
    } else {
      return;
    }
  };
  const deleteAll = () => {
    if (window.confirm("Are you sure to delete all completed tasks?")) {
      const updatedTasks = tasks.filter((task) => task.isCompleted === false);
      setTasks(updatedTasks);
    } else {
      return;
    }
  };

  const filtered = tasks.filter((task) => {
    if (currentFilter === "Active") {
      return task.isCompleted === false;
    } else if (currentFilter === "Completed") {
      return task.isCompleted === true;
    } else if (currentFilter == "All") {
      return true;
    }
  });

  return (
    <div className="bg-gray-200 h-dvh flex items-center justify-center">
      <div className="w-[377px]  bg-amber-50 flex justify-center flex-col items-center rounded-md shadow-lg">
        <div className=" w-[345px] flex flex-col justify-evenly items-center gap-6 pb-4">
          <p className="text-[20px] pt-5 font-semibold">To-Do List</p>
          <div className="flex justify-center gap-1.5">
            <Input inputValue={inputValue} inputChanger={setInputValue} />
            <button
              onClick={handleClick}
              className="w-15 h-10 text-[14px] rounded-sm bg-blue-500 text-white"
            >
              Add
            </button>
          </div>
          <div className="flex gap-2 justify-start w-[345px] ">
            {filterButton.map((btn, index) => {
              return (
                <Tab
                  handleFilterChange={handleFilterChange}
                  buttonName={btn}
                  key={index}
                  isActive={btn == currentFilter}
                />
              );
            })}
          </div>
          <div className="flex flex-col items-center gap-1">
            {tasks.length > 0 ? (
              filtered.map((task, index) => {
                return (
                  <Container
                    key={task.id}
                    taskname={task.taskName}
                    isCompleted={task.isCompleted}
                    handleChecked={() => handleCheck(task.id)}
                    onDelete={() => deleteTask(task.id)}
                  />
                );
              })
            ) : (
              <p className="text-[14px] text-gray-600 pt-3 ">
                No Tasks yet. Add one above
              </p>
            )}
          </div>
        </div>
        <div>
          <Taskcount
            deleteAll={deleteAll}
            CompletedCount={
              tasks.filter((task) => task.isCompleted === true).length
            }
            allcount={tasks.length}
          />
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
