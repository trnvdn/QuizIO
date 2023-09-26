using BusinessLogicLayer.Services;
using DatabaseLayer.Models;
using DatabaseLayer.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace QuizIO_back.Controllers;
[ApiController]
[Route("[controller]")]
public class QuizController : Controller
{
    private readonly ILogger<QuizController> _logger;

    private QuizRepository _quizRepository;
    private FindAssignedQuizzes _findAssignedQuizzes;
    public QuizController(ILogger<QuizController> logger)
    {
        _logger = logger;
        _quizRepository = new QuizRepository();
        _findAssignedQuizzes = new FindAssignedQuizzes();
    }
    
    [HttpGet(Name = "GetQuizzes")]
    public List<Quiz> GetQuizzes()
    {
        return _quizRepository.Retrieve();
    }
    
    [HttpGet("id/{id:alphaNumericHyphen}", Name ="GetQuiz")]
    public Quiz GetQuiz(string id)
    {
        return _quizRepository.Retrieve(id);
    }
    
    [HttpGet("quizName/{quizName:alphaNumericHyphen}", Name ="GetQuizByQuizName")]
    public Quiz GetQuizByQuizName(string quizName)
    {
        return _quizRepository.RetrieveByQuizName(quizName);
    }
    
    [HttpGet("assigned/{assigneUsername:alphaNumericHyphen}", Name ="GetAssignedQuizzes")]
    public List<Quiz> GetAssignedQuizzes(string assigneUsername)
    {
        return _findAssignedQuizzes.AssignedQuizzes(assigneUsername);
    }

    [HttpPost(Name = "InsertQuiz")]
    public IActionResult InsertQuiz(Quiz quiz)
    {
        try
        {
            var quizToInsert = new Quiz() 
            {
                QuizName = quiz.QuizName,
                QuizDescription = quiz.QuizDescription,
                Assignes = quiz.Assignes,
                Questions = quiz.Questions,
            };
            _quizRepository.Insert(quizToInsert);

            return Ok();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
}