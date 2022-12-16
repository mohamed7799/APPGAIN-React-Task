import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  return <div>this is MovieDetails {params.id}</div>;
};

export default MovieDetails;
