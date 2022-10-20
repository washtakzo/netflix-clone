import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

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
        {movies?.map((movie) => {
          //if no image link available return without trying to make an image
          if (isLargeRow && !movie.poster_path) return;
          if (!isLargeRow && !movie.backdrop_path) return;
          return (
            <img
              className={`row__image ${isLargeRow && "row__image__large"}`}
              key={movie.id}
              src={`${BASE_IMAGE_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Row;
