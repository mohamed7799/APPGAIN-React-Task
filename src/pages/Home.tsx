import MoviesList from "../components/MoviesList/MoviesList";

const Home = () => {
  return (
    <div className="p-5">
      <h2 className="font-bold text-2xl mb-5">Popular Movies</h2>
      <MoviesList></MoviesList>
    </div>
  );
};

export default Home;
