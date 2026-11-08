import Link from "next/link";
import styles from "./ArticlePreviewCard.module.css";
import { url } from "node:inspector";

export type ArticlePreviewCardProps = {
  title: string;
  subtitle: string;
  author: string;
  url: string;
};

export default function ArticlePreviewCard({
  title,
  subtitle,
  author,
  url,
}: ArticlePreviewCardProps) {
  return (
    <div className={styles.articlePreviewCard}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <Link href={`articles/${url}`} className={styles.lesMer}>
        Les mer
      </Link>
      <p>{author}</p>
    </div>
  );
}
