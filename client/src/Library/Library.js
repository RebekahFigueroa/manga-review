import { Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LibraryCard from "./LibraryCard";

const Library = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch("/reviews?userId=1");
      const data = await response.json();
      setReviews(data);
    };

    fetchGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        My Game Library
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
        {reviews.map((review) => (
          <LibraryCard
            key={review.id}
            review={review}
            setReviews={setReviews}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Library;
