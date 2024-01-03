import { Button, Chip, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const LibraryCard = () => {
  const [openWrite, setOpenWrite] = useState(false);
  const handleClickOpenWrite = () => {
    setOpenWrite(true);
  };
  const handleCloseWrite = () => {
    setOpenWrite(false);
  };

  const [starRatingValue, setStarRatingValue] = useState(5);

  return (
    <Card
      sx={{
        maxWidth: 500,
        height: "30rem",
        width: "20rem",
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
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ rightMargin: "2rem" }}
        >
          Shrek Game 2.0
        </Typography>
        <Rating name="customized-10" max={10} value="7" readOnly />
        <Typography
          gutterBottom
          variant="h10"
          component="div"
          sx={{ rightMargin: "2rem" }}
        >
          The game was enjoyable but I felt it was missing some of the magic of
          the movies.
        </Typography>

        {/* Edit Review Form */}
        <Button
          variant="outlined"
          size="small"
          onClick={handleClickOpenWrite}
          sx={{ marginLeft: "1rem", marginTop: "2rem" }}
        >
          Edit Review
        </Button>
        <Dialog open={openWrite} onClose={handleCloseWrite}>
          <DialogTitle>Edit Review</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please provide an updated description of your thoughts on this
              game.
            </DialogContentText>
            <TextField
              sx={{ width: "100%", marginBottom: "2rem", marginTop: "1rem" }}
              id="outlined-multiline-flexible"
              label="Review"
              multiline
              rows={10}
              value="I enjoyed this game but it fell flat as a sequel."
              // onChange={(e) => setSuggestionDescription(e.target.value)}
              placeholder="Review"
            />
            <Typography component="legend">Star Rating</Typography>
            <Rating
              name="customized-10"
              defaultValue={2}
              max={10}
              value={starRatingValue}
              onChange={(event, newValue) => {
                setStarRatingValue(newValue);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseWrite}>Cancel</Button>
            <Button onClick={handleCloseWrite}>Submit</Button>
          </DialogActions>
        </Dialog>
        <Button
          variant="outlined"
          size="small"
          onClick={handleClickOpenWrite}
          sx={{ marginLeft: "1rem", marginTop: "2rem" }}
        >
          Delete Review
        </Button>
      </CardContent>
      <CardActions sx={{ marginTop: "auto" }}>
        <Chip color="primary" label="Action" />
        <Chip color="primary" label="Adventure" />
        <Chip color="primary" label="Single-Player" />
      </CardActions>
    </Card>
  );
};

export default LibraryCard;
