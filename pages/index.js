import { useEffect, useState } from "react";
import Image from "next/image";
import Seo from "../components/Seo";

export default function Home({ movies }) {
  return (
    <div className="container">
      <Seo title="Home" />
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
          <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" width={500} height={750} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { results } = await (await fetch(`${context.req.headers.referer}/api/movies`)).json();
  return {
    props: { movies: results },
  };
}
