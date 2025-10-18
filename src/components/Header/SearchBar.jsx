import { Search } from "lucide-react";
import { useMovie } from "../../Contexts/MovieContext";

import styles from "../../styles/SearchBar.module.css";
import { useEffect } from "react";
import { useRef } from "react";

function SearchBar() {
  const {
    state: { darkMode },
    dispatch,
  } = useMovie();

  const inputRef = useRef(null);

  useEffect(() => {
    function callback(event) {
      if (event.key === "Enter") {
        inputRef.current.focus();
      }
    }
    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, []);

  return (
    <div className={styles.searchContainer} >
      <div className={styles.input}>
        <Search
          className={`${styles.searchIcon} ${
            darkMode ? styles.searchIconDark : styles.searchIconlight
          }`}
          size={20}
        />
        <input
          type="text"
          placeholder="Search movies..."
          className={`${styles.searchInput} ${
            darkMode ? styles.inputDarkMode : styles.inputLightMode
          }`}
          onChange={(event) =>
            dispatch({
              type: "SET_SEARCH_QUERY",
              payload: event.target.value.trim(),
            })
          }
          ref={inputRef}
        />
      </div>
    </div>
  );
}

export default SearchBar;
