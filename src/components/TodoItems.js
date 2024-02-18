import React, { useEffect } from "react";
import Item from "./Item";

export default function TodoItems({ items, setItem }) {
  return (
    <div className="h-[400px] max-w-md no-scrollbar overflow-y-scroll  sm:ml-10 mt-5 space-y-2">
      {items?.map((item) => (
        <Item key={item.id} item={item} items={items} setItem={setItem} />
      ))}
    </div>
  );
}
