import React, { useState, useEffect } from "react";
import { QuizService } from "../../Services/Quiz.service";
import { useParams, Link } from "react-router-dom";
import QuizCard from "./quiz-card/QuizCard";
import styles from "./AssignedQuizzes.module.css";

const AssignedQuizzes = () => {
  const { username } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const data = await QuizService.getAssignedQuizzes(username);
        setQuizzes(data);
        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();
  }, [username]);

  return (
    <div>
      <div className={styles.buttonContainer}>
        <Link to="/" className={styles.navButton}>Back to main page</Link>
        <h1>Assigned quizzes</h1>
        <Link to={`/responses/${username}`} className={styles.navButton}>
          Your responses
        </Link>
      </div>
      {dataLoaded ? (
        quizzes.length === 0 ? (
          <h2 className={styles.EmptyListTitle}>
            There are currently no tests available for you. Try usernames like
            test,user1,user2,user3,user4
          </h2>
        ) : (
          quizzes.map((quiz) => (
            <Link
              to={`/assigned/${username}/${quiz.quizName}/${quiz.quizID}`}
              key={quiz.quizID}
            >
              <QuizCard quiz={quiz} />
            </Link>
          ))
        )
      ) : (
        console.log("loading")
      )}
    </div>
  );
};

export default AssignedQuizzes;
