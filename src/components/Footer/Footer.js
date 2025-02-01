import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h6 className="footer-title">EventTracker</h6>
                </div>

                <div className="footer-links">
                    <div className="footer-section">
                        <h6 className="footer-title">Company</h6>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Freebies</a></li>
                            <li><a href="#">Premium Tools</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h6 className="footer-title">Resources</h6>
                        <ul>
                            <li><a href="#">Illustrations</a></li>
                            <li><a href="#">Bits & Snippets</a></li>
                            <li><a href="#">Affiliate Program</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h6 className="footer-title">Help & Support</h6>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Knowledge Center</a></li>
                            <li><a href="#">Custom Development</a></li>
                            <li><a href="#">Sponsorships</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h6 className="footer-title">Legal</h6>
                        <ul>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Licenses (EULA)</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>All rights reserved. Copyright © {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
