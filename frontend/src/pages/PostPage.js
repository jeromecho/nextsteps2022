import React, { useState, useRef, useEffect } from 'react';

const PostPage = ({

}) => {

    const [comment, setComment] = useState('');
    const [language, setLanguage] = useState('');

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleOCRClick = () => {

    };

    return (
        <main style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <form style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <h1>HOLD YOUR PAPER UP TO THE SCREEN</h1>
                <div style={{
                    height: "24vw",
                    minHeight: "24rem",
                    minWidth: "24rem",
                    width: "24vw",
                }}>
                    <div style={{
                        backgroundColor: "teal",
                        border: "2px solid #D9D9D9",
                        boxShadow: "4px 4px 30px #585858",
                        height: "20vw",
                        minHeight: "20rem",
                    }}>
                        OCR GOES HERE
                    </div>
                    <button type='button' onClick={handleOCRClick} >
                        Take Picture
                    </button>
                </div>
                <fieldset style={{
                    alignItems: 'center',
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <label htmlFor='comment'>
                        COMMENT
                    </label>
                    <textarea 
                    style={{
                        height: "15rem",
                        width: '22rem',
                    }}
                    value={comment}
                    onChange={handleCommentChange}
                    />
                </fieldset>
                <fieldset style={{
                    alignItems: 'center',
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <label htmlFor='comment'>
                        Language
                    </label>
                    <select
                    name='language'
                    style={{
                        width: '22rem',
                    }}
                    value={comment}
                    onChange={handleLanguageChange}
                >
                        <option value='Python' selected='true'>Python</option>
                        <option value='JavaScript' >JavaScript</option>
                        <option value='Rust' >Rust</option>
                        <option value='Assembly' >Assembly</option>
                    </select>
                </fieldset>
                <button type='submit'>SUBMIT</button>
            </form>
        </main>
        
    );
}

export { PostPage };
