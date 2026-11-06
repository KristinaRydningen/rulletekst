import styles from "./MovieReviewCard.module.css";

export type MovieReviewCardProps = {
  title: string;
  subtitle: string;
};

export default function MovieReviewCard({
  title,
  subtitle,
}: MovieReviewCardProps) {
  return (
    <div className={styles.MovieReviewCard}>
      <img src="" alt="" />
      <h3>{title}</h3>
      <h2>{subtitle}</h2>
      <button>Les anmeldelsen</button>
    </div>
  );
}
