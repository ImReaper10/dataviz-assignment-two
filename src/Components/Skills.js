import React from 'react';

const Skills = ({ skills }) => { 
    return (
        <div className="keyskills-section">
            <div className="keyskills-header">
                <strong>Key Skills</strong>
            </div>
            <div className="keyskills-container">
                {skills.map((skill, index) => ( 
                    <p key={index}>{skill}</p>
                ))}
            </div>
        </div>
    );
};

export default Skills;
