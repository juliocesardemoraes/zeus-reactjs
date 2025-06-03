import { useEffect } from "react";
import { useState } from "react";
import { tasksMock } from "./mock/TasksMock";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState(tasksMock);

  useEffect(() => {
    console.log("TITLE", title);
  }, [title]);

  return (
    <>
      <h1>Criar Tarefa</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          setTasks((prev) => {
            return [
              ...prev,
              {
                title,
                description,
                done: false,
              },
            ];
          });
        }}
      >
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

        <button type="submit">Criar Tarefa</button>
      </form>

      <h1>Lista de Tarefas</h1>
      {tasks.map((task, index) => {
        return (
          <div key={index}>
            <h2>{task.title}</h2>
            <h3>{task.description}</h3>
          </div>
        );
      })}
    </>
  );
}

export default App;

// onClick
// onChange
// onSubmit
