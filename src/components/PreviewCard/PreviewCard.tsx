import Link from "next/link";
import styles from "./PreviewCard.module.css";

export type PreviewCardProps = {
  title: string;
  subtitle: string;
  author: string;
  url: string;
};

export default function PreviewCard({
  title,
  subtitle,
  author,
  url,
}: PreviewCardProps) {
  return (
    <div className={styles.PreviewCard}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <Link href={url} className={styles.lesMer}>
        Les mer
      </Link>
      <p>{author}</p>
    </div>
  );
}
