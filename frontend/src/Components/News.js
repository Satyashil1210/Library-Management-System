import React from 'react'
import './News.css'

function News() {
    return (
        <div className='news-container'>
            <h1 className='news-title'>Updates for You</h1>

            <div className='news-data'>
                <div className='news-empty'></div>

                <div>
                    <h1 className='news-subtitle'>Competitions</h1>
                    <div>
                        <div className='news-competition-event'>
                            <p className='event-name'>Book Review Contest</p>
                            <p className='event-desc'>
                                Submit a review of any book from our collection. Top reviews will be featured
                                on the library portal and winners will receive certificates.
                            </p>
                        </div>

                        <div className='news-competition-event'>
                            <p className='event-name'>Poster Design Competition</p>
                            <p className='event-desc'>
                                Create a poster on "The Importance of Reading". Winning designs will be displayed
                                on the library notice board and social channels.
                            </p>
                        </div>

                        <div className='news-competition-event'>
                            <p className='event-name'>Story Writing Competition</p>
                            <p className='event-desc'>
                                Submit an original short story (max 1500 words). Best entries will be published
                                in the college magazine and awarded prizes.
                            </p>
                        </div>

                        <div className='news-competition-event'>
                            <p className='event-name'>Speed Reading Challenge</p>
                            <p className='event-desc'>
                                Read the selected short book in the shortest time and win recognition and small prizes
                                from the library team.
                            </p>
                        </div>

                        <div className='news-competition-event'>
                            <p className='event-name'>Inter-department Debate</p>
                            <p className='event-desc'>
                                Join the debate on "Digital Libraries vs Traditional Libraries". Teams can register now
                                for the upcoming event.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='news-empty'></div>

                <div>
                    <h1 className='news-subtitle'>Online Quiz</h1>
                    <div>
                        <div className='news-quiz-event'>
                            <p className='event-name'>General Knowledge Quiz</p>
                            <p className='event-desc'>
                                20 interactive MCQs to test your general awareness. Instant scoring and a weekly leaderboard.
                            </p>
                        </div>

                        <div className='news-quiz-event'>
                            <p className='event-name'>Library Awareness Quiz</p>
                            <p className='event-desc'>
                                Short 10-question quiz about library rules, sections, and services — great for new members.
                            </p>
                        </div>

                        <div className='news-quiz-event'>
                            <p className='event-name'>Computer Fundamentals Quiz</p>
                            <p className='event-desc'>
                                Brush up on basic IT concepts with this quick quiz designed for beginners and refreshers.
                            </p>
                        </div>

                        <div className='news-quiz-event'>
                            <p className='event-name'>English Vocabulary Quiz</p>
                            <p className='event-desc'>
                                Improve your word power with curated vocabulary questions suitable for all levels.
                            </p>
                        </div>

                        <div className='news-quiz-event'>
                            <p className='event-name'>Current Affairs Quiz</p>
                            <p className='event-desc'>
                                Regularly updated questions on recent events to help you stay informed and prepared.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='news-empty'></div>
            </div>
        </div>
    )
}

export default News
