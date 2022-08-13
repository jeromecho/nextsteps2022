import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({

}) => {
    return (
        <nav>
            <Link to='/'>LOGO</Link>
            <Link to='/post'>POST</Link>
            <Link to='/students'>BROWSE</Link>
            <Link to='/mysubmissions'>MY SUBMISSIONS</Link>
            <Link to='/login'>LOGIN</Link>
        </nav>
    );
}

export { Nav };
