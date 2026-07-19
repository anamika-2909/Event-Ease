import React from 'react'
import Gallery from '../components/Gallery'

const Event = () => {
    return (
        <>
            <section className="event-hero d-flex align-items-center text-center">
                <div className="container text-white">
                    <h1 className="display-3 fw-bold">
                        Celebrate Every Occasion
                    </h1>

                    <p className="lead">
                        From birthdays to weddings, we make every event memorable.
                    </p>

                    <button className="btn btn-primary btn-lg mt-3">
                        Explore Events
                    </button>
                </div>
            </section>
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Explore Our Events</h2>
                    <p className="text-muted">
                        Discover the perfect event for every special moment.
                    </p>
                </div>

                <div className="row g-4">
                   <Gallery/>
                </div>
            </div>
        </>
    )
}

export default Event