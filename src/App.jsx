import { useState } from "react";
import { tasksMock } from "./mock/TasksMock";
import "./globals.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState(tasksMock);

  const toggleTask = (index) => {
    const tasksDone = [...tasks];
    tasksDone[index].done = !tasksDone[index].done;
    setTasks(tasksDone);
  };

  const deleteTask = (index) => {
    console.log(index);
    const tasksDelete = [...tasks];
    tasksDelete.splice(index, 1);

    setTasks(tasksDelete);
  };

  return (
    <>
      <div className="form-section m-4">
        <h1>Criar Tarefa</h1>

        <form
          className="task-form"
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
            required
          />

          <textarea
            name="description"
            placeholder="Digite uma descrição"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />

          <button type="submit">Criar Tarefa</button>
        </form>
      </div>

      <div className="form-section m-4">
        <h1>
          Lista de Tarefas ({tasks.filter((task) => task.done === false).length}{" "}
          pendentes)
        </h1>
        <ul className="task-list">
          {tasks.map((task, index) => {
            return (
              <li
                key={index}
                className={`task-item ${task.done ? "completed" : ""}`}
              >
                <div className="task-content">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={task.done}
                      onChange={() => toggleTask(index)}
                    />
                    <span className="checkmark"></span>
                  </label>

                  <div className="task-details">
                    <h2 className="task-title">{task.title}</h2>
                    {task.description && (
                      <p className="task-description">{task.description}</p>
                    )}
                  </div>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                  aria-label="Deletar tarefa"
                >
                  ×
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
