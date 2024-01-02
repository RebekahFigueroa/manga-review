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
import { Box } from "@mui/system";
import React, { useState } from "react";

const SearchCard = ({}) => {
  const [openView, setOpenView] = useState(false);
  const handleClickOpenView = () => {
    setOpenView(true);
  };
  const handleCloseView = () => {
    setOpenView(false);
  };

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
        height: "25rem",
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
        <Rating name="customized-10" max={10} value="7" readOnly />

        <Button
          variant="outlined"
          size="small"
          onClick={handleClickOpenView}
          sx={{ marginTop: "2rem" }}
        >
          View Reviews
        </Button>
        <Dialog open={openView} onClose={handleCloseView}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
        </Dialog>

        <Button
          variant="outlined"
          size="small"
          onClick={handleClickOpenWrite}
          sx={{ marginLeft: "1rem", marginTop: "2rem" }}
        >
          Write Review
        </Button>
        <Dialog open={openWrite} onClose={handleCloseWrite}>
          <DialogTitle>Write A Review</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please provide a detailed description of your thoughts on this
              game.
            </DialogContentText>
            <TextField
              sx={{ width: "100%", marginBottom: "2rem", marginTop: "1rem" }}
              id="outlined-multiline-flexible"
              label="Review"
              multiline
              rows={10}
              value="I enjoyed this game but I wish it had more than 5 hours of content."
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
      </CardContent>
      <CardActions sx={{ marginTop: "auto" }}>
        <Chip color="primary" label="Action" />
        <Chip color="primary" label="Adventure" />
        <Chip color="primary" label="Single-Player" />
      </CardActions>
    </Card>
  );
};

export default SearchCard;
