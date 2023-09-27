export const UserResponseMock = {
    getMock(quizId, username) {
      const mockUserResponse = {
        quizID: quizId,
        username: username,
        answers: [],
        score: 0,
        executionDate: new Date().toISOString(),
      };
      return mockUserResponse;
    },
    getMock(username)
    {
      const mockUserResponse = {
        quizID: "",
        username: username,
        answers: [],
        score: 0,
        executionDate: new Date().toISOString(),
      };
      return mockUserResponse;
    }
  };
  