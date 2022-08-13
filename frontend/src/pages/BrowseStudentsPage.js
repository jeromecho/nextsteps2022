import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';

const BrowseStudentsSubmissionsPage = ({

}) => {
    const [ submissions, setsubmissions ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/student_submissions')
            .then(res => {
                setsubmissions(res.data);
                console.log(res.data);
                console.log(submissions);
            })
            .catch(err => {
                console.log(`Axios GET Error - submissions ${err}`);
            });
    }, []);

    return (
        <main style={{
            display: 'flex', 
            flexDirection: 'column',
        }}>
            <h1>HELP KIDS</h1>
            <p>10% of families in BC live in poverty. Help someone out who 
        can't afford a tutor or someone who has difficulty using a keyboard.</p>
            <div style={{
                display: 'grid',
                height: 'fit-content',
                minHeight: '20rem',
                gridTemplateColumns: '25% 25% 25% 25%',
                width: '25rem',
            }}>
                <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <h5 style={{
                        textDecoration: 'underline',
                    }}>Date Created
                    </h5>
                    {submissions.map(submission => (
                        <p>
                            {submission.date_made.slice(0,10)}
                        </p>
                    ))}
                </div>
                <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <h5 style={{
                        textDecoration: 'underline',
                    }}> Name
                    </h5>
                    {submissions.map(submission => (
                        <p>
                            {submission.student.name}
                        </p>
                    ))}
                </div>
                <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <h5 style={{
                        textDecoration: 'underline',
                    }}>Language
                    </h5>
                    {submissions.map(submission => (
                        <p>
                            {submission.language}
                        </p>
                    ))}
                </div>
                <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <h5 style={{
                        textDecoration: 'underline',
                    }}>Age
                    </h5>
                    {submissions.map(submission => (
                        <p>
                            {submission.student.age}
                        </p>
                    ))}
                </div>
            </div>
        </main>
    );
}

export { BrowseStudentsSubmissionsPage };
