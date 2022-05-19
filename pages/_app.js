import NavBar from "../components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <span className="hello">NEXT INTRO</span>
      <Component {...pageProps} />
      <style jsx global>{`
        .hello {
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export default MyApp;
