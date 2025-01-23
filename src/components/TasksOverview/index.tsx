import styles from "./styles.module.css";

export type TasksOverviewProps = { totalTasks: number; finishedTasks: number };

export const TasksOverview = ({
  totalTasks,
  finishedTasks,
}: TasksOverviewProps) => {
  return (
    <div className={styles.tasksOverview}>
      <div className={styles.overviewItem}>
        <span className={styles.totalTasks}>Tarefas criadas</span>
        <span className={styles.overviewCount}>{totalTasks}</span>
      </div>
      <div className={styles.overviewItem}>
        <span className={styles.completedTasks}>Concluídas</span>
        <span className={styles.overviewCount}>{`${finishedTasks}${
          totalTasks > 0 ? ` de ${totalTasks}` : ""
        }`}</span>
      </div>
    </div>
  );
};
