const API_KEY = "b0968ed5ca24dbeb27a655e1553dd257";

const requests = {
  fetchTrendingAll: `/trending/all/week?api_key=${API_KEY}&language=fr-fr`,
  fetchTrendingMovie: `/trending/movie/week?api_key=${API_KEY}&language=fr-fr`,
  fetchTrendingTv: `/trending/tv/week?api_key=${API_KEY}&language=fr-fr`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=fr-fr`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=fr-fr`,
  fetchDiscoverMovie: `/discover/movie?api_key=${API_KEY}&language=fr-fr&sort_by=popularity.desc&include_adult=false`,
  fetchDiscoverTv: `/discover/tv?api_key=${API_KEY}&language=fr-fr&sort_by=popularity.desc&include_adult=false`,
  fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
};

export const getTeaserLink = async (movieId, mediaType, lang = "fr-fr") => {
  const teaserUrl = `https://api.themoviedb.org/3/${mediaType}/${movieId}/videos?api_key=${API_KEY}&language=${lang}`;
  const req = await fetch(teaserUrl);
  const res = await req.json();
  const videos = res.results;
  const youtubeTeasers = videos.filter((it) => {
    if (
      (it.type.toLowerCase() === "trailer" ||
        it.type.toLowerCase() === "teaser") &&
      it.site.toLowerCase() === "youtube"
    ) {
      return true;
    }
    return false;
  });
  console.log({ res });
  console.log({ videos });
  console.log({ youtubeTeasers });
  const linkToReturn =
    "https://www.youtube.com/watch?v=" + youtubeTeasers[0]?.key;
  if (youtubeTeasers[0]?.key !== undefined) {
    return linkToReturn;
  } else {
    throw new Error(
      "Erreur : Aucun trailer n'est disponible pour cette oeuvre"
    );
  }
};

export default requests;
