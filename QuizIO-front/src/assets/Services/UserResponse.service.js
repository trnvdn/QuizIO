import axios from "axios";

const API_BASE_URL = "https://localhost:7299";

const validateNonEmptyString = (value) =>
  typeof value === "string" && value.trim() !== "";

export const UserResponseService = {
  async getResponsesByUsername(username) {
    if (!validateNonEmptyString(username)) {
      return [];
    }

    try {
      const response = await axios.get(
        `${API_BASE_URL}/UserResponse/username/${username}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user responses by username:", error);
      return [];
    }
  },

  async getResponseByUsernameAndQuizID(username, quizId) {
    if (!validateNonEmptyString(username) || !validateNonEmptyString(quizId)) {
      return [];
    }

    try {
      const response = await axios.get(
        `${API_BASE_URL}/UserResponse/username/${username}/quizID/${quizId}`
      );
      return response.data;
    } catch (error) {
      console.error(
        "Error fetching user response by username and quiz ID:",
        error
      );
      return [];
    }
  },

  async insertResponse(userResponse) {
    if (userResponse && Object.keys(userResponse).length > 0) {
      try {
        const dataToInsert = {
          userResponseID: userResponse.userResponseID,
          quizID: userResponse.quizID,
          username: userResponse.username,
          answers: userResponse.answers,
        };

        const response = await axios.post(
          `${API_BASE_URL}/UserResponse`,
          dataToInsert
        );
        return response.data;
      } catch (error) {
        console.error("Error inserting user response:", error);
        return [];
      }
    } else {
      return [];
    }
  },
};

export default UserResponseService;
