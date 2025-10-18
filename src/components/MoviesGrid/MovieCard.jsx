import { Star } from "lucide-react";
import { Film } from "lucide-react";
import styles from "../../styles/MovieCard.module.css";
import { useMovie } from "../../Contexts/MovieContext";
import { movieService } from "../../Services/movieService";

const IMG_BASE = import.meta.env.VITE_IMG_BASE;

function MovieCard({ movie }) {
  const { dispatch } = useMovie();

  async function handleClick(id) {
    try {
      const { movie, cast, trailers, similarMovies } =
        await movieService.fetchMovieDetails(id);

      dispatch({ type: "SET_SELECTED_MOVIE", payload: movie });
      dispatch({ type: "SET_CAST", payload: cast });
      dispatch({ type: "SET_TRAILERS", payload: trailers });
      dispatch({ type: "SET_SIMILAR_MOVIES", payload: similarMovies });
    } catch (error) {
      dispatch({ type: "SET_STATUS", payload: "error" });
    }
  }

  return (
    <div className={styles.movieCard} onClick={() => handleClick(movie.id)}>
      <div className={styles.movieCardImage}>
        {movie.poster_path ? (
          <img
            src={`${IMG_BASE}/w500${movie.poster_path}`}
            alt={movie.movietitle}
            className={styles.movieImg}
          />
        ) : (
          <Film />
        )}

        <div className={styles.movieOverlay}>
          <div className={styles.movieInfo}>
            <div className={styles.ratingContainer}>
              <Star color="#facc15" fill="#facc15" />
              <span style={{ color: "#ffffff", fontWeight: "600" }}>
                {movie.vote_average?.toFixed(1) || "N/A"}
              </span>
            </div>

            <h3 className={styles.movieTitle}>{movie.title}</h3>
            <p className={styles.movieYear}>
              {new Date(movie.release_date).getFullYear() || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
