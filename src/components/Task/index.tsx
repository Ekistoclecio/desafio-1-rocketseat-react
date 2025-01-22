import { Checkbox } from "../Checkbox";
import { IconButton } from "../IconButton";

import TrashIcon from "../../assets/icons/trash.svg";

import styles from "./styles.module.css";

export type TaskProps = {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
};

export const Task = ({ onChange, onDelete, checked, children }: TaskProps) => {
  return (
    <div className={styles.task}>
      <Checkbox checked={checked} onChange={onChange} />
      <p
        className={`${styles.text} ${checked ? styles.textStrikethrough : ""}`}
      >
        {children}
      </p>
      <IconButton hoverIconColor="var(--danger)" onClick={onDelete}>
        <TrashIcon />
      </IconButton>
    </div>
  );
};
