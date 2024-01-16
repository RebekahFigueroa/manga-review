import {
  Box,
  Button,
  Chip,
  List,
  ListItem,
  ListItemText,
  Rating,
} from "@mui/material";
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
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";

const SearchCard = ({ game, fetchGames }) => {
  const { isAuthed: userId } = useAuthContext();
  const [openView, setOpenView] = useState(false);
  const [openWrite, setOpenWrite] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    reviewText: "",
    rating: 0,
  });

  const handleClickOpenView = () => {
    setOpenView(true);
  };
  const handleCloseView = () => {
    setOpenView(false);
  };

  const handleClickOpenWrite = () => {
    setOpenWrite(true);
  };
  const handleCloseWrite = () => {
    setOpenWrite(false);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch(`/reviews/${game.id}`);
      const data = await response.json();
      setReviews(data);
    };

    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReviewTextChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      reviewText: value,
    });
  };

  const handleRatingChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      rating: value,
    });
  };

  const handleSubmit = async () => {
    const response = await fetch("/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        userId: userId, // TODO: REMOVE
        gameId: game.id,
      }),
    });
    const review = await response.json();
    fetchGames();
    setReviews((reviews) => [review, ...reviews]);
    setFormData({
      reviewText: "",
      rating: 0,
    });
    handleCloseWrite();
  };

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
        image={game.image_url}
        title="Search Card"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ rightMargin: "2rem" }}
        >
          {game.name}
        </Typography>
        <Rating
          name="customized-10"
          max={10}
          value={Math.round(game.rating)}
          readOnly
        />

        {/* View Reviews Logic */}
        <Button
          variant="outlined"
          size="small"
          onClick={handleClickOpenView}
          sx={{ marginTop: "2rem" }}
        >
          View Reviews
        </Button>
        <Dialog open={openView} onClose={handleCloseView}>
          <DialogTitle>Reviews for {game.name}</DialogTitle>
          <DialogContent>
            <Box>
              <List>
                {reviews.map((review) => (
                  <ListItem key={review.id}>
                    <ListItemText
                      primary={review.username}
                      secondary={review.review_text}
                    />

                    <Rating
                      name="customized-10"
                      max={10}
                      value={review.rating}
                      readOnly
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseView}>Cancel</Button>
          </DialogActions>
        </Dialog>

        {/* Write Review Form */}
        {!reviews.some((review) => review.user_id === userId) && (
          <Button
            variant="outlined"
            size="small"
            onClick={handleClickOpenWrite}
            sx={{ marginLeft: "1rem", marginTop: "2rem" }}
          >
            Write Review
          </Button>
        )}
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
              value={formData.reviewText}
              onChange={handleReviewTextChange}
              placeholder="I enjoyed this game but I wish it had more than 5 hours of content."
            />
            <Typography component="legend">Star Rating</Typography>
            <Rating
              name="customized-10"
              defaultValue={2}
              max={10}
              value={formData.rating}
              onChange={handleRatingChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseWrite}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </CardContent>
      <CardActions sx={{ marginTop: "auto" }}>
        {game.genre.map((chip, index) => (
          <Chip key={index} color="primary" label={chip} />
        ))}
      </CardActions>
    </Card>
  );
};

export default SearchCard;
