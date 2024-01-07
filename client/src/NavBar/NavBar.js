import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useAuthContext } from "../contexts/AuthContext";
import LoginField from "./LoginField";
import NavItem from "./NavItem";

const NavBar = () => {
  const { isAuthed } = useAuthContext();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Game Library
        </Typography>
        {isAuthed && (
          <Stack direction="row" spacing={2} mr={2}>
            <NavItem to="/search" label="Search" />
            <NavItem to="/library" label="Library" />
            <NavItem to="/stats" label="Stats" />
          </Stack>
        )}
        <LoginField />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
