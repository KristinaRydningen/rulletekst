import styles from "./MovieNightBanner.module.css";
import Link from "next/link";

export type MovieNightBannerProps = {
  title: string;
};

export default function MovieNightBanner({ title }: MovieNightBannerProps) {
  return (
    <article className={styles.moveNightBanner}>
      <h3>Ukens filmkveld</h3>
      <h1>{title}</h1>
      <img src="" alt="" />
      <Link href="/movienight" className={styles.MovieNightButton}>
        Meld meg på!
      </Link>
    </article>
  );
}
