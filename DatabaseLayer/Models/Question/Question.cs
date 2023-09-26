namespace DatabaseLayer.Models
{
    public class Question
    {
        public string QuestionDetails { get; set; }
        public List<Answer> Answers { get; set; }
    }
}
