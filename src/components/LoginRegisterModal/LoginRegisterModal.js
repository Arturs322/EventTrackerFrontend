import React, { useState } from "react";
import { Modal, Input, Button, Form, Tabs } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import "./LoginRegisterModal.css";

const LoginRegisterModal = ({ isVisible, onClose }) => {
    const [activeTab, setActiveTab] = useState("login");

    const handleTabChange = (key) => {
        setActiveTab(key);
    };

    return (
        <Modal
            open={isVisible}
            onCancel={onClose}
            footer={null}
            centered
            width={400}
            maskClosable={true}
            bodyStyle={{ overflow: "auto" }}
        >
            <Tabs
                defaultActiveKey="login"
                onChange={handleTabChange}
                centered
                items={[
                    {
                        key: "login",
                        label: "Log In",
                        children: (
                            <Form layout="vertical">
                                <Form.Item label="Email">
                                    <Input prefix={<MailOutlined />} placeholder="Enter your email" />
                                </Form.Item>
                                <Form.Item label="Password">
                                    <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
                                </Form.Item>
                                <Button type="primary" block>
                                    Log In
                                </Button>
                            </Form>
                        ),
                    },
                    {
                        key: "signup",
                        label: "Sign Up",
                        children: (
                            <Form layout="vertical">
                                <Form.Item label="Username">
                                    <Input prefix={<UserOutlined />} placeholder="Enter your username" />
                                </Form.Item>
                                <Form.Item label="Email">
                                    <Input prefix={<MailOutlined />} placeholder="Enter your email" />
                                </Form.Item>
                                <Form.Item label="Password">
                                    <Input.Password prefix={<LockOutlined />} placeholder="Create a password" />
                                </Form.Item>
                                <Button type="primary" block>
                                    Sign Up
                                </Button>
                            </Form>
                        ),
                    },
                ]}
            />
        </Modal>
    );
};

export default LoginRegisterModal;
