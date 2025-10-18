import { useMovie } from "../../Contexts/MovieContext";
import styles from "../../styles/Trailer.module.css";

function Trailer() {
  const {
    state: { trailers },
  } = useMovie();

  if (trailers.length === 0) return;

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Trailer</h3>
      <div className={styles.trailerContainer}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${trailers[0].key}`}
          title="Movie Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.trailer}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Trailer;
