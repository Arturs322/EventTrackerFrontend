import React, { useEffect, useState } from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button } from "antd";
import LoginRegisterModal from "../LoginRegisterModal/LoginRegisterModal";
import "./Header.css";

const Header = () => {
    const [categories, setCategories] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        fetch("https://localhost:7019/api/category/getCategories")
            .then((response) => response.json())
            .then((data) => {
                setCategories(
                    data.map((category) => ({
                        key: `${category.id}`,
                        label: category.title,
                    }))
                );
            })
            .catch((error) => console.error("Error fetching categories:", error));
    }, []);

    const showModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="logo">EventTracker</div>

                    <nav className="nav-links">
                        <Dropdown menu={{ items: categories }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Categories
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>

                        <a href="#">Events near you</a>
                        <a href="#">Submit an event</a>
                        <a href="#">Contact us</a>
                    </nav>

                    <Button type="primary" onClick={showModal} className="account-btn">
                        Account
                    </Button>
                </div>
            </header>

            <LoginRegisterModal isVisible={isModalVisible} onClose={closeModal} />
        </>
    );
};

export default Header;
