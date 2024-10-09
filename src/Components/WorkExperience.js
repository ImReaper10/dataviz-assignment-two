import React from 'react';

const WorkExperience = ({ experiences }) => {
    return (
        <div className="experience-section">
            <div className="experience-header">
                <strong>Work Experience</strong>
            </div>
            <div className="experience-container">
                {experiences.map((job, index) => (
                    <div className="job" key={index}>
                        <strong>{job.title} ({job.duration})</strong>
                        <p>{job.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;
