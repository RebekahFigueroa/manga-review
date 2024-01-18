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
import { useAuthContext } from "../contexts/AuthContext";

const LibraryCard = ({ review, setReviews }) => {
  const { isAuthed: userId } = useAuthContext();
  const [formData, setFormData] = useState({
    review_text: review.review_text,
    rating: review.rating,
  });
  const [openWrite, setOpenWrite] = useState(false);

  const handleClickOpenWrite = () => {
    setOpenWrite(true);
  };
  const handleCloseWrite = () => {
    setOpenWrite(false);
  };

  const handleReviewTextChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      review_text: value,
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
    const response = await fetch(`/reviews/${review.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        userId,
        gameId: review.game_id,
      }),
    });
    const updatedReview = await response.json();

    if (!updatedReview.errors) {
      setReviews((reviews) =>
        reviews.reduce((array, review) => {
          if (review.id !== updatedReview.id) {
            array.push(review);
          } else {
            array.push({
              ...review,
              review_text: updatedReview.review_text,
              rating: updatedReview.rating,
            });
          }

          return array;
        }, [])
      );

      handleCloseWrite();
    } else {
      alert(updatedReview.errors.join(", "));
    }
  };

  const handleDelete = () => {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    }).then(() => {
      setReviews((reviews) => reviews.filter((r) => r.id !== review.id));
    });
  };

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
        image={review.image_url}
        title="Search Card"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ rightMargin: "2rem" }}
        >
          {review.name}
        </Typography>
        <Rating name="customized-10" max={10} value={review.rating} readOnly />
        <Typography
          gutterBottom
          variant="h10"
          component="div"
          sx={{ rightMargin: "2rem" }}
        >
          {review.review_text}
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
              value={formData.review_text}
              onChange={handleReviewTextChange}
              placeholder="Review"
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
        <Button
          variant="outlined"
          size="small"
          onClick={handleDelete}
          sx={{ marginLeft: "1rem", marginTop: "2rem" }}
        >
          Delete Review
        </Button>
      </CardContent>
      <CardActions sx={{ marginTop: "auto" }}>
        {review.genres.map((chip) => (
          <Chip color="primary" label={chip} />
        ))}
      </CardActions>
    </Card>
  );
};

export default LibraryCard;
