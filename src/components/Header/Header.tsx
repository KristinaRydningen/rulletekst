import "./Header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-header">
        <Link className="logo" href="/">
          Rulletekst
        </Link>
        <Link href="/">Filmen er slutt. Samtalen begynner</Link>
      </div>
      <nav>
        <Link href="/movienight">Filmkvelder</Link>
        <Link href="/articles">Artikler</Link>
        <Link href="/reviews">Filmanmeldelser</Link>
      </nav>
    </header>
  );
}
