import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Request";

const BASE_BANNER_URL = "https://image.tmdb.org/t/p/original";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchDate() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchDate();
  }, []);

  function truncate(text, n) {
    return text?.length > 0 ? text?.substring(0, n - 1) + "..." : text;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${
          movie?.backdrop_path && BASE_BANNER_URL + movie.backdrop_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        objectFit: "contain",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            movie?.overview ? movie.overview : "description indisponible",
            200
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
