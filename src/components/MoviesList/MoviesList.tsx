import { MovieHome } from "../../interfaces/MovieHomeInterface";
import MovieItem from "./MovieItem";

interface Props {
  movieList: MovieHome[];
}

const MoviesList = ({ movieList }: Props) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
      {movieList.map((item) => (
        <MovieItem key={item.id} movie={item}></MovieItem>
      ))}
    </ul>
  );
};

export default MoviesList;
