import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import EventShowcase from "./components/EventShowcase/EventShowcase";
import Features from "./components/Features/Features";
import SubmitEvent from "./components/SubmitEvent/SubmitEvent";

function Home() {
    return (
        <>
            <EventShowcase />
            <Features />
        </>
    );
}

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/submitevent" element={<SubmitEvent />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
