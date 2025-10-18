import { TrendingUp } from "lucide-react";
import { Star } from "lucide-react";
import { Calendar } from "lucide-react";
import { Play } from "lucide-react";

import styles from "../../styles/CategoryTabs.module.css";
import { useMovie } from "../../Contexts/MovieContext";

const categories = [
  { id: "popular", label: "Popular", icon: TrendingUp },
  { id: "top_rated", label: "Top Rated", icon: Star },
  { id: "upcoming", label: "Upcoming", icon: Calendar },
  { id: "now_playing", label: "Now Playing", icon: Play },
];

function CategoryTabs() {
  const {
    state: { darkMode, category },
    dispatch,
  } = useMovie();

  function handleClick(id) {
    dispatch({ type: "SET_CATEGORY", payload: id });
  }

  return (
    <div className={styles.categoryTabs}>
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`${styles.categoryBtn} ${
            darkMode ? styles.darkMode : styles.lightMode
          } ${category === cat.id ? styles.active : ""}`}
          onClick={() => {
            handleClick(cat.id);
          }}
        >
          <cat.icon size={16} /> {cat.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
