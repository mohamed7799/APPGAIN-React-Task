import { Link } from "react-router-dom";
import { MovieHome } from "../../interfaces/MovieHomeInterface";

interface Props {
  movie: MovieHome;
}

const MovieItem = ({ movie }: Props) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <li>
        <img
          className="rounded-md m-auto"
          src={`https://image.tmdb.org/t/p/w185${movie.poster}`}
          alt="poster"
        />

        <h3 className="p-4 text-center font-medium capitalize">
          {movie.title}
        </h3>
      </li>
    </Link>
  );
};

export default MovieItem;
