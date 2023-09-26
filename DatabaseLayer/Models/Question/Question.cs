namespace DatabaseLayer.Models
{
    public class Question
    {
        public string QuestionDetails { get; set; }
        public List<Answer> Answers { get; set; }
        public Answer CorrectAnswer 
        { 
            get => Answers.FirstOrDefault(x => x.IsCorrect);
        }
    }
}
