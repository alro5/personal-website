import Link from "next/link";
import styles from "../styles/site-header.module.scss";
import Image from "next/image";
import logo from "../public/logo.svg";

function Header() {
  return (
    <header className={styles.site__header}>
      <Link href="/">
        <a className={styles.site__header__logo}>
          <Image width={90} src={logo} />
        </a>
      </Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
