import { Film } from "lucide-react";

import { useMovie } from "../../Contexts/MovieContext";

import styles from "../../styles/Cast.module.css";

const IMG_BASE = import.meta.env.VITE_IMG_BASE;

function Cast() {
  const {
    state: { cast, darkMode },
  } = useMovie();

  if (cast.length === 0) return;

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Cast</h3>
      <div className={styles.castGrid}>
        {cast.map((person) => (
          <div
            key={person.id}
            className={`${styles.castCard} ${
              darkMode ? styles.castCardDark : styles.castCardLight
            }`}
          >
            {person.profile_path ? (
              <img
                src={`${IMG_BASE}/w185${person.profile_path}`}
                alt={person.name}
                className={styles.castImage}
              />
            ) : (
              <div
                className={`${styles.castPlaceholder} ${
                  darkMode
                    ? styles.castPlaceholderDark
                    : styles.castPlaceholderLight
                }`}
              >
                <Film />
              </div>
            )}
            <p className={styles.castName}>{person.name}</p>
            <p
              className={`${styles.castCharacter} ${
                darkMode ? styles.castCharacterDark : styles.castCharacterLight
              }`}
            >
              As {person.character}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cast;
