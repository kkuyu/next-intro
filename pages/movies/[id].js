import { useRouter } from "next/router";

export default function MoviesDetail() {
  const router = useRouter();
  console.log(router.query.id);
  return <div>MoviesDetail: {router.query.id}</div>;
}
