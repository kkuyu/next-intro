import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/" passHref>
        <a style={{ color: router.pathname === "/" ? "red" : "black" }}>home</a>
      </Link>
      <Link href="/about" passHref>
        <a style={{ color: router.pathname === "/about" ? "red" : "black" }}>about</a>
      </Link>
    </nav>
  );
}

export default NavBar;
