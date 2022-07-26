import { FC, useState, ChangeEvent } from "react";
import "./App.css";
import { ITask } from "./Interfaces";
import TodoTask from "./TodoTask";

const App: FC = () => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (name === "task") {
      setTask(value);
    } else {
      setDeadline(Number(value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
    console.log(todoList);
  };

  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => task.taskName !== taskNameToDelete));
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            value={task}
            name="task"
            onChange={handleChange}
            type="text"
            placeholder="szó:"
          />
          <input
            value={deadline}
            name="deadline"
            onChange={handleChange}
            type="number"
            placeholder="szám:"
          />
        </div>
        <button onClick={addTask} className="addBtn">
          Hozzáad
        </button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => (
          <TodoTask key={key} task={task} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default App;
