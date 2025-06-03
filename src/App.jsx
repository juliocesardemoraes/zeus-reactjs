import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    console.log("TITLE", title);
  }, [title]);

  return (
    <>
      <h1>Criar Tarefa</h1>
      <input
        type="text"
        name="title"
        placeholder="Digite um título"
        id="title"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />

      <textarea
        name="description"
        placeholder="Digite uma descrição"
        id=""
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      ></textarea>

      <h1>Lista de Tarefas</h1>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </>
  );
}

export default App;

// onClick
// onChange
// onSubmit
