import React from 'react';
import styles from './globalQuiz.module.css';

const Answer = ({ answer, userResponse, setUserResponse, handleClickQuestion }) => {
  const handleClick = () => {
    if (!userResponse.answers) {
      userResponse.answers = [];
    }

    const existingAnswer = userResponse.answers.find(
      (a) => a.answerDetails === answer.answerDetails
    );

    if (existingAnswer) {
      existingAnswer.isCorrect = answer.isCorrect;
    } else {
      userResponse.answers.push({ ...answer, answerDetails: answer.answerDetails, isCorrect: answer.isCorrect });
    }

    setUserResponse({ ...userResponse });

    handleClickQuestion(); 
  };

  return (
    <div className={styles.answerContainer}>
      <button onClick={handleClick} className={styles.answerButton}>
        <p className={styles.answerText}>{answer.answerDetails}</p>
      </button>
    </div>
  );
};


export default Answer;
