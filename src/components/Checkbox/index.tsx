import styles from "./styles.module.css";

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = (props: CheckboxProps) => {
  return <input {...props} type="checkbox" className={styles.checkbox} />;
};
