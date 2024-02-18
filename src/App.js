import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";
import { Toaster } from "react-hot-toast";

function App() {
  const [items, setItem] = useState(null);
  useEffect(() => {
    const existingItems = JSON.parse(localStorage.getItem("ToDoItems")) || [];
    setItem(existingItems);
  }, []);
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
        <TodoForm setItem={setItem} items={items} />
        <TodoItems setItem={setItem} items={items} />
      </div>
    </>
  );
}

export default App;
