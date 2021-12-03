import React, { useState, useRef } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}
interface IDesc {
  description: string;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);

  const [newTaskDesc, setNewTaskDesc] = useState<string>("");
  const [tasksDesc, setTasksDesc] = useState<IDesc[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    addTaskDesc(newTaskDesc);
    setNewTask("");
    setNewTaskDesc("");
    taskInput.current?.focus();
  };

  const addTask = (name: string): void => {
    const newTasks: ITask[] = [{ name: name, done: false }, ...tasks];
    setTasks(newTasks);
  };
  const addTaskDesc = (description: string): void => {
    const newTasksDesc: IDesc[] = [{ description: description }, ...tasksDesc];
    setTasksDesc(newTasksDesc);
  };
  const toggleDoneTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    const newTasksDesc: IDesc[] = [...tasksDesc];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
    setTasksDesc(newTasksDesc);
  };
  const removeTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  };
  return (
    <div className="container p-4 mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h2 className="p-2 text-center">To-do app</h2>
              <form onSubmit={handleSubmit}>
                <input
                  className="form-control"
                  autoFocus
                  type="text"
                  onChange={(e) => setNewTask(e.target.value)}
                  value={newTask}
                  ref={taskInput}
<<<<<<< HEAD
                  placeholder="Title of the task"
=======
>>>>>>> f2124045b72903a0b7a2258b85d1691f5eb6cd0a
                />
                <input
                  className="form-control mt-2"
                  type="text"
                  onChange={(e) => setNewTaskDesc(e.target.value)}
                  value={newTaskDesc}
                  ref={taskInput}
<<<<<<< HEAD
                  placeholder="Description of the task"
=======
>>>>>>> f2124045b72903a0b7a2258b85d1691f5eb6cd0a
                />
                <button className="btn btn-success col-12 mt-4">Save</button>
              </form>
            </div>
          </div>

          {tasks.map((t: ITask, i: number) => (
            <div className="card card-body mt-2" key={i}>
              <div className="d-flex justify-content-between">
                <h3 style={{ textDecoration: t.done ? "line-through" : "" }}>
                  {t.name}
                </h3>
                <div>
                  <button
                    className="btn btn-secondary"
                    onClick={() => toggleDoneTask(i)}
                  >
                    {t.done ? "✓" : "✗"}
                  </button>
                  <button
                    className="btn btn-danger  ms-3"
                    onClick={() => removeTask(i)}
                  >
                    🗑
                  </button>
                </div>
              </div>
              <div className="mt-1">
                <p>{tasksDesc[i].description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
