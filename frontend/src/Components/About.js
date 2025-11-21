import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80" alt="" />
                </div>
                <div>
                    <p className="about-text">
                       Library Management System is a full-stack MERN application designed to simplify book management, user handling, and daily library operations.
                       This system helps administrators efficiently manage book records, track issued and returned books, handle user registrations, and maintain category-wise organization of resources.<br/>
                       <br/>

                       The project provides a secure authentication system, real-time updates, and a clean user interface for effortless navigation.It eliminates manual paperwork and brings automation to core library activities, making the overall management process faster and more reliable.<br/>
                       <br/>

                        With features like transaction history, category filtering, user management, and responsive design, this system enhances both the productivity of librarians and the experience of users accessing the library services.<br/>
                       <br/>

                        Your feedback and suggestions are always appreciated to help improve and enhance this project further!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
