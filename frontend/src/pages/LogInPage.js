import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const LogInPage = ({

}) => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const studentObject = {
            username: username, 
            password: password, 
            /*
            username, 
            password, 
            */
        };

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        await axios.post('http://localhost:3000/login', studentObject)
            .then((res) => {
                console.log(res);
                // console.log(`Success! - ${res.data}`);
            })
            .catch((err) => {
                console.log(err.response);
            });

        setUsername('');
        setPassword('');
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label for='username'>Username</label>
                <input
                name='username'
                id='username' 
                onChange={handleUsernameChange} />
                <label for='password'>Password</label>
                <input
                name='password'
                id='password'
                onChange={handlePasswordChange}
                />
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    );
}

export { LogInPage };

