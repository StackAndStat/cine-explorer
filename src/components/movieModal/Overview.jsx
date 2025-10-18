import { useMovie } from "../../Contexts/MovieContext";
import styles from "../../styles/Overview.module.css";

function Overview() {
  const {
    state: { selectedMovie, darkMode },
  } = useMovie();

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Overview</h3>
      <p
        className={`${styles.overview} ${
          darkMode ? styles.overviewDark : styles.overviewLight
        }`}
      >
        {selectedMovie.overview}
      </p>
    </div>
  );
}

export default Overview;
