export const QuizMock = {
  getMock() {
    const quizMock = {
      quizID: "",
      quizName: "",
      quizDescription: "",
      assignes: [""],
      questions: [
        {
          questionDetails: "1",
          answers: [
            {
              answerDetails: "1",
              isCorrect: false,
            },
          ],
        },
      ],
      totalPoints: 0,
      quizCreationDate: new Date().toISOString(),
    };
    return quizMock;
  }
};
