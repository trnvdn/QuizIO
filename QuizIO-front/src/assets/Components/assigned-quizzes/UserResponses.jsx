import React, { useEffect, useState } from "react";
import styles from "./AssignedQuizzes.module.css";
import { useParams, Link } from "react-router-dom";
import { UserResponseService } from "../../Services/UserResponse.service";
import ResponseCard from "./response-card/ResponseCard";

const UserResponses = () => {
  const { username } = useParams();
  const [userResponses, setUserResponses] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const data = await UserResponseService.getResponsesByUsername(username);
        setUserResponses(data);
        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching responses:", error);
      }
    };

    fetchResponses();
  }, [username]);

  return (
    <div>
      <div className={styles.buttonContainer}>
        <Link to="/" className={styles.navButton}>Back to main page</Link>
        <h1>Responses</h1>
        <Link to={`/assigned/${username}`} className={styles.navButton}>
          Assigned quizzes
        </Link>
      </div>
      <div>
        {dataLoaded ? (
          userResponses.length === 0 ? (
            <h2 className={styles.EmptyListTitle}>
              No responses available at the moment.
            </h2>
          ) : (
            userResponses.map((userResponse) => (
              <Link
                to={`/result/${username}/${userResponse.quizID}`}
                key={userResponse.quizID}
              >
                <ResponseCard userResponse={userResponse} />
              </Link>
            ))
          )
        ) : (
          console.log("loading")
        )}
      </div>
    </div>
  );
};

export default UserResponses;
