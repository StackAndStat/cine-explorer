import { AlertTriangle, RefreshCcw } from "lucide-react";
import { useMovie } from "../../Contexts/MovieContext";
import { movieService } from "../../Services/movieService";

import styles from "../../styles/Error.module.css";

const ErrorComponent = ({ message = "Something went wrong." }) => {
  const {
    state: { darkMode, category, currentPage, searchQuery },
    dispatch,
  } = useMovie();

  const handleRetry = async () => {
    dispatch({ type: "SET_STATUS", payload: "loading" });
    try {
      const movies = await movieService.fetchMovies(
        category,
        currentPage,
        searchQuery
      );
      dispatch({ type: "SET_MOVIES", payload: movies });
    } catch (error) {
      dispatch({ type: "SET_STATUS", payload: "error" });
    }
  };

  return (
    <div
      className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}
      role="alert"
    >
      <div className={styles.iconWrapper}>
        <AlertTriangle className={styles.icon} />
      </div>

      <h2 className={styles.title}>Oops!</h2>
      <p className={styles.message}>
        {message || "We couldn’t complete your request."}
      </p>

      <div className={styles.actions}>
        <button className={styles.retryBtn} onClick={handleRetry}>
          <RefreshCcw size={18} /> Try Again
        </button>
      </div>

      <p className={styles.supportText}>
        If this keeps happening, please contact support.
      </p>
    </div>
  );
};

export default ErrorComponent;
