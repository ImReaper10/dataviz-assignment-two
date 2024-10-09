import React from 'react';

const Education = ({ education }) => {
    return (
        <div className="education-section">
            <div className="education-header">
                <strong>Education</strong>
            </div>
            <div className="education-container">
                {education.map((college, index) => (
                    <div className="college" key={index}>
                        <strong>{college.institution}</strong>
                        <p>{college.degree}</p>
                        <p>{college.years}</p>
                        <p>{college.gpa}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
