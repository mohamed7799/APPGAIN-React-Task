import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const MovieDetails = () => {
  const params = useParams();
  const MovieID = params.id;

  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${MovieID}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    console.log(res.data);
    return res.data;
  };

  const { data, isLoading } = useQuery(["MovieDetails"], getMovieDetails);

  return !isLoading ? (
    <div className="md:flex items-center p-5">
      <div className="flex-1">
        <img
          className="m-auto md:h-[500px]"
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt=""
        />
      </div>
      <div className="flex-1">
        <h2 className="font-bold text-2xl md:text-4xl capitalize my-2">
          {data.title}
        </h2>
        <h3 className="text-gray-600 md:text-lg">
          release date: {data.release_date}
        </h3>
        <div>
          <h3 className="font-bold md:text-xl text-lg">Genres</h3>
          <div className="flex gap-2 my-2 items-center text-center">
            {data.genres.map((item: any) => (
              <span className="rounded-full px-3 py-1 text-gray-700 border-2 border-cyan-500">
                {item.name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold md:text-xl text-lg my-2">Summary</h3>
          <p className="leading-relaxed text-gray-700 font-medium">
            {data.overview}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <p className="text-center font-semibold text-xl">Loading...</p>
  );
};

export default MovieDetails;
