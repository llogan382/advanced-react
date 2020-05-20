import Link from 'next/link';
<<<<<<< refs/remotes/origin/master:stepped-solutions/08/frontend/components/Nav.js
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/items">
      <a>Items</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/signup">
      <a>Signup</a>
    </Link>
    <Link href="/orders">
      <a>Orders</a>
    </Link>
    <Link href="/me">
      <a>Account</a>
    </Link>
  </NavStyles>
=======

const Nav = () => (
    <div>
        <Link href="/sell">
            <a>Sell!</a>

        </Link>
        <Link href="/">
            <a>Home!</a>

        </Link>

    </div>
>>>>>>> More May:frontend/components/Nav.js
);

export default Nav;
