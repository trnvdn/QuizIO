import React, { useEffect, useState } from "react";
import { QuizService } from "../../../Services/Quiz.service";
import "./ResponseCard.css";
import { QuizMock } from "../../quiz/QuizMock";
import { format, parseISO } from "date-fns";

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
  const formattedExecutionDate = format(
    parseISO(userResponse.executionDate),
    "MM/dd/yyyy"
  );

  return (
    <div className="response-card">
      <h1 className="quiz-name">{quiz.quizName}</h1>
      <div className="score-and-date">
        <div className="score-container">
          <span className="score-label">Score:</span>
          <span className="score">{userResponse.score}/{quiz.totalPoints}</span>
        </div>
        <p className="execution-date">Date: {formattedExecutionDate}</p>
      </div>
    </div>
  );
};

export default ResponseCard;
