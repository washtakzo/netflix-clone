import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests, { getTeaserLink } from "./Request";

const BASE_BANNER_URL = "https://image.tmdb.org/t/p/original";

function truncate(text, n) {
  return text?.length > 0 ? text?.substring(0, n - 1) + "..." : text;
}

const Banner = ({ movieInfo }) => {
  const [movie, setMovie] = useState(movieInfo);

  const handlePlay = async () => {
    let teaserLink;
    const randomTypeFallback = Math.random() > 0.5 ? "movie" : "tv";
    try {
      console.log({ movie });
      teaserLink = await getTeaserLink(
        movie.id,
        movie.media_type || randomTypeFallback,
        "fr-fr"
      );
      console.log({ teaserLink });
      window.open(teaserLink, "_blank").focus();
    } catch (error) {
      console.warn(
        "Teaser non disponible en français, tentative de récupération en anglais ..."
      );
    }
    if (!teaserLink) {
      try {
        console.log({ movie });
        teaserLink = await getTeaserLink(
          movie.id,
          movie.media_type || randomTypeFallback,
          "en-US"
        );
        console.log({ teaserLink });
        window.open(teaserLink, "_blank").focus();
      } catch (error) {
        alert(error.message);
      }
    }
  };

  useEffect(() => {
    if (movie === undefined) {
      async function fetchDate() {
        const request = await axios.get(requests.fetchTrendingAll);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        return request;
      }
      fetchDate();
    } else {
      setMovie(movieInfo);
    }
  }, [movieInfo]);

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
          <button className="banner__button" onClick={handlePlay}>
            Play
          </button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner__description">
          {movie?.overview
            ? truncate(movie.overview, 300)
            : "description indisponible"}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
