using DatabaseLayer.Models;
using DatabaseLayer.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace QuizIO_back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserResponseController : Controller
    {
        private readonly ILogger<UserResponseController> _logger;

        UserResponseRepository _userResponseRepository;
        public UserResponseController(ILogger<UserResponseController> logger)
        {
            _logger = logger;

            _userResponseRepository = new UserResponseRepository();
        }

        [HttpGet("username/{username:alphaNumericHyphen}", Name ="GetUserResponseByUsername")]
        public List<UserResponse> GetUserResponseByUsername(string username)
        {
            return _userResponseRepository.RetrieveByUsername(username); ;
        }

        [HttpGet("username/{username:alphaNumericHyphen}/quizID/{quizID:alphaNumericHyphen}", Name = "GetUserResponseByUsernameAndQuizID")]
        public UserResponse GetUserResponseByUsernameAndQuizID(string username, string quizID)
        {
            return _userResponseRepository.Retrieve(username,quizID);
        }

        [HttpGet("quizId/{quizId:alphaNumericHyphen}", Name ="GetUserResponseByQuizId")]
        public UserResponse GetUserResponseByQuizId(string quizId)
        {
            return _userResponseRepository.RetrieveByQuizID(quizId);
        }

        [HttpPost(Name = "InsertUserResponse")]
        public IActionResult InsertUserResponse(UserResponse userResponse)
        {
            try
            {
                var userResponce = new UserResponse() 
                {
                    UserResponseID = Guid.NewGuid().ToString(),
                    QuizID = userResponse.QuizID,
                    Username = userResponse.Username,
                    Answers = userResponse.Answers,
                };

                _userResponseRepository.Insert(userResponce);

                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating user data");
                return BadRequest(ex.Message);
            }
        }
    }
}
