import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Game Library
        </Typography>
        <Stack direction="row" spacing={2}>
          <NavItem to="/search" label="Search" />
          <NavItem to="/library" label="Library" />
          <NavItem to="/stats" label="Stats" />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
