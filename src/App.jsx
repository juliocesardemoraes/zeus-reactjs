import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  // RENDER 1 - 0
  // ATUALIZO O VALOR DO COUNTER PRA 1
  // RENDER 2 - 1
  // RENDER 2 - 1

  const increment = () => {
    setCounter((prev) => {
      return prev + 1;
    });
  };

  const decrement = () => {
    setCounter((prev) => {
      return prev - 1;
    });
  };

  return (
    <>
      <h1>Ciclo de vida</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default App;
