const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE = import.meta.env.VITE_API_BASE;

export const movieService = {
  async fetchMovies(category, page = 1, search = "", { signal } = {}) {
    let url = "";
    if (search) {
      url = `${API_BASE}/search/movie?api_key=${API_KEY}&query=${search}&page=${page}`;
    } else {
      url = `${API_BASE}/movie/${category}?api_key=${API_KEY}&page=${page}`;
    }

    const res = await fetch(url, { signal });
    const data = await res.json();
    return data.results || [];
  },

  async fetchGenres() {
    const res = await fetch(`${API_BASE}/genre/movie/list?api_key=${API_KEY}`);
    const data = await res.json();
    return data.genres || [];
  },

  async fetchMovieDetails(id) {
    const [movieRes, creditsRes, videosRes, similarRes] = await Promise.all([
      fetch(`${API_BASE}/movie/${id}?api_key=${API_KEY}`),
      fetch(`${API_BASE}/movie/${id}/credits?api_key=${API_KEY}`),
      fetch(`${API_BASE}/movie/${id}/videos?api_key=${API_KEY}`),
      fetch(`${API_BASE}/movie/${id}/similar?api_key=${API_KEY}`),
    ]);

    const movie = await movieRes.json();
    const credits = await creditsRes.json();
    const videos = await videosRes.json();
    const similar = await similarRes.json();

    return {
      movie,
      cast: credits.cast?.slice(0, 10) || [],
      trailers:
        videos.results?.filter((v) => v.type === "Trailer").slice(0, 1) || [],
      similarMovies: similar.results?.slice(0, 6) || [],
    };
  },
};
