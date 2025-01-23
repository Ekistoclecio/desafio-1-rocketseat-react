import ClipboardIcon from "../../assets/icons/clipboard.svg";
import styles from "./styles.module.css";
export const EmptyTasks = () => {
  return (
    <div className={styles.emptyTasks}>
      <ClipboardIcon />
      <span>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </span>
    </div>
  );
};
