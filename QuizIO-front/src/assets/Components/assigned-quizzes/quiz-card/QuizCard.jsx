import React from 'react';
import styles from './QuizCard.module.css';
import { format, parseISO } from 'date-fns';

const QuizCard = ({ quiz }) => {
  const { quizName, quizDescription, quizCreationDate } = quiz;

  const formattedQuizCreationDate = format(
    parseISO(quizCreationDate),
    'MM/dd/yyyy'
  );

  return (
    <div className={styles.Card}>
      <h2 className={styles.QuizName}>{quizName}</h2>
      <p className={styles.QuizDesc}>{quizDescription}</p>
      <p className={styles.QuizDate}>Created on: {formattedQuizCreationDate}</p>
    </div>
  );
};

export default QuizCard;
