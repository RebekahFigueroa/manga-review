import { Stack, TextField, Typography } from "@mui/material";
import React from "react";
import SearchCard from "./SearchCard";

const Search = () => {
  return (
    <Stack alignItems="center" spacing={2}>
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{
          textAlign: "center",
          marginTop: "5rem",
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

      <Stack
        direction="row"
        sx={{
          justifyContent: "center",
          gap: 2,
          width: "80%",
          flexWrap: "wrap",
          mt: 1,
          mb: 3,
        }}
      >
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </Stack>
    </Stack>
  );
};

export default Search;
