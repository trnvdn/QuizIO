namespace DatabaseLayer
{
    public static class ConnectionSettings
    {
        public static string ConnectionString
        {
            get
            {
                return "Data Source=NITRO-5;Initial Catalog=QuizDB;Persist Security Info=True;User ID=quizPermission;Password=quizPermission;";
            }
        }
    }
}
