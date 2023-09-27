import React, { useEffect, useState } from "react";
import { QuizService } from "../../../Services/Quiz.service";
import "./ResponseCard.css";
import { QuizMock } from "../../quiz/QuizMock";

const ResponseCard = ({ userResponse }) => {
  const quizMock = QuizMock.getMock();
  const [quiz, setQuiz] = useState([quizMock]);
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await QuizService.getQuizByID(userResponse.quizID);
        setQuiz(data);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };
  
    fetchQuiz();
  }, [userResponse.quizID, userResponse]);
  

  return (
    <div className="response-card">
      <h1 className="quiz-name">{quiz.quizName}</h1>
      <h2 className="score">{userResponse.score}</h2>
      <p className="execution-date">{userResponse.executionDate}</p>
    </div>
  );
};

export default ResponseCard;
