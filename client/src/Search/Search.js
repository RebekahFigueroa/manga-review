import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import SearchCard from "./SearchCard";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Singleplayer",
  "Multiplayer",
  "Action",
  "Adventure",
  "Horror",
  "Indie",
  "MMO",
  "Puzzle",
  "PVP",
  "RPG",
  "Sandbox",
  "Sports",
  "Strategy",
  "Simulation",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Search = () => {
  const [openCreateGame, setOpenCreateGame] = useState(false);
  const handleClickOpenCreateGame = () => {
    setOpenCreateGame(true);
  };
  const handleCloseCreateGame = () => {
    setOpenCreateGame(false);
  };

  const theme = useTheme();
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    genres: [],
  });

  const handleTitleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      title: value,
    });
  };

  const handleImageUrlChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      imageUrl: value,
    });
  };

  const handleGenreChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      // On autofill we get a stringified value.
      genres: typeof value === "string" ? value.split(",") : value,
    });
  };

  const handleSubmit = async () => {
    const response = await fetch("/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const game = await response.json();

    setGames((games) => [...games, game]);
    setFormData({
      title: "",
      imageUrl: "",
      genres: [],
    });
    handleCloseCreateGame();
  };

  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch("/games");
      const data = await response.json();
      setGames(data);
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
        Find A Game
      </Typography>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{ width: "50%" }}
      />

      {/* Add a Game Button/ Dialog */}
      <Button
        variant="outlined"
        size="large"
        onClick={handleClickOpenCreateGame}
        sx={{ marginLeft: "1rem", marginTop: "2rem" }}
      >
        Add A Game
      </Button>
      <Dialog open={openCreateGame} onClose={handleCloseCreateGame}>
        <DialogTitle>Add A Game</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide more information on this game.
          </DialogContentText>
          <TextField
            sx={{ width: "100%", marginBottom: "2rem", marginTop: "1rem" }}
            id="outlined-multiline-flexible"
            label="Game Title"
            value={formData.title}
            onChange={handleTitleChange}
            placeholder="Dota 2"
          />
          <TextField
            sx={{ width: "100%", marginBottom: "2rem", marginTop: "1rem" }}
            id="outlined-multiline-flexible"
            label="Add Image URL"
            value={formData.imageUrl}
            onChange={handleImageUrlChange}
            placeholder="google.com"
          />

          {/* multiselect chips */}
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">
              Select A Genre
            </InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={formData.genres}
              onChange={handleGenreChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, formData.genres, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCreateGame}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>

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
        {games.map((game) => (
          <SearchCard key={game.id} game={game} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Search;
