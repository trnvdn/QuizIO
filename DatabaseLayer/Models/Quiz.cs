using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DatabaseLayer.Models
{
    public class Quiz
    {
        public string QuizID { get; private set; }
        public string QuizName { get; set; }
        public string QuizDescription { get; set; }
        public DateTime QuizCreationDate { get; private set; }

        private List<string> _assignes 
        { 
            get => JsonConvert.DeserializeObject<List<string>>(AssignesJSON); 
            set
            {
                _assignes = value;
                AssignesJSON = JsonConvert.SerializeObject(value);
            }
        }

        [NotMapped]
        public List<string> Assignes
        {
            get => _assignes;
            set
            {
                _assignes = value;
                AssignesJSON = JsonConvert.SerializeObject(value);
            }
        }
        internal string AssignesJSON { get; private set; }

        private List<Question> _questions 
        { 
            get => JsonConvert.DeserializeObject<List<Question>>(QuestionsJSON); 
            set
            {
                _questions = value;
                QuestionsJSON = JsonConvert.SerializeObject(value);
            }
        }

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

        [NotMapped]
        public double? TotalPoints
        {
            get => Questions?.Count;
        }

        public Quiz()
        {
            QuizID = Guid.NewGuid().ToString();
            QuizCreationDate = DateTime.Now;
        }
    }
}
