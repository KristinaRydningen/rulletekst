import styles from "./ArticlesGrid.module.css";

export type ArticlesGridProps = {
  children: React.ReactNode;
};

export default function ArticlesGrid({ children }: ArticlesGridProps) {
  return <div className={styles.articlesGrid}>{children}</div>;
}
