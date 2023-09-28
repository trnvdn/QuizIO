import React from "react";
import styles from "./ResultCard.module.css";
import { format, parseISO } from "date-fns";
const ResultCard = ({ userResponse, quiz }) => {
  const formattedQuizCreationDate = format(
    parseISO(quiz.quizCreationDate),
    "MM/dd/yyyy"
  );
  const formattedExecutionDate = format(
    parseISO(userResponse.executionDate),
    "MM/dd/yyyy"
  );
  return (
    <div className={styles.resultCardContainer}>
      <div className={styles.resultCard}>
        <h1 className={styles.quizTitle}>{quiz.quizName}</h1>
        <div className={styles.userInfo}>
          <h2>Assigned to: {userResponse.username}</h2>
          <h2>Score: {userResponse.score}/{quiz.totalPoints}</h2>
        </div>
        <p className={styles.quizDescription}>{quiz.quizDescription}</p>
        <div className={styles.dateInfo}>
          <p>Quiz Created: {formattedQuizCreationDate}</p>
          <p>Execution Date: {formattedExecutionDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
