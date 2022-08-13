import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import BrowseStudentsPage from './pages/BrowseStudentsPage';
import LogInPage from './pages/LogInPage';
import MySubmissionPage from './pages/MySubmissionPage';
import MySubmissionsPage from './pages/MySubmissionsPage';
import PostPage from './pages/PostPage';
import StudentHomeworkPage from './pages/StudentHomeworkPage';

const app = ({

}) => {
    return (
        <Router>
            <Routes>
                <Route path='/home' element={<HomePage />} />
                <Route path='/students' element={<BrowseStudentsPage />} />
                <Route path='/login' element={<LogInPage />} />
                <Route path='/mysubmissions/:submissionID' element={<MySubmissionPage />} />
                <Route path='/mysubmissions' element={<MySubmissionsPage />} />
                <Route path='/post' element={<PostPage />} />
                <Route path='/students/:homeworkID' element={<StudentHomeworkPage />} />
            </Routes> 
        </Router>
    );
}

export { app };


