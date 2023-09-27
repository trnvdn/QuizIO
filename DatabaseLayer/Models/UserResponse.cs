using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;

namespace DatabaseLayer.Models
{
    public class UserResponse
    {
        public string UserResponseID { get; set; }
        public string QuizID { get; set; }
        public string Username { get; set; }

        [NotMapped]
        public List<Answer> Answers { get; set; } 

        internal string AnswersJSON
        {
            get => JsonConvert.SerializeObject(Answers);
            set => Answers = JsonConvert.DeserializeObject<List<Answer>>(value);
        }

        public double Score
        {
            get => Answers != null ? Answers.Count(x => x.IsCorrect) : 0; 
        }

        public DateTime ExecutionDate { get; private set; }

        public UserResponse()
        {
            ExecutionDate = DateTime.Now;
        }
    }
}
