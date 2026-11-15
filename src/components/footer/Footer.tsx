import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.logoDisplay}>
          <Link className={styles.footerLogo} href="/">
            Rulletekst
          </Link>
          <Link href="/">
            <p className="sloganContainer">
              <span className="redSlogan">Filmen</span>
              {" er slutt. "}
              <span className="redSlogan">Samtalen</span>
              {" begynner "}
            </p>
          </Link>
        </div>
        <div className={styles.footerLinksDisplay}>
          <h3>Utforsk</h3>
          <Link href="/">Forside</Link>
          <Link href="/movienights">Filmkvelder</Link>
          <Link href="/articles">Artikler</Link>
          <Link href="/reviews">FilmAnmeldelser</Link>
        </div>
      </footer>
    </>
  );
}
