import { useMovie } from "../../Contexts/MovieContext";
import styles from "../../styles/Button.module.css";

function Button({ children, onClick, type, isActive }) {
  const {
    state: { darkMode },
  } = useMovie();

  return (
    <button
      className={`${styles.btn} ${darkMode ? styles.dark : styles.light} ${
        isActive ? styles[type] : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
