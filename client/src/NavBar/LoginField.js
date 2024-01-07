import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";

const LoginField = () => {
  const { isAuthed, login, logout } = useAuthContext();

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

  return isAuthed ? (
    <Button variant="contained" onClick={logout}>
      Logout
    </Button>
  ) : (
    <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <TextField
        label="Username"
        variant="filled"
        size="small"
        value={formData.username}
        onChange={handleUsernameChange}
      />

      <TextField
        label="Password"
        variant="filled"
        size="small"
        type="password"
        value={formData.password}
        onChange={handlePasswordChange}
      />
      <Button
        variant="contained"
        onClick={() => login(formData.username, formData.password)}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginField;
