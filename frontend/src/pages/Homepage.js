import React, { useState, useRef, useEffect } from 'react';
import HOMEPAGE from '../img/homepage.jpeg';

const Homepage = ({

}) => {
    return (
        <main 
        style={{
            display: 'flex',
            justifyContent: 'center',
        }}
    >
            <div className='left'>
                <div style={{
                    backgroundImage: `url(${HOMEPAGE})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '40vw',
                    maxHeight: '25rem',
                    width: '40vw',
                    maxWidth: '40rem',
                }} />
            </div>
            <div className='right'>
                <h1>Program Buddy</h1>
                <p>The complete, low-barrier, accessible platform 
                    for running code, getting feedback, and volunteering.
            </p>
            </div>
        </main>
    );
}

export { Homepage };
