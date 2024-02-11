import React, { useState } from "react";
import { Button, Input, message } from "antd";
import { GoogleOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import axios from "axios";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    message.info("Google login not yet implemented");
  };

  const handlePasswordLogin = () => {
    if (!username || !password) {
      message.error("Please enter a username and password");
      return;
    }

    axios
      .post("/api/login", { username, password })
      .then((response) => {
        // Handle successful login
        message.success("Logged in successfully");
      })
      .catch((error) => {
        // Handle login error
        message.error("Invalid username or password");
      });
  };

  const handleRegister = () => {
    console.log("fuck registration")
  }

  return (
    <div style={{ 
      textAlign: "center",
      backgroundColor: "lightgreen",
      padding: "10%",
      margin: "10%",
      borderRadius: "20px"
    }}>
      <h1>Login</h1>
      <Button
        type="primary"
        icon={<GoogleOutlined />}
        onClick={handleGoogleLogin}
        style={{ marginRight: 8 }}
      >
        Google
      </Button>
      <Input
        prefix={<UserOutlined />}
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <Input.Password
        prefix={<LockOutlined />}
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        style={{ marginTop: 8 }}
      />
      <Button
        type="primary"
        onClick={handlePasswordLogin}
        style={{ marginTop: 8 }}
      >
        Login
      </Button>
      <Button
        type="primary"
        onClick={handleRegister}
        style={{ marginTop: 8 }}
      >
        Register
      </Button>
    </div>
  );
};

export default Auth;