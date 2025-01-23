import { useState } from "react";
import { Header } from "../../components/Header";
import { CreateNewTask } from "../../components/CreateNewTask";
import { TasksOverview } from "../../components/TasksOverview";
import { Task } from "../../components/Task";

import styles from "./styles.module.css";
import { EmptyTasks } from "../../components/EmptyTasks";

export type TaskType = { id: string; description: string; finished: boolean };

export const ToDo = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addTask = (description: string) => {
    const newTask = { id: Date.now().toString(), description, finished: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTaskFinished = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, finished: !task.finished } : task
      )
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <CreateNewTask onCreateTask={addTask} />
        <div className={styles.content}>
          <TasksOverview
            totalTasks={tasks.length}
            finishedTasks={tasks.reduce(
              (acc, cur) => (cur.finished ? acc + 1 : acc),
              0
            )}
          />
          <div className={styles.tasksList}>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <Task
                  checked={task.finished}
                  onChange={() => toggleTaskFinished(task.id)}
                  onDelete={() => deleteTask(task.id)}
                  key={task.id}
                >
                  {task.description}
                </Task>
              ))
            ) : (
              <EmptyTasks />
            )}
          </div>
        </div>
      </main>
    </>
  );
};
