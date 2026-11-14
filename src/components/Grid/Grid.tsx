import styles from "./Grid.module.css";

export type GridProps = {
  children: React.ReactNode;
};

export default function Grid({ children }: GridProps) {
  return <div className={styles.grid}>{children}</div>;
}
