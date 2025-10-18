import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMovie } from "../../Contexts/MovieContext";

import styles from "../../styles/Pagination.module.css";

function Pagination() {
  const {
    dispatch,
    state: { currentPage, darkMode },
  } = useMovie();

  function handlePrevious() {
    if (currentPage > 1)
      dispatch({ type: "SET_PAGE", payload: currentPage - 1 });
  }

  function handleNext() {
    dispatch({ type: "SET_PAGE", payload: currentPage + 1 });
  }

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.paginationButton} ${
          currentPage === 1 ? styles.disabled : ""
        } ${darkMode ? styles.dark : styles.light}`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={20} />
      </button>
      <span>Page {currentPage}</span>
      <button
        className={`${styles.paginationButton} ${
          darkMode ? styles.dark : styles.light
        }`}
        onClick={handleNext}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

export default Pagination;
