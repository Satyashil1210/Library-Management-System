import React from 'react'
import './WelcomeBox.css'

function WelcomeBox() {
    return (
        <div className='welcome-box'>
            <p className='welcome-title'>WELCOME TO THE DIGITAL LIBRARY</p>

            <p className='welcome-message'>
                Discover. Learn. Grow.
                <br />
                <span className='welcome-submessage'>
                    Access Books, Resources, and Knowledge Anytime
                </span>
            </p>
        </div>
    )
}

export default WelcomeBox
