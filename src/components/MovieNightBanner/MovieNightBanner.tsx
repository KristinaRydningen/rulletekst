import styles from "./MovieNightBanner.module.css";

export type MovieNightBannerProps = {
  title: string;
};

export default function MovieNightBanner({ title }: MovieNightBannerProps) {
  return (
    <article className={styles.moveNightBanner}>
      <h3>Ukens filmkveld</h3>
      <h1>{title}</h1>
      <img src="" alt="" />
      <button>Meld meg på!</button>
    </article>
  );
}
