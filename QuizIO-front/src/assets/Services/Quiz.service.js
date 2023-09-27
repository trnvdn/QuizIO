import axios from "axios";

export const QuizService = {
  async getAssignedQuizzes(username) {
    if (username !== undefined && username != null && username !== "") {
      const response = await axios.get(
        `https://localhost:7299/Quiz/assigned/${username}`
      );
      return response.data;
    } else {
      return [];
    }
  },

  async getQuizByID(quizId) {
    if (quizId !== undefined && quizId != null && quizId !== "") {
      const response = await axios.get(
        `https://localhost:7299/Quiz/id/${quizId}`
      );
      return response.data;
    } else {
      return [];
    }
  },

  async updateQuiz(quiz) {
    if (quiz !== undefined && quiz != null && quiz !== "") {
      const response = await axios.post(
        `https://localhost:7299/Quiz/update`,
        quiz
      );
      return response.data;
    } else {
      return [];
    }
  },
};
