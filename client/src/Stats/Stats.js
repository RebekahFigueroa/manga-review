import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import * as React from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(achievement, score) {
  return { achievement, score };
}

const stats = [
  createData("How many games have you reviewed?", 13),
  createData("Do you prefer multiplayer or singleplayer?", "multiplayer"),
  createData("What is your favorite genre?", "Strategy"),
  createData("What is your average game rating?", "7"),
  createData("What is the average length of your reviews?", "250 characters"),
];

const Stats = () => {
  return (
    <Box
      sx={{
        marginTop: "2rem",
        marginBottom: "2rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TableContainer sx={{ maxWidth: "60rem" }} component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Achievments</StyledTableCell>
              <StyledTableCell align="right">Score</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stats.map((stat) => (
              <StyledTableRow key={stat.achievement}>
                <StyledTableCell component="th" scope="row">
                  {stat.achievement}
                </StyledTableCell>
                <StyledTableCell align="right">{stat.score}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Stats;
