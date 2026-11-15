import Link from "next/link";
import styles from "./PreviewCard.module.css";

export type PreviewCardProps = {
  title: string;
  subtitle: string;
  author: string;
  url: string;
  date: string;
};

export default function PreviewCard({
  title,
  subtitle,
  author,
  url,
  date,
}: PreviewCardProps) {
  return (
    <div className={styles.PreviewCard}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <Link href={url} className={styles.lesMer}>
        Les mer
      </Link>
      <p className={styles.italic}>{`Skrevet av ${author}`}</p>
      <p> {new Date(date).toLocaleDateString("nb-NO")}</p>
    </div>
  );
}
