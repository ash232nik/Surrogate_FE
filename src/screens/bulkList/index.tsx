import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PageLayout from "../../layout/pageLayout/pageLayout";
import Box from "@mui/material/Box";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import {
  Button,
  ButtonGroup,
  ButtonProps,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.white ,
    color: theme.palette.common.black,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  id: number,
  cardName: string,
  surrogateName: string,
  cardMode: string,
  cardType: string,
  interestRate: string,
  extraCard: string,
  CIBIL: number,
  salary: string,
  error: boolean
) {
  return {
    id,
    cardName,
    surrogateName,
    cardMode,
    cardType,
    interestRate,
    extraCard,
    CIBIL,
    salary,
    error,
  };
}

const rows = [
  createData(
    1,
    "Premier",
    "Card-For-Card",
    "Business",
    "Travel",
    "12%",
    "Applicable",
    700,
    "30,000",
    false
  ),
  createData(
    2,
    "Premier",
    "Payroll",
    "Business",
    "Travel",
    "12%",
    "Non-Applicable",
    700,
    "40,000",
    true
  ),
  createData(
    3,
    "Premier",
    "Card-For-Card",
    "Business",
    "Travel",
    "12%",
    "Applicable",
    700,
    "30,000",
    false
  ),
  createData(
    4,
    "Premier",
    "CIBIL",
    "Business",
    "Travel",
    "12%",
    "Non-Applicable",
    700,
    "20,000",
    true
  ),
  createData(
    5,
    "Premier",
    "Payroll",
    "Business",
    "Travel",
    "12%",
    "Applicable",
    700,
    "30,000",
    false
  ),
];

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box
        sx={{
          minWidth: 35,
          display: "flex",
          justifyContent: "flex-end",
          mt: 2,
        }}
      >
        <Typography variant="body2">{`${Math.round(
          props.value
        )}% Completed`}</Typography>
      </Box>
    </Box>
  );
}

export default function BulkList() {
  const [progress, setProgress] = useState(0);
  const [alignment, setAlignment] = useState("web");
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    setAlignment(value);
  };
  const progressBar = {
    borderRadius: "10px",
    height: "8px",
  };
  const ColorButton = styled(ToggleButton)(({ theme }) => ({
    backgroundColor: " rgb(240, 240, 240)",
    border: " rgb(240, 240, 240) 1px ",
    color: "black",
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: "#1976d2",
    },
  }));
  // const column = [
  //   { title: "#" },
  //   { title: "Card Name" },
  //   { title: "Surrogate Name" },
  //   { title: "Card Mode" },
  //   { title: "Card Type" },
  //   { title: "Interest Rate" },
  //   { title: "Extra Card" },
  //   { title: "CIBIL Score" },
  //   { title: "Salary Limit" },
  // ];
  return (
    <PageLayout>
      <Box sx={{ padding: "2% 0" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "2%",
          }}
        >
          <Typography sx={{ fontSize: "1.2rem" }}>
            Validating Uploaded Document...
          </Typography>
          <CloseIcon color="primary" />
        </Box>

        <LinearProgressWithLabel
          variant="determinate"
          value={progress}
          sx={progressBar}
        />
      </Box>
      <Divider />
      <Box
        sx={{
          padding: "2% 0",
          boxSizing: "unset",
          display: "flex",
          gap: "5%",
        }}
      >
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          File Name: arantic
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          Record Found: 25
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          Valid Records: 20
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          Error Found: 02
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          margin: "1% 0",
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          // sx={ToggleBoxStyle}
        >
          <ColorButton value="web">All</ColorButton>
          <ColorButton value="android">Valid</ColorButton>
          <ColorButton value="ios">Error</ColorButton>
        </ToggleButtonGroup>
        {/* <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <ColorButton>All</ColorButton>
          <ColorButton>Valid</ColorButton>
          <ColorButton>Error</ColorButton>
        </ButtonGroup> */}
      </Box>
      <TableContainer component={Paper} sx={{ margin: "2% 0" }}>
        <Table style={{ width: "100%" }} aria-label="customized table">
          <TableHead sx={{ backgroundColor: "#8fc2f4" }}>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Card Name</StyledTableCell>
              <StyledTableCell>Surrogate Name</StyledTableCell>
              <StyledTableCell>Card Mode</StyledTableCell>
              <StyledTableCell>Card Type</StyledTableCell>
              <StyledTableCell>Interest Rate</StyledTableCell>
              <StyledTableCell>Extra Card</StyledTableCell>
              <StyledTableCell>CIBIL Score</StyledTableCell>
              <StyledTableCell>Salary Limit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.id}
                sx={{ backgroundColor: row.error ? "#ffe5e3" : "white" }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell>{row.cardName}</StyledTableCell>
                <StyledTableCell>{row.surrogateName}</StyledTableCell>
                <StyledTableCell>{row.cardMode}</StyledTableCell>
                <StyledTableCell>{row.cardType}</StyledTableCell>
                <StyledTableCell>{row.interestRate}</StyledTableCell>
                <StyledTableCell>{row.extraCard}</StyledTableCell>
                <StyledTableCell>{row.CIBIL}</StyledTableCell>
                <StyledTableCell>{row.salary}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageLayout>
  );
}
