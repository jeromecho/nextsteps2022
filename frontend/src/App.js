import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { BrowseStudentsSubmissionsPage } from './pages/BrowseStudentsPage';
import { LogInPage } from './pages/LogInPage';
import { MySubmissionPage } from './pages/MySubmissionPage';
import { MySubmissionsPage }from './pages/MySubmissionsPage';
import { PostPage } from './pages/PostPage';
import { StudentHomeworkPage } from './pages/StudentHomeworkPage';
import { Nav } from './components/Nav';
import { SignUpPage } from './pages/SignUpPage';
import axios from 'axios';

// Force credentials on every Axios request
axios.defaults.withCredentials = true;

const App = ({

}) => {

    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(val => console.log(val))
            .catch(err => console.log(err));
    }, []);

    return (
        <Router>
            <Nav />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/student_submissions' element={<BrowseStudentsSubmissionsPage />} />

                <Route path='/student_submissions/:homeworkID' element={<StudentHomeworkPage />} />
                <Route path='/login' element={<LogInPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/mysubmissions/:submissionID' element={<MySubmissionPage />} />
                <Route path='/mysubmissions' element={<MySubmissionsPage />} />
                <Route path='/post' element={<PostPage />} />
            </Routes> 
        </Router>
    );
}

export { App };


