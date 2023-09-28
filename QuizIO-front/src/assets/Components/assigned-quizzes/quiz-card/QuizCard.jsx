import React from 'react';
import styles from './QuizCard.module.css';
import { format, parseISO } from "date-fns";

const QuizCard = ({ quiz }) => {
  const formattedQuizCreationDate = format(
    parseISO(quiz.quizCreationDate),
    "MM/dd/yyyy"
  );
  return (
    <div className={styles.Card}>
      <h2 className={styles.QuizName}>{quiz.quizName}</h2>
      <p className={styles.QuizDesc}>{quiz.quizDescription}</p>
      <p className={styles.QuizDate}>Created on: {formattedQuizCreationDate}</p>
    </div>
  );
}

export default QuizCard;
