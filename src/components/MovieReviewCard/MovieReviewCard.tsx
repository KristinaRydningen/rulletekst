import styles from "./MovieReviewCard.module.css";

export type MovieReviewCardProps = {
  title: string;
};

export default function MovieReviewCard({ title }: MovieReviewCardProps) {
  return (
    <div className={styles.MovieReviewCard}>
      <img src="" alt="" />
      <h3>{title}</h3>

      <button>Les anmeldelsen</button>
    </div>
  );
}
