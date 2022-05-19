import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./NavBar.module.css";

function NavBar() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <Link href="/" passHref>
        <a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>home</a>
      </Link>
      <Link href="/about" passHref>
        <a className={[styles.link, router.pathname === "/about" ? styles.active : ""].join(" ")}>about</a>
      </Link>
    </nav>
  );
}

export default NavBar;
