using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;

namespace DatabaseLayer.Models
{
    public class Quiz
    {
        public string QuizID { get; set; }
        public string QuizName { get; set; }
        public string QuizDescription { get; set; }
        public DateTime QuizCreationDate { get; private set; }


        [NotMapped]
        public List<string> Assignes
        {
            get => JsonConvert.DeserializeObject<List<string>>(AssignesJSON) ?? new List<string>();
            set => AssignesJSON = JsonConvert.SerializeObject(value);
        }

        internal string AssignesJSON { get; private set; }

        [NotMapped]
        public List<Question> Questions
        {
            get => JsonConvert.DeserializeObject<List<Question>>(QuestionsJSON) ?? new List<Question>();
            set => QuestionsJSON = JsonConvert.SerializeObject(value);
        }

        internal string QuestionsJSON { get; private set; }

        public double? TotalPoints
        {
            get => Questions?.Count;
        }

        public Quiz()
        {
            QuizCreationDate = DateTime.Now;
        }
    }
}
