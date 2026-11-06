import "./Header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div>
        <Link href="/">Rulletekst</Link>
        <p>Filmen er slutt. Samtalen begynner</p>
      </div>
      <nav>
        <Link href="/movienight">Ukens filmkveld</Link>
        <Link href="/products">Artikler</Link>
        <Link href="/reviews">Filmanmeldelser</Link>
      </nav>
    </header>
  );
}
