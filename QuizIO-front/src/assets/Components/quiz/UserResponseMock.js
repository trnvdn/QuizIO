export const UserResponseMock = {
    getMock(quizId, username) {
      const mockUserResponse = {
        userResponseID: "",
        quizID: quizId,
        username,
        answers: [],
        score: 0,
        executionDate: new Date(),
      };
      return mockUserResponse;
    },
    getMockByUsername(username)
    {
      const mockUserResponse = {
        userResponseID: "",
        quizID: "",
        username,
        answers: [],
        score: 0,
        executionDate: new Date(),
      };
      return mockUserResponse;
    }
  };
  