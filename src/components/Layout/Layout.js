import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
    return (
        <div className="app-container">
            <Header />
            <div className="main-content">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
