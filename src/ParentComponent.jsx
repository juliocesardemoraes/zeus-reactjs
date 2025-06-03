import React, { useEffect, useState } from "react";

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("MOUNT");
  }, []);

  useEffect(() => {
    console.log("COUNT ATUALIZADO", count);
  }, [count]);

  const updateCount = () => {
    setCount(count + 1);
  };
  console.log("RENDER");

  return (
    <div>
      ParentComponent
      <button
        onClick={() => {
          updateCount();
        }}
      >
        INCREMENTAR
      </button>
    </div>
  );
}
