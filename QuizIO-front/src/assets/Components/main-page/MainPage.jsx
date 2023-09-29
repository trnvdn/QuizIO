import React, { useState } from "react";
import styles from "./MainPage.module.css";
import LoginIcon from "@mui/icons-material/Login";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
import UsernameDialog from "./UsernameDialog";

const MainPage = () => {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const [openCreateQuizDialog, setOpenCreateQuizDialog] = useState(false);

  return (
    <>
      <ul className={styles.Block}>
        <li className={styles.Content}>
          <div>
            <button
              className={styles.transparentButton}
              onClick={() => setOpenLoginDialog(true)}
            >
              <LoginIcon style={{ fontSize: "60px", marginRight: "10%" }} />
              <h2 className={styles.Inscription}>LOG IN BY USERNAME</h2>
            </button>
            <UsernameDialog
              open={openLoginDialog}
              setOpen={setOpenLoginDialog}
              text={
                "To log in to this website, please enter your username here."
              }
            />
          </div>
        </li>

        <li className={styles.Content}>
          <div>
            <button
              className={styles.transparentButton}
              onClick={() => setOpenCreateQuizDialog(true)}
            >
              <AddCircleOutlineIcon style={{ fontSize: "60px" }} />
              <h2 className={styles.Inscription}>CREATE NEW QUIZ</h2>
            </button>
            <UsernameDialog
              open={openCreateQuizDialog}
              setOpen={setOpenCreateQuizDialog}
              text={"Enter username assignee for quiz."}
            />
          </div>
        </li>
      </ul>
    </>
  );
};

export default MainPage;
