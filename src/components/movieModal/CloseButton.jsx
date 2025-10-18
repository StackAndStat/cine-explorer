import { X } from "lucide-react";
import Tooltip from "@mui/material/Tooltip";

import { useMovie } from "../../Contexts/MovieContext";

import styles from "../../styles/CloseButton.module.css";

const CloseButton = () => {
  const { dispatch } = useMovie();

  function handleClick() {
    dispatch({ type: "SET_SELECTED_MOVIE", payload: null });
  }

  return (
    <Tooltip title="Close" arrow>
      <div className={styles.closeBtn} onClick={handleClick}>
        <X size={24} />
      </div>
    </Tooltip>
  );
};

export default CloseButton;
