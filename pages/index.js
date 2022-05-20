import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import Seo from "../components/Seo";
import styles from "../styles/Home.module.css";

export default function Home({ movies }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div className={styles.container}>
      <Seo title="Home" />
      {movies?.map((movie) => (
        <div onClick={() => onClick(movie.id, movie.original_title)} className={styles.movie} key={movie.id}>
          <div className={styles.thumb}>
            <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" width={500} height={750} layout="responsive" />
          </div>
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(`http://${context.req.headers.host}/api/movies`);
  const { results } = await response.json();
  return {
    props: { movies: results },
  };
}
