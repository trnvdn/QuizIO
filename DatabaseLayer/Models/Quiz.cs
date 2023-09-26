using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;

namespace DatabaseLayer.Models
{
    public class Quiz
    {
        public string QuizID { get; private set; }
        public string QuizName { get; set; }
        public string QuizDescription { get; set; }
        public DateTime QuizCreationDate { get; private set; }
        public string AssignesJSON { get; private set; }
        private List<Question> _questions { get; set; }

        [NotMapped]
        public List<Question> Questions
        {
            get => _questions;
            set
            {
                _questions = value;
                QuestionsJSON = JsonConvert.SerializeObject(value);
            }
        }
        internal string QuestionsJSON { get; private set; }
        public double TotalPoints 
        { 
            get => Questions.Count;  
        }

        public Quiz()
        {
            QuizID = Guid.NewGuid().ToString();
            QuizCreationDate = DateTime.Now;
        }
    }
}
