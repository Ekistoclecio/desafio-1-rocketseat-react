import styles from "./styles.module.css";

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  hoverIconColor?: string;
};

export const IconButton = ({
  children,
  hoverIconColor = "inherit",
  ...rest
}: IconButtonProps) => {
  return (
    <button
      className={styles.iconButton}
      {...rest}
      style={
        {
          "--hover-icon-color": hoverIconColor,
        } as React.CSSProperties
      }
    >
      {children}
    </button>
  );
};
