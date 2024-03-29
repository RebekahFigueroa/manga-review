import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { create_user } = useAuthContext();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleUsernameChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      username: value,
    });
  };

  const handlePasswordChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      password: value,
    });
  };

  return (
    <Stack component="form">
      <Typography>Sign up</Typography>

      <TextField
        label="Username"
        variant="filled"
        value={formData.username}
        onChange={handleUsernameChange}
      ></TextField>
      <TextField
        label="Password"
        type="password"
        variant="filled"
        value={formData.password}
        onChange={handlePasswordChange}
      ></TextField>
      <Button
        variant="contained"
        onClick={() => {
          create_user(formData.username, formData.password);
          setFormData({
            username: "",
            password: "",
          });
        }}
      >
        Create Account
      </Button>
    </Stack>
  );
};

export default Login;
