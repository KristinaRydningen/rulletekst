import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="logo-display">
          <Link className="footer-logo" href="/">
            Rulletekst
          </Link>
          <Link href="/">Filmen er slutt. Samtalen begynner</Link>
        </div>
        <div className="footer-links-display">
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
