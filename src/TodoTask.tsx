import { ITask } from "./Interfaces";

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
        <button onClick={() => {
          deleteTask(task.taskName)
        }}>X</button>
      </div>
    </div>
  );
};

export default TodoTask;
