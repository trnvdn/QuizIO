import React, { useEffect } from "react";
import styles from "./AssignedQuizzes.module.css";
import { useParams, Link } from "react-router-dom";
import { UserResponseService } from "../../Services/UserResponse.service";
import { useState } from "react";
import ResponseCard from "./response-card/ResponseCard";

const UserResponses = () => {
  const { username } = useParams();
  const [userReponses, setUserResponses] = useState([]);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const data = await UserResponseService.getResponsesByUsername(username);
        setUserResponses(data);
      } catch (error) {
        console.error("Error fetching responses:", error);
      }
    };

    fetchResponses();
  }, [username]);

  return (
    <div>
      <div className={styles.buttonContainer}>
        <h1>Responses</h1>
        <Link to={`/assigned/${username}`} className={styles.navButton}>
          Assigned quizzes
        </Link>
      </div>
      <div>
        {
          userReponses.map((userResponse) => (
            <Link
              to={`/result/${username}/${userResponse.quizID}`}
              key={userResponse.quizID}
            >
              <ResponseCard userResponse={userResponse} />
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default UserResponses;
