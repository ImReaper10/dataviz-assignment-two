import React from 'react';

const Header = ({ info }) => {
    return (
        <div className="header">
            <div className="name">
                <h1>{info.name}</h1>
                <p>{info.title}</p>
            </div>
            <div className="contact-info">
                <p>Email: <span className="email">{info.email}</span></p>
                <p>Web: {info.web}</p>
                <p>Mobile: {info.mobile}</p>
            </div>
        </div>
    );
};

export default Header;


