import React from "react";
import "./EventShowcase.css";

const EventShowcase = () => {
    return (
        <section className="event-showcase">
            <div className="overlay">
                <div className="content">
                    <h1>Discover & Track Amazing Events</h1>
                    <p>
                        Stay updated with the latest events happening around you. Whether you're an organizer or an attendee, EventTracker makes it easy to submit, explore, and enjoy events effortlessly.
                    </p>
                    <div className="buttons">
                        <button className="btn primary-btn">Explore Events</button>
                        <button className="btn secondary-btn">Submit an Event</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventShowcase;
