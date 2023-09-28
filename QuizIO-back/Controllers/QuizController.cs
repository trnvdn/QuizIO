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
    
    [HttpGet("id/{id:alphaNumericHyphen}", Name ="GetQuiz")]
    public Quiz GetQuiz(string id)
    {
        return _quizRepository.Retrieve(id);
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
            _quizRepository.Insert(quiz);
            return Ok();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPost("update", Name = "UpdateQuiz")]
    public IActionResult UpdateQuiz(Quiz quiz)
    {
        try
        {
            _quizRepository.Update(quiz);
            return Ok();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error quiz upd");
            return BadRequest(ex.Message);
        }
    }
}