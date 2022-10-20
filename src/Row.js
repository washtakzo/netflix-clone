import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchDate() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchDate();
  }, []);

  console.log(movies);

  return (
    <section className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__images">
        {movies?.map((movie) => (
          <img
            className={`row__image ${isLargeRow && "row__image__landscape"}`}
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original${
              isLargeRow ? movie?.backdrop_path : movie?.poster_path
            }`}
            alt="movie card"
          />
        ))}
      </div>
    </section>
  );
};

export default Row;
