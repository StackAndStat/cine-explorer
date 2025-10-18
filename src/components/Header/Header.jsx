import { Film } from "lucide-react";

import { useMovie } from "../../Contexts/MovieContext";

import SearchBar from "./SearchBar";
import Toggle from "./Toggle";
import styles from "../../styles/Header.module.css";
import CategoryTabs from "./CategoryTabs";

function Header() {
  const {
    state: { darkMode },
  } = useMovie();
  return (
    <header
      className={`${styles.header} ${darkMode ? styles.dark : styles.light}`}
    >
      <div className={styles.headerContainer}>
        <div className={styles.headerTop}>
          <div className={styles.logo}>
            <Film color="#60a5fa" size={25} />
            <h1 className={styles.logoText}>CineExplorer</h1>
          </div>
          <SearchBar />
          <Toggle />
        </div>

        <CategoryTabs />
      </div>
    </header>
  );
}

export default Header;
