import { Film } from "lucide-react";
import { useMovie } from "../../Contexts/MovieContext";

import { movieService } from "../../Services/movieService";

import styles from "../../styles/SimilarMovies.module.css";
const IMG_BASE = import.meta.env.VITE_IMG_BASE;

function SimilarMovies() {
  const { state, dispatch } = useMovie();
  const { similarMovies } = state;

  if (similarMovies.length === 0) return;

  async function handleClick(id) {
    try {
      const data = await movieService.fetchMovieDetails(id);
      const { movie, cast, trailers, similarMovies } = data;
      dispatch({ type: "SET_SELECTED_MOVIE", payload: movie });
      dispatch({ type: "SET_CAST", payload: cast });
      dispatch({ type: "SET_TRAILERS", payload: trailers });
      dispatch({ type: "SET_SIMILAR_MOVIES", payload: similarMovies });
    } catch (error) {
      dispatch({ type: "SET_STATUS", payload: "error" });
    }
  }

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Similar Movies</h3>
      <div className={styles.similarGrid}>
        {similarMovies.map((movie) => (
          <div
            key={movie.id}
            className={styles.similarCard}
            onClick={() => handleClick(movie.id)}
          >
            {movie.poster_path ? (
              <img
                src={`${IMG_BASE}/w185${movie.poster_path}`}
                alt={movie.title}
                className={styles.similarImage}
              />
            ) : (
              <div className={styles.similarPlaceholder}>
                <Film />
              </div>
            )}
            <p className={styles.similarTitle}>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarMovies;
