import { Box, CssBaseline, Switch } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Box sx={{ height: "calc(100vh - 3rem)" }}>
          <Switch>
            {/* <Route path="/search">
              <Search />
            </Route>
            <Route path="/library">
              <Library />
            </Route>
            <Route path="/stats">
              <Stats />
            </Route>

            <Redirect from="/" to="/search" /> */}
          </Switch>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
