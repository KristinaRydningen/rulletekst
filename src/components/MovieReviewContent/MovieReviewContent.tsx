import styles from "./MovieReviewContent.module.css";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText } from "@payloadcms/richtext-lexical/react";

export type MovieReviewContentProps = {
  title: string;
  subtitle: string;
  dice: number;
  director: string;
  length: number;
  ageLimit: number;
  actors: {
    id?: string | null;
    name: string;
  }[];
  textContent: SerializedEditorState;
  author: string;
  date: string;
};

export default function MovieReviewContent({
  title,
  subtitle,
  dice,
  director,
  length,
  ageLimit,
  actors,
  textContent,
  author,
  date,
}: MovieReviewContentProps) {
  return (
    <div className={styles.reviewContentContainer}>
      <div className={styles.factBox}>
        <div className={styles.factBoxTitleContainer}>
          <h3>{title}</h3>
          <p>
            <img
              className={styles.diceImg}
              src={`/dice${dice}.png`}
              alt={`Terningkast ${dice}`}
            />
          </p>
        </div>
        <p>
          <b>Regissør: </b>
          {director}
        </p>
        <p>
          <b>Spilletid:</b> {length} minutter
        </p>
        <p>
          <b>Aldersgrense:</b> {ageLimit} år
        </p>
        <p>
          <b>Skuespillere:</b>
        </p>
        <ul>
          {actors.map((actor, index) => (
            <li key={actor.id ?? index}>{actor.name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.reviewTextContainer}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className={styles.richtext}>
          <RichText data={textContent} />
        </div>
        <p>
          Skrevet av: {author}, {date}
        </p>
      </div>
    </div>
  );
}
