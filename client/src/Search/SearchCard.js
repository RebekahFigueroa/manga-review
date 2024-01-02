import { Chip } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";

const SearchCard = ({}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "25rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/812MRHRQXwS._AC_UF1000,1000_QL80_.jpg"
        title="Search Card"
      />
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ rightMargin: "2rem" }}
          >
            Shrek Game 2.0
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary">
          Conosole: Playstation 2
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: "auto" }}>
        <Chip color="primary" label="Single Player" />
        <Chip color="primary" label="Action" />
        <Chip color="primary" label="Adventure" />
      </CardActions>
    </Card>
  );
};

export default SearchCard;
