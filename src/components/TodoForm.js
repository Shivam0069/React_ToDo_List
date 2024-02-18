import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

export default function TodoForm({ setItem, items }) {
  const inputRef = useRef();

  function submitHandler() {
    const title = inputRef.current.value;
    if (!title.trim()) {
      toast.error("Enter  a valid task!");
      inputRef.current.value = "";

      return;
    }
    const id = new Date().toISOString();

    const newItem = {
      id: id,
      title: title,
      status: "pending",
    };
    let updatedItems;
    if (items.length === 0) {
      updatedItems = [newItem];
    } else {
      updatedItems = [newItem, ...items];
    }

    setItem(updatedItems);

    localStorage.setItem("ToDoItems", JSON.stringify(updatedItems));

    inputRef.current.value = "";
    toast.success("New task added successfully");
  }
  return (
    <div className="max-w-sm mx-auto sm:max-w-md  sm:ml-10 pt-10">
      <input
        ref={inputRef}
        type="text"
        name="task"
        placeholder="Add Task..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
      />
      <button
        onClick={submitHandler}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}
