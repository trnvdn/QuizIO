import axios from "axios";

const API_BASE_URL = "https://localhost:7299";

const validateNonEmptyString = (value) =>
  typeof value === "string" && value.trim() !== "";

export const QuizService = {
  async getAssignedQuizzes(username) {
    if (!validateNonEmptyString(username)) {
      return [];
    }

    try {
      const response = await axios.get(
        `${API_BASE_URL}/Quiz/assigned/${username}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching assigned quizzes:", error);
      return [];
    }
  },

  async getQuizByID(quizId) {
    if (!validateNonEmptyString(quizId)) {
      return [];
    }

    try {
      const response = await axios.get(`${API_BASE_URL}/Quiz/id/${quizId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching quiz by ID:", error);
      return [];
    }
  },

  async updateQuiz(quiz) {
    if (quiz && Object.keys(quiz).length > 0) {
      try {
        const response = await axios.put(`${API_BASE_URL}/Quiz/update`, quiz);
        return response.data;
      } catch (error) {
        console.error("Error updating quiz:", error);
        return [];
      }
    } else {
      return [];
    }
  },
};
