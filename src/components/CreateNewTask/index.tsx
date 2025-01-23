import { Button } from "../Button";
import { TextInput } from "../TextInput";
import AddMoreIcon from "../../assets/icons/add.svg";

import styles from "./styles.module.css";
import { useState } from "react";

export type CreateNewTaskProps = {
  onCreateTask: (task: string) => void;
};

export const CreateNewTask = ({ onCreateTask }: CreateNewTaskProps) => {
  const [newTask, setNewTask] = useState("");

  const handleCreateTask = () => {
    if (newTask.trim() === "") return;

    onCreateTask(newTask);
    setNewTask("");
  };

  return (
    <div className={styles.createNewTask}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <Button onClick={handleCreateTask}>
        Criar
        <AddMoreIcon />
      </Button>
    </div>
  );
};
