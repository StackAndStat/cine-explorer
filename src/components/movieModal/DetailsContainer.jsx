import { Calendar, Clock, Heart, Play, Star } from "lucide-react";
import { useMovie } from "../../Contexts/MovieContext";

import Overview from "./Overview";
import Button from "./Button";
import Cast from "./Cast";
import Trailer from "./Trailer";
import SimilarMovies from "./SimilarMovies";

import styles from "../../styles/DetailsContainer.module.css";

const IMG_BASE = import.meta.env.VITE_IMG_BASE;

function DetailsContainer() {
  const {
    state: { selectedMovie, darkMode, watchlist, favourite },
    dispatch,
  } = useMovie();

  function handleWatchList(movie) {
    const newWatchlist = watchlist.some((w) => w.id === movie.id)
      ? watchlist.filter((w) => w.id !== movie.id)
      : [...watchlist, movie];

    dispatch({ type: "SET_WATCH_LIST", payload: newWatchlist });
  }

  function handleFavourite(movie) {
    const newFavourite = favourite.some((m) => m.id === movie.id)
      ? favourite.filter((m) => m.id !== movie.id)
      : [...favourite, movie];
    dispatch({ type: "SET_FAVOURITE", payload: newFavourite });
  }

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsTop}>
        {selectedMovie.poster_path && (
          <img
            src={`${IMG_BASE}/w500${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
            className={styles.poster}
          />
        )}

        <div className={styles.detailsInfo}>
          <h2 className={styles.detailsTitle}>{selectedMovie.title}</h2>
          {selectedMovie.tagline && (
            <p
              className={`${styles.tagline} ${
                darkMode ? styles.taglineDark : styles.taglineLight
              }`}
            >
              "{selectedMovie.tagline}"
            </p>
          )}

          {/* stat container */}

          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <Star color="#facc15" fill="#facc15" size={20} />
              <span className={styles.rating}>
                {selectedMovie.vote_average?.toFixed(1)}
              </span>
              <span
                className={`${
                  darkMode ? styles.voteCountDark : styles.voteCountLight
                }`}
              >
                ({selectedMovie.vote_count} votes)
              </span>
            </div>
            <div className={styles.statItem}>
              <Clock size={20} color={darkMode ? "#9ca3af" : "#6b7280"} />
              <span>{selectedMovie.runtime} min</span>
            </div>
            <div className={styles.statItem}>
              <Calendar size={20} color={darkMode ? "#9ca3af" : "#6b7280"} />
              <span>{selectedMovie.release_date}</span>
            </div>
          </div>

          {/* movieActionButton */}

          <div className={styles.buttonContainer}>
            <Button
              type="watchlist"
              onClick={() => handleWatchList(selectedMovie)}
              isActive={watchlist.some(
                (movie) => movie.id === selectedMovie.id
              )}
            >
              <Play size={20} />
              <span>Watchlist</span>
            </Button>

            <Button
              type="favourite"
              onClick={() => handleFavourite(selectedMovie)}
              isActive={favourite.some(
                (movie) => movie.id === selectedMovie.id
              )}
            >
              <Heart
                size={20}
                fill={
                  favourite.some((f) => f.id === selectedMovie.id)
                    ? "white"
                    : "transparent"
                }
              />
              <span>Favourite</span>
            </Button>
          </div>

          {/* genres container */}

          <div className={styles.genresContainer}>
            {selectedMovie.genres?.map((genre) => (
              <span
                key={genre.id}
                className={`${styles.genreTag} ${
                  darkMode ? styles.genreTagDark : styles.genreTagLight
                }`}
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Overview />
      <Cast />
      <Trailer />
      <SimilarMovies />
    </div>
  );
}

export default DetailsContainer;
