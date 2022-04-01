import Link from "next/link";
import styles from "../styles/site-header.module.scss";
import Image from "next/image";
import logo from "../public/logo.svg";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <header className={styles.site__header}>
      <Link href="/">
        <a className={styles.site__header__logo}>
          <Image width={90} src={logo} alt="website logo" />
        </a>
      </Link>
      <nav>
        <Link href="/">
          <a className={router.pathname == "/" ? styles.active : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname == "/about" ? styles.active : ""}>
            About
          </a>
        </Link>
        <Link href="/contact">
          <a className={router.pathname == "/contact" ? styles.active : ""}>
            Contact
          </a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
