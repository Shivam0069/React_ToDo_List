import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";
import { Toaster } from "react-hot-toast";

function App() {
  const [items, setItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const existingItems = JSON.parse(localStorage.getItem("ToDoItems")) || [];
    setItems(existingItems);
    setDisplayedItems(existingItems);
  }, []);

  useEffect(() => {
    if (filter === "completed") {
      setDisplayedItems(items.filter((item) => item.status === "completed"));
    } else if (filter === "pending") {
      setDisplayedItems(items.filter((item) => item.status === "pending"));
    } else {
      setDisplayedItems(items);
    }
  }, [items, filter]);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <>
      <div>
        <Toaster
          position="top-center"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
              duration: 800,
            },
            error: {
              duration: 800,
            },
          }}
        ></Toaster>
      </div>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/TodoList.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-screen h-screen  "
      >
        <TodoForm setItem={setItems} items={items} />
        <div className="my-4 sm:ml-10  w-full text-center sm:w-fit sm:text-left   ">
          <select
            id="filter"
            value={filter}
            onChange={handleFilterChange}
            className="p-2 rounded-md"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <TodoItems setItem={setItems} items={displayedItems} />
      </div>
    </>
  );
}

export default App;
