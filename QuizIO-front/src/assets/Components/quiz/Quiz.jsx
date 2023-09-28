import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QuizService } from "../../Services/Quiz.service";
import Answer from "./Answer";
import styles from "./globalQuiz.module.css";
import { UserResponseMock } from "./UserResponseMock";
import { QuizMock } from "./QuizMock";
import UserResponseService from "../../Services/UserResponse.service";

const Quiz = () => {
  const { username, quizID } = useParams();
  const navigate = useNavigate();
  
  const userResponseMock = UserResponseMock.getMock(quizID,username);
  const initialQuiz = QuizMock.getMock();
  
  const [quiz, setQuiz] = useState(initialQuiz);
  const [userResponse, setUserResponse] = useState(userResponseMock);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await QuizService.getQuizByID(quizID);
        setQuiz(data);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };

    fetchQuiz();
  }, [quizID]);

  const handleAnswerQuestion = async () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (currentQuestionIndex === quiz.questions.length - 1) {
      const updatedAssignes = quiz.assignes.filter((user) => user !== username);
      const updatedQuiz = { ...quiz, assignes: updatedAssignes };
      try {
        await UserResponseService.insertResponse(userResponse);
        await QuizService.updateQuiz(updatedQuiz);
        navigate(`/result/${username}/${quizID}/`);
      } catch (error) {
        console.error("Error inserting response:", error);
      }
    }
  };
  

  const currentQuestion = quiz.questions
    ? quiz.questions[currentQuestionIndex]
    : null;

  return (
    <div>
      <h1 className={styles.quizTitle}>{quiz.quizName}</h1>
      {currentQuestion && (
        <div className={styles.questionContainer}>
          <p className={styles.questionText}>
            {currentQuestion.questionDetails}
          </p>
          <div className={styles.answersContainer}>
            {currentQuestion.answers.map((answer, index) => (
              <Answer
                key={index}
                answer={answer}
                userResponse={userResponse}
                setUserResponse={setUserResponse}
                handleClickQuestion={handleAnswerQuestion}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
