import { useMovie } from "../../Contexts/MovieContext";
import styles from "../../styles/MoviesGrid.module.css";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import Loader from "./Loader";
import ErrorComponent from "./Error";

function MoviesGrid() {
  const {
    state: { movies, status },
  } = useMovie();

  return (
    <main className={styles.mainContent}>
      {status === "loading" && <Loader />}
      {status === "error" && <ErrorComponent />}
      {status === "ready" && (
        <>
          <div className={styles.movieGrid}>
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
          {movies.length > 1 && <Pagination />}
        </>
      )}
    </main>
  );
}

export default MoviesGrid;
