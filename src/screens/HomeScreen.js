import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import requests from "../Request";
import Row from "../Row";

const HomeScreen = () => {
  const [bannerMovieInfo, setBannerMovieInfo] = React.useState();
  const getMovie = (movieInfo) => {
    setBannerMovieInfo(movieInfo);
  };
  return (
    <div className="homeScreen">
      <Nav />

      <Banner movieInfo={bannerMovieInfo} />

      <Row
        title="TRENDING MOVIES"
        fetchUrl={requests.fetchTrendingMovie}
        isLargeRow={true}
        handleMovieClick={getMovie}
      />
      <Row
        title="TRENDING TV SHOWS"
        fetchUrl={requests.fetchTrendingTv}
        isLargeRow={true}
        handleMovieClick={getMovie}
      />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        handleMovieClick={getMovie}
      />
      <Row
        title="TOP RATED"
        fetchUrl={requests.fetchTopRated}
        isLargeRow={true}
        handleMovieClick={getMovie}
      />
    </div>
  );
};

export default HomeScreen;
