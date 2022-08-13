import React, { useState, useRef, useEffect } from 'react';
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