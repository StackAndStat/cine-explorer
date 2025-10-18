import { useMovie } from "../../Contexts/MovieContext";

import CloseButton from "./CloseButton";
import BackDrop from "./BackDrop";
import DetailsContainer from "./DetailsContainer";

import styles from "../../styles/MovieModal.module.css";

function MovieModal() {
  const {
    state: { darkMode, selectedMovie },
  } = useMovie();

  if (!selectedMovie) return;

  return (
    <div className={styles.modal}>
      <div
        className={`${styles.modalContent} ${
          darkMode ? styles.dark : styles.light
        }`}
      >
        <CloseButton />
        <BackDrop />
        <DetailsContainer />
      </div>
    </div>
  );
}

export default MovieModal;
