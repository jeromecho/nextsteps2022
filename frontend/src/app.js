import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Homepage';
import { BrowseStudentsPage } from './pages/BrowseStudentsPage';
import { LogInPage } from './pages/LogInPage';
import { MySubmissionPage } from './pages/MySubmissionPage';
import { MySubmissionsPage }from './pages/MySubmissionsPage';
import { PostPage } from './pages/PostPage';
import { StudentHomeworkPage } from './pages/StudentHomeworkPage';
import { Nav } from './components/Nav';

const App = ({

}) => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/students' element={<BrowseStudentsPage />} />

                <Route path='/students/:homeworkID' element={<StudentHomeworkPage />} />
                <Route path='/login' element={<LogInPage />} />
                <Route path='/mysubmissions/:submissionID' element={<MySubmissionPage />} />
                <Route path='/mysubmissions' element={<MySubmissionsPage />} />
                <Route path='/post' element={<PostPage />} />
            </Routes> 
        </Router>
    );
}

export { App };


