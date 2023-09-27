import { React, useState, useEffect } from "react";
import { QuizService } from "../../Services/Quiz.service";
import { useParams, Link } from "react-router-dom";
import QuizCard from "./quiz-card/QuizCard";
import styles from "./AssignedQuizzes.module.css";

const AssignedQuizzes = () => {
  const { username } = useParams();
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const data = await QuizService.getAssignedQuizzes(username);
        setQuizzes(data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();
  }, [username]);

  return (
    <div>
      <div className={styles.buttonContainer}>
        <h1>Assigned quizzes</h1>
        <Link to={`/responses/${username}`} className={styles.navButton}>Your responses</Link>
      </div>
      {quizzes.map((quiz) => (
        <Link
          to={`/assigned/${username}/${quiz.quizName}/${quiz.quizID}`}
          key={quiz.quizID}
        >
          <QuizCard quiz={quiz} />
        </Link>
      ))}
    </div>
  );
};

export default AssignedQuizzes;
