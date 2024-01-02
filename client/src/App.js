import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Library from "./Library/Library";
import Login from "./Login/Login";
import NavBar from "./NavBar/NavBar";
import Search from "./Search/Search";
import Stats from "./Stats/Stats";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const BodyContent = () => {
  const { isAuthed } = useAuthContext();
  return (
    <>
      <NavBar />
      <Box sx={{ height: "calc(100vh - 3rem)" }}>
        <Routes>
          <Route path="/" Component={isAuthed ? Search : Login} exact />
          <Route path="/search" Component={Search} />
          <Route path="/library" Component={Library} />
          <Route path="/stats" Component={Stats} />
        </Routes>
      </Box>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AuthProvider>
          <BodyContent />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
