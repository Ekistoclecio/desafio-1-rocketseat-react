import styles from "./styles.module.css";

export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = (props: TextInputProps) => {
  return <input {...props} type="text" className={styles.input} />;
};
