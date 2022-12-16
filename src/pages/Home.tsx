import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MoviesList from "../components/MoviesList/MoviesList";

const Home = () => {
  const getPopularMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return res.data;
  };

  const { data, isLoading } = useQuery(["popularMovies"], getPopularMovies);

  return (
    <div className="p-5">
      <h2 className="font-bold text-2xl mb-5">Popular Movies</h2>
      {!isLoading ? (
        <MoviesList
          movieList={data?.results.map((item: any) => ({
            poster: item.poster_path,
            title: item.title,
            id: `${item.id}`,
          }))}
        ></MoviesList>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
