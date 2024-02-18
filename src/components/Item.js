import React from "react";
import toast from "react-hot-toast";

export default function Item({ item, items, setItem }) {
  function deleteHandler() {
    const filteredItems = items.filter((i) => i.id !== item.id);
    setItem(filteredItems);
    localStorage.setItem("ToDoItems", JSON.stringify(filteredItems));
    toast.success(`Task deleted successfully`);
  }
  function statusToggle() {
    const updatedItems = items.map((i) => {
      if (i.id === item.id) {
        const newStatus = i.status === "pending" ? "completed" : "pending";
        toast.success(`Task marked as ${newStatus}`);
        return {
          ...i,
          status: newStatus,
        };
      }
      return i;
    });

    setItem(updatedItems);
    localStorage.setItem("ToDoItems", JSON.stringify(updatedItems));
  }
  return (
    <div className="border shadow-lg p-4 rounded-md  ">
      <div className="text-lg font-semibold text-center capitalize">{item.title}</div>
      <div className="flex justify-between items-center mt-2">
        <button
          className={`px-3 py-1 rounded text-sm ${
            item.status === "pending"
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-green-500 hover:bg-green-600"
          } text-white`}
          onClick={statusToggle}
        >
          {item.status === "pending" ? "Mark as Completed" : "Mark as Pending"}
        </button>
        <button
          className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white text-sm"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
