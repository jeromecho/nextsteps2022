import React, { useState, useRef, useEffect } from 'react';
<<<<<<< HEAD

const LogInPage = ({

}) => {
    return (
        <div>
            <h1>Login</h1>
            <form action='' method='POST'>
                <label for='username'>Username</label>
                <input name='username' id='username' />
                <label for='password'>Password</label>
                <input name='password' id='password' />
            </form>
        </div>
    );
}

export { LogInPage };
=======
import ReactDOM from 'react-dom/client';

const LogInPage = () => {
    return (
        <>
        <h1> LOGIN </h1>

        <form action='' method='GET'>
            <p> Username </p>
            <input type='text' />

        </form>

        <form action='' method='GET'>
            <p> Password </p>
            <input type='text' />

        </form>


        </>
    );
}

export { LogInPage };
>>>>>>> 04e2513a2aff995a4cb156397228b96f24fdaefd
