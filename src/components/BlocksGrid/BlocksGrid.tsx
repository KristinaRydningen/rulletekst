import styles from "./BlocksGrid.module.css";

export type BlocksGridProps = {
  children: React.ReactNode;
};

export default function BlocksGrid({ children }: BlocksGridProps) {
  return <section className={styles.blockGrid}>{children}</section>;
}
