import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import MoviesList from "../components/MoviesList/MoviesList";

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Home = () => {
  const getPopularMovies = async ({ queryKey }: any) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&page=${queryKey[1]}`
    );
    return res.data;
  };
  const [page, setPage] = useState(3);
  const { data, isLoading } = useQuery(
    ["popularMovies", page],
    getPopularMovies
  );

  return (
    <div className="p-5">
      <h2 className="font-bold text-2xl mb-5">Popular Movies</h2>

      <div className="p-6 flex justify-center gap-2 my-4 flex-wrap">
        {pages.map((item) => (
          <span
            onClick={() => setPage(item)}
            className={`pagination-number ${
              item === page ? "bg-cyan-500 text-white" : ""
            }`}
          >
            {item}
          </span>
        ))}
      </div>
      {!isLoading ? (
        <MoviesList
          movieList={data?.results.map((item: any) => ({
            poster: item.poster_path,
            title: item.title,
            id: `${item.id}`,
          }))}
        ></MoviesList>
      ) : (
        <p className="text-center font-semibold text-xl">Loading...</p>
      )}
    </div>
  );
};

export default Home;
