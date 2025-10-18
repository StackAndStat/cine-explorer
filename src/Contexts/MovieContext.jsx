import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { movieService } from "../Services/movieService";

const MovieContext = createContext();

function getWatchList() {
  try {
    const watchlist = localStorage.getItem("watchlist");
    return watchlist ? JSON.parse(watchlist) : [];
  } catch (error) {
    return [];
  }
}

function getFavourite() {
  try {
    const favourite = localStorage.getItem("favourite");
    return favourite ? JSON.parse(favourite) : [];
  } catch (error) {
    return [];
  }
}

function getMode() {
  try {
    const mode = localStorage.getItem("mode");
    return mode ? JSON.parse(mode) : false;
  } catch (error) {
    return false;
  }
}

const initialValue = {
  movies: [],
  searchQuery: "",
  category: "popular",
  currentPage: 1,
  status: "loading",
  selectedMovie: null,
  cast: [],
  trailers: [],
  similarMovies: [],
  darkMode: getMode(),
  watchlist: getWatchList(),
  favourite: getFavourite(),
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload,
        status: "ready",
        error: "",
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
        category: action.payload ? "search" : "popular",
        currentPage: 1,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
        searchQuery: "",
        currentPage: 1,
      };
    case "SET_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
      };
    case "SET_SELECTED_MOVIE":
      return {
        ...state,
        selectedMovie: action.payload,
      };
    case "SET_CAST":
      return {
        ...state,
        cast: action.payload,
      };
    case "SET_TRAILERS":
      return {
        ...state,
        trailers: action.payload,
      };
    case "SET_SIMILAR_MOVIES":
      return {
        ...state,
        similarMovies: action.payload,
      };
    case "SET_DARK_MODE":
      return {
        ...state,
        darkMode: action.payload,
      };
    case "SET_WATCH_LIST":
      return {
        ...state,
        watchlist: action.payload,
      };
    case "SET_FAVOURITE":
      return {
        ...state,
        favourite: action.payload,
      };

    default:
      return state;
  }
}

function MovieProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    const controller = new AbortController();

    async function loadMovies() {
      const signal = controller.signal;
      dispatch({ type: "SET_STATUS", payload: "loading" });
      try {
        const movies = await movieService.fetchMovies(
          state.category,
          state.currentPage,
          state.searchQuery,
          { signal }
        );
        dispatch({ type: "SET_MOVIES", payload: movies });
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }
        dispatch({ type: "SET_STATUS", payload: "error" });
      }
    }

    loadMovies();

    return () => {
      controller.abort();
    };
  }, [state.category, state.currentPage, state.searchQuery]);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state.watchlist]);

  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(state.favourite));
  }, [state.favourite]);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(state.darkMode));
    document.body.classList.toggle("dark", state.darkMode);
  }, [state.darkMode]);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
}

function useMovie() {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useMovie must be used within a MovieProvider");
  }
  return context;
}

export { MovieProvider, useMovie };
