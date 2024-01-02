import { Stack, TextField, Typography } from "@mui/material";
import React from "react";

const Search = () => {
  return (
    <Stack alignItems="center" spacing={2}>
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{
          textAlign: "center",
          marginTop: "1rem",
          marginBottom: "0",
        }}
      >
        Find A Game
      </Typography>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{ width: "25%" }}
      />
    </Stack>
  );
};

export default Search;
