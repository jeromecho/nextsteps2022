import React, { useState, useRef, useEffect } from 'react';

const SignUpPage = ({

}) => {
    return (
        <div>
            <h1>Sign Up</h1>
            <form action='' method='POST'>
                <label for='username'>Username</label>
                <input name='username' id='username' />
                <label for='password'>Password</label>
                <input name='password' id='password' />
            </form>
        </div>
    );
}

export { SignUpPage };
