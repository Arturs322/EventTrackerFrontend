import React from "react";
import { CalendarDays, Users, Globe, BarChart3 } from "lucide-react";
import "./Features.css";

const FeaturesSection = () => {
    return (
        <section className="features-container">
            <div className="stats-section">
                <div className="stat-card">
                    <CalendarDays size={32} className="icon" />
                    <div>
                        <strong>Events Count</strong> <br />
                        0 total events
                    </div>
                </div>

                <div className="stat-card">
                    <Users size={32} className="icon" />
                    <div>
                        <strong>Active Users</strong> <br />
                        0 users currently active
                    </div>
                </div>

                <div className="stat-card">
                    <Globe size={32} className="icon" />
                    <div>
                        <strong>Countries Active</strong> <br />
                        Active in 0 countries
                    </div>
                </div>

                <div className="stat-card">
                    <BarChart3 size={32} className="icon" />
                    <div>
                        <strong>Trending Categories</strong> <br />
                        Loading...
                    </div>
                </div>
            </div>

            <div className="info-section">
                <img
                    src="https://source.unsplash.com/400x300/?concert,event"
                    alt="Events"
                    className="info-image"
                />
                <div className="info-text">
                    <h2>Track & Discover Events</h2>
                    <p>
                        Stay updated with the latest events happening worldwide. Whether you're looking to join or host,
                        our platform makes it easy to explore and participate.
                    </p>
                    <button className="explore-btn">Explore Events</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
