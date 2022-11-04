const API_KEY = "b0968ed5ca24dbeb27a655e1553dd257";
const MOVIE_ID = 436270;

const getVideoRequest = `https://api.themoviedb.org/3/movie/${MOVIE_ID}/videos?api_key=${API_KEY}&language=fr-fr`;

const fr = {
  id: 436270,
  results: [
    {
      iso_639_1: "fr",
      iso_3166_1: "FR",
      name: "Black Adam - Bande-annonce officielle 2 (VF) - Dwayne Johnson, Pierce Brosnan",
      key: "N1RSz0B7VJw",
      site: "YouTube",
      size: 1080,
      type: "Trailer",
      official: true,
      published_at: "2022-09-09T00:00:35.000Z",
      id: "631a9815a5743d008419eedd",
    },
    {
      iso_639_1: "fr",
      iso_3166_1: "FR",
      name: "Black Adam - Comic-Con Sneak Peek (VF) - Dwayne Johnson, Pierce Brosnan",
      key: "UVzWKYa4_-0",
      site: "YouTube",
      size: 1080,
      type: "Trailer",
      official: true,
      published_at: "2022-07-23T18:20:46.000Z",
      id: "62dc5ec1ea84c7004fc613a1",
    },
    {
      iso_639_1: "fr",
      iso_3166_1: "FR",
      name: "Black Adam – Bande annonce officielle 1 (VF)",
      key: "qNqJkymV2Jk",
      site: "YouTube",
      size: 1080,
      type: "Trailer",
      official: true,
      published_at: "2022-06-08T13:00:33.000Z",
      id: "62adee6109c24c0051aff23e",
    },
  ],
};
