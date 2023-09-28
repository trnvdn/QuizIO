# QuizIO
QuizIO is a web application designed for taking and viewing assigned and created quizzes. The app provides the user with a user-friendly interface to view and take quizzes and view results. An important aspect of the application is the lack of functionality for creating new quizzes and registering users. The main purpose of QuizIO is to provide access to already created quizzes and the results of their completion.

Main features:

❔ View available quizzes: 
- Users can view a list of quizzes assigned to them and quizzes created by other users.

📗 Taking Quizzes: 
- Registered users can view quizzes, select answer options, and complete quizzes.

💯 View results: 
- After completing a quiz, users can view their results, including the number of correct and incorrect answers, total points, and completion date.

Technologies:

Frontend:

- Built using React.js library to create the user interface. Additionally, Material UI, date-fns, and AXIOS were used.

Backend:

- Based on ASP.NET Core, providing request processing, data management and user authentication. Interacting with the database is done using Dapper.

Database:

- MSSQL is used to store data.

Startup instructions

To run the backend project, go to the **QuizIO-back** folder, and run the project after opening **QuizIO-back.sln**

If you did everything correctly, the **Swagger panel** will open in your browser.

To launch the client part, you should open the QuizIO-front folder in vs code and write the following commands:

```
yarn
yarn dev
```
If you did everything correctly, the main page will open in front of you.

❗❗❗**Warning**❗❗❗

At the moment it is not possible to add quizzes, therefore already created ones are used. To pass a certain quiz, you must enter one of the following options in the username field when logging in:

- test
- user1
- user2
- user3
- user4
