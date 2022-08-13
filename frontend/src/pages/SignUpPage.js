import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const SignUpPage = ({

}) => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');
    const [ age, setAge ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const studentObject = {
            username: username, 
            password: password, 
            name: name, 
            age: age,
            /*
            username, 
            password, 
            name, 
            age,
            */
        };

        const data = JSON.stringify(studentObject);

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        await axios.post('http://localhost:3000/signup', studentObject)
            .then((res) => {
                console.log(`Success! - ${res.data}`);
            })
            .catch((err) => {
                console.log(err.response.data);
            });

        setUsername('');
        setPassword('');
        setName('');
        setAge('');
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input
                type='text'
                name='username'
                id='username' 
                value={username}
                onChange={handleUsernameChange}/>
                <label htmlFor='password'>Password</label>
                <input 
                type='password'
                name='password' 
                id='password' 
                value={password}
                onChange={handlePasswordChange}/>
                <label htmlFor='name'>Name</label>
                <input
                type='text'
                name='name'
                id='name'
                value={name}
                onChange={handleNameChange}/>
                <label htmlFor='age'>Age</label>
                <input
                type='number'
                name='age'
                id='age'
                value={age}
                onChange={handleAgeChange}/>
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    );
}

export { SignUpPage };
