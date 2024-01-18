import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Library from "./Library/Library";
import Login from "./Login/Login";
import NavBar from "./NavBar/NavBar";
import Search from "./Search/Search";
import Stats from "./Stats/Stats";
import { AuthProvider, useAuthContext } from "./contexts/AuthContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const BodyContent = () => {
  const { isAuthed } = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthed) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthed]);

  return (
    <>
      <NavBar />
      <Box sx={{ height: "calc(100vh - 3rem)" }}>
        <Routes>
          <Route path="/" Component={isAuthed ? Search : Login} exact />
          <Route path="/search" Component={Search} />
          <Route path="/library" Component={Library} />
          <Route path="/stats" Component={Stats} />
          {!isAuthed && (
            <Route path="/*" element={<Navigate to="/" replace />} />
          )}
        </Routes>
      </Box>
    </>
  );
};

const App = () => {
  // for debugging when creating controller
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("/practice6/20");
  //     const json = await response.json();
  //     console.log(json);
  //   };

  //   fetchData();
  // }, []);

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
