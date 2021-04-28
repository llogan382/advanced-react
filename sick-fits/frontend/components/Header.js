import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Sick Fits</Link>
      </div>
      <div className="sub-bar">
        <p>Searh</p>
      </div>
      <Nav />
      <p>I am the header!</p>
    </header>
  );
}
