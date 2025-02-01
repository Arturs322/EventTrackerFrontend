import React from "react";
import Header from "./components/Header/Header";
import EventShowcase from "./components/EventShowcase/EventShowcase";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="main-content">
                <EventShowcase />
                <Features />
            </div>
            <Footer />
        </div>
    );
}

export default App;
