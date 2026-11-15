import "./Header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-header">
        <Link className="logo" href="/">
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
      <nav>
        <Link href="/movienight">Filmkvelder</Link>
        <Link href="/articles">Artikler</Link>
        <Link href="/reviews">Filmanmeldelser</Link>
      </nav>
    </header>
  );
}
