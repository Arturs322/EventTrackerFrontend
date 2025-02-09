import React, { useState } from "react";
import { Modal, Input, Button, Form, Tabs, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import "./LoginRegisterModal.css";

const LoginRegisterModal = ({ isVisible, onClose }) => {
    const [activeTab, setActiveTab] = useState("login");
    const [loading, setLoading] = useState(false);

    const handleTabChange = (key) => {
        setActiveTab(key);
    };

    const handleLogin = async (values) => {
        setLoading(true);
        try {
            const response = await fetch("https://localhost:7019/api/baseAccount/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message || "Login failed");

            localStorage.setItem("accessToken", data.accessToken);
            message.success("Login successful!");
            onClose();
        } catch (error) {
            message.error(error.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (values) => {
        setLoading(true);
        try {
            const response = await fetch("https://localhost:7019/api/baseAccount/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message || "Registration failed");

            message.success("Registration successful! You can now log in.");
            setActiveTab("login");
        } catch (error) {
            message.error(error.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal open={isVisible} onCancel={onClose} footer={null} centered width={400} maskClosable={true}>
            <Tabs defaultActiveKey="login" onChange={handleTabChange} centered>

                <Tabs.TabPane key="login" tab="Log In">
                    <Form layout="vertical" onFinish={handleLogin}>
                        <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please enter your email" }]}>
                            <Input prefix={<MailOutlined />} placeholder="Enter your email" />
                        </Form.Item>
                        <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please enter your password" }]}>
                            <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" block loading={loading}>
                            Log In
                        </Button>
                    </Form>
                </Tabs.TabPane>

                <Tabs.TabPane key="signup" tab="Sign Up">
                    <Form layout="vertical" onFinish={handleRegister}>
                        <Form.Item name="username" label="Username" rules={[{ required: true, message: "Please enter your username" }]}>
                            <Input prefix={<UserOutlined />} placeholder="Enter your username" />
                        </Form.Item>
                        <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please enter your email" }]}>
                            <Input prefix={<MailOutlined />} placeholder="Enter your email" />
                        </Form.Item>
                        <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please enter your password" }]}>
                            <Input.Password prefix={<LockOutlined />} placeholder="Create a password" />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" block loading={loading}>
                            Sign Up
                        </Button>
                    </Form>
                </Tabs.TabPane>

            </Tabs>
        </Modal>
    );
};

export default LoginRegisterModal;
