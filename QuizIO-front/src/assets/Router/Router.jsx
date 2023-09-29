import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from '../Components/main-page/MainPage';
import AssignedQuizzes from '../Components/assigned-quizzes/AssignedQuizzes';
import Quiz from '../Components/quiz/Quiz';
import UserResponse from '../Components/user-result/UserResponse';
import UserResponses from '../Components/assigned-quizzes/UserResponses';
import NotFound from '../Components/not-found-page/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="assigned/:username" element={<AssignedQuizzes/>}/>
            <Route path="responses/:username" element={<UserResponses/>}/>
            <Route path="assigned/:username/:quizName/:quizID" element={<Quiz/>}/>
            <Route path="/result/:username/:quizID" element={<UserResponse/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    
  );
};

export default Router;
