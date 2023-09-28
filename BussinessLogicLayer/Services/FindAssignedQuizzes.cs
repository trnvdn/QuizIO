using DatabaseLayer.Models;
using DatabaseLayer.Repositories;

namespace BusinessLogicLayer.Services
{
    public class FindAssignedQuizzes
    {
        private readonly QuizRepository _quizRepository;
        private readonly UserResponseRepository _userResponseRepository;

        public FindAssignedQuizzes()
        {
            _quizRepository = new QuizRepository();
            _userResponseRepository = new UserResponseRepository();
        }

        public List<Quiz> AssignedQuizzes(string username)
        {
            var quizzes = _quizRepository.Retrieve();
            var userResponses = _userResponseRepository.Retrieve();
            var assignedQuizzes = new List<Quiz>();

            foreach (var quiz in quizzes)
            {
                if (quiz.Assignes.Contains(username))
                {
                    assignedQuizzes.Add(quiz);
                }
            }

            return assignedQuizzes;
        }
    }
}
