import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();

  return (
    <nav className="nav">
      <Link href="/" passHref>
        <a className={"link " + (router.pathname === "/" ? "active" : "")}>home</a>
      </Link>
      <Link href="/about" passHref>
        <a className={["link", router.pathname === "/about" ? "active" : ""].join(" ")}>about</a>
      </Link>
      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          right: 0;
        }

        .link {
          padding: 0 4px;
          text-transform: uppercase;
        }

        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}

export default NavBar;
