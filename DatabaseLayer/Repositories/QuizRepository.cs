using System.Data.SqlClient;
using Dapper;
using DatabaseLayer.Models;

namespace DatabaseLayer.Repositories;

public class QuizRepository
{
    public List<Quiz> Retrieve()
    {
        using (var connection = new SqlConnection(ConnectionSettings.ConnectionString))
        {
            var sqlCommand = @"SELECT * FROM Quiz";
            var response = connection.Query<Quiz>(sqlCommand).ToList();
            return response;
        }
    }
    
    public Quiz Retrieve(string id)
    {
        using (var connection = new SqlConnection(ConnectionSettings.ConnectionString))
        {
            var sqlCommand = @"SELECT * FROM Quiz WHERE QuizID = @id";
            var response = connection.QueryFirstOrDefault<Quiz>(sqlCommand, new { id });
            return response;
        }
    }

    public bool Insert(Quiz quiz)
    {
        using (var connection = new SqlConnection(ConnectionSettings.ConnectionString))
        {
            connection.Open();
            var sqlCommand = @"
            INSERT INTO Quiz 
            (QuizID, QuizName, QuizDescription, QuizCreationDate, AssignesJSON, QuestionsJSON, TotalPoints) 
            VALUES 
            (@QuizID, @QuizName, @QuizDescription, @QuizCreationDate, @AssignesJSON, @QuestionsJSON, @TotalPoints)";

            var parameters = new
            {
                quiz.QuizID,
                quiz.QuizName,
                quiz.QuizDescription,
                quiz.QuizCreationDate,
                quiz.AssignesJSON,
                quiz.QuestionsJSON,
                quiz.TotalPoints
            };

            var response = connection.Execute(sqlCommand, parameters);
            return response == 1;
        }
    }


    public bool Update(Quiz quiz)
    {
        using (var connection = new SqlConnection(ConnectionSettings.ConnectionString))
        {
            var sqlCommand = @"
            UPDATE Quiz SET 
            QuizName = @QuizName, 
            QuizDescription = @QuizDescription, 
            AssignesJSON = @AssignesJSON, 
            QuestionsJSON = @QuestionsJSON 
            WHERE QuizID = @QuizID";

            var parameters = new
            {
                quiz.QuizName,
                quiz.QuizDescription,
                quiz.AssignesJSON,
                quiz.QuestionsJSON,
                quiz.QuizID
            };

            var response = connection.Execute(sqlCommand, parameters);
            return response == 1;
        }
    }
}