using Dapper;
using DatabaseLayer.Models;
using System.Data.SqlClient;

namespace DatabaseLayer.Repositories
{
    public class UserResponseRepository
    {
        public List<UserResponse> Retrieve()
        {
            using (var connection = new SqlConnection(ConnectionSettings.ConnectionString))
            {
                connection.Open();
                var sqlCommand = @"SELECT * FROM UserResponse";
                var response = connection.Query<UserResponse>(sqlCommand).ToList();
                return response;
            }
        }

        public UserResponse Retrieve(string username, string quizID)
        {
            using (var connection = new SqlConnection(ConnectionSettings.ConnectionString))
            {
                connection.Open();
                var sqlCommand = @"SELECT * FROM UserResponse WHERE Username = @username AND QuizID = @quizID";
                var response = connection.QueryFirstOrDefault<UserResponse>(sqlCommand, new { username,quizID });
                return response;
            }
        }
        public List<UserResponse> RetrieveByUsername(string username)
        {
            using (var connection = new SqlConnection(ConnectionSettings.ConnectionString))
            {
                connection.Open();
                var sqlCommand = @"SELECT * FROM UserResponse WHERE Username = @username";
                var response = connection.Query<UserResponse>(sqlCommand, new { username }).AsList();
                return response;
            }
        }

        public UserResponse RetrieveByQuizID(string quizId)
        {
            using (var connection = new SqlConnection(ConnectionSettings.ConnectionString))
            {
                connection.Open();
                var sqlCommand = @"SELECT * FROM UserResponse WHERE QuizID = @quizId";
                var response = connection.QueryFirstOrDefault<UserResponse>(sqlCommand, new { quizId});
                return response;
            }
        }

        public bool Insert(UserResponse userResponse)
        {
            using (var connection = new SqlConnection(ConnectionSettings.ConnectionString))
            {
                connection.Open();
                var sqlCommand = @"
            INSERT INTO UserResponse 
            (UserResponseID, QuizID, Username, AnswersJSON, Score, ExecutionDate) 
            VALUES 
            (@UserResponseID, @QuizID, @Username, @AnswersJSON, @Score, @ExecutionDate)";

                var affectedRows = connection.Execute(sqlCommand, new
                {
                    userResponse.UserResponseID,
                    userResponse.QuizID,
                    userResponse.Username,
                    userResponse.AnswersJSON,
                    userResponse.Score,
                    userResponse.ExecutionDate
                });

                return affectedRows == 1;
            }
        }
    }
}
