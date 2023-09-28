import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserResponseService } from "../../Services/UserResponse.service";
import { QuizService } from "../../Services/Quiz.service";
import ResultCard from "./ResultCard";
import styles from "./ResultCard.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { UserResponseMock } from "../quiz/UserResponseMock";

const UserResponse = () => {
  const { username, quizID } = useParams();
  const [userResponse, setUserResponse] = useState(UserResponseMock.getMockByUsername());
  const [quiz, setQuiz] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const [responseData, quizData] = await Promise.all([
          UserResponseService.getResponseByUsernameAndQuizID(username, quizID),
          QuizService.getQuizByID(quizID),
        ]);

        setUserResponse(responseData);
        setQuiz(quizData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [username, quizID]);

  return (
    <div>
      <Link to={`/assigned/${username}`} className={styles.backButton}>
        <ArrowBackIcon style={{ fontSize: "40px", color: "black" }} />
      </Link>
      {quiz ? (
        <ResultCard userResponse={userResponse} quiz={quiz} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
);

};

export default UserResponse;
