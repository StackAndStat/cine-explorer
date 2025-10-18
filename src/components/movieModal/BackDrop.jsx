import { useMovie } from "../../Contexts/MovieContext";

import styles from "../../styles/BackDrop.module.css";

const IMG_BASE = import.meta.env.VITE_IMG_BASE;

function BackDrop() {
  const {
    state: { selectedMovie },
  } = useMovie();

  return (
    <>
      {selectedMovie.backdrop_path && (
        <div className={styles.backdrop}>
          <img
            src={`${IMG_BASE}/original${selectedMovie.backdrop_path}`}
            alt={selectedMovie.title}
            className={styles.backdropImg}
          />
          <div className={styles.backdropGradient}></div>
        </div>
      )}
    </>
  );
}

export default BackDrop;
