import React from 'react';

const PersonalProfile = ({ profile }) => {
    return (
        <div className="profile-section">
            <div className="profile-header">
                <p>{profile.header}</p>
            </div>
            <div className="paragraph">
                <p>{profile.description}</p>
            </div>
        </div>
    );
};

export default PersonalProfile;
