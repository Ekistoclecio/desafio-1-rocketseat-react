import styles from "./styles.module.css";
import RocketIcon from "../../assets/icons/rocket.svg";

export const Header = () => {
  return (
    <div className={styles.header}>
      <RocketIcon />
      <p className={styles.title}>
        <span className={styles.blue}>to</span>
        <span className={styles.purple}>do</span>
      </p>
    </div>
  );
};
