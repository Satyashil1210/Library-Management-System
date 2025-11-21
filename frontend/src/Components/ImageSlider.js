import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>

                {/* Slide 1 */}
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1616070152767-3eb99cf10509?auto=format&fit=crop&w=1050&q=80"
                        alt="Library slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to the Digital Library</h3>
                        <p>Explore thousands of books, manage records, and access resources anytime.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Slide 2 */}
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?auto=format&fit=crop&w=1049&q=80"
                        alt="Books slide"
                    />
                    <Carousel.Caption>
                        <h3>Easy Book Management</h3>
                        <p>Issue, return, track, and organize books with a simple and efficient interface.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Slide 3 */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1608454367599-c133fcab1245?auto=format&fit=crop&w=1050&q=80"
                        alt="Students reading"
                    />
                    <Carousel.Caption>
                        <h3>Enhance Learning Experience</h3>
                        <p>Provide seamless access to resources and improve user engagement.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default ImageSlider
