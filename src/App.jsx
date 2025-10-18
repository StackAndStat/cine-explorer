import { useMovie } from "./Contexts/MovieContext";
import Header from "./components/Header/Header";
import MoviesGrid from "./components/MoviesGrid/MoviesGrid";
import MovieModal from "./components/movieModal/MovieModal";

import styles from "./styles/App.module.css";

function App() {
  const {
    state: { darkMode },
  } = useMovie();

  return (
    <div className={`${styles.app} ${darkMode ? styles.dark : styles.light}`}>
      <Header />
      <MoviesGrid />
      <MovieModal />
    </div>
  );
}

export default App;
