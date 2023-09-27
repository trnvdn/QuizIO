import React from 'react';
import styles from './QuizCard.module.css';

const QuizCard = ({ quiz }) => {
  return (
    <div className={styles.Card}>
      <h2 className={styles.QuizName}>{quiz.quizName}</h2>
      <p className={styles.QuizDesc}>{quiz.quizDescription}</p>
      <p className={styles.QuizDate}>Created on: {quiz.quizCreationDate}</p>
    </div>
  );
}

export default QuizCard;
