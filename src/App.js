import React, { Component } from 'react';
import Header from './Components/Header';
import PersonalProfile from './Components/PersonalProfile';
import WorkExperience from './Components/WorkExperience';
import Skills from './Components/Skills';
import Education from './Components/Education';
import './App.css';


class App extends Component {
    state = {
        personalInfo: {
            name: 'Husain Awan',
            title: 'Data Scientist',
            email: 'abc@gmail.com',
            web: 'abc.github.io/abc',
            mobile: '01234567890'
        },
        profile: {
            header: 'Personal Profile',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        },
        workExperience: [
            {
                title: 'Job Title at Company',
                duration: 'August 2022 – December 2023',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
            },
            {
                title: 'Job Title 2 at Company 2',
                duration: 'August 2020 – December 2021',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
            }
        ],
        skills: ['A Key skill ', 'A Key skill ', 'A Key skill ', 'A Key skill', 'A Key skill', 'A Key skill', 'A Key skill', 'A Key skill', 'A Key skill'],
        education: [
            {
                institution: 'New Jersey Institute of Technology',
                degree: 'B.S in Computer Science',
                years: '2018-2022',
                gpa: '3.9'
            },
            {
                institution: 'New Jersey Institute of Technology',
                degree: 'M.S in Computer Science',
                years: '2022-2023',
                gpa: '4.0'
            }
        ]
    };

    render() {
        return (
            <div className="App">
                <Header info={this.state.personalInfo} />
                <PersonalProfile profile={this.state.profile} />
                <WorkExperience experiences={this.state.workExperience} />
                <Skills skills={this.state.skills} />
                <Education education={this.state.education} />
            </div>
        );
    }
}

export default App;
