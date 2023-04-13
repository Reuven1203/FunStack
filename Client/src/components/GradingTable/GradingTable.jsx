import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(name) {
  const getFeedback = (grade) => {
    if (grade >= 90) {
      return " You're doing great! Keep it up!👍";
    } else if (grade >= 80) {
      return " Excellent! You're doing great!👏";
    } else if (grade >= 70) {
      return ' Good job!👌';
    } else if (grade >= 60) {
      return " Let's keep it up!💪";
    } else {
      return ' We need more effort from you, you can do this!🙏';
    }
  };

  const grade1 = Math.floor(Math.random() * 51) + 50; // generate a random grade between 50-100
  const grade2 = Math.floor(Math.random() * 51) + 50; // generate a random grade between 50-100
  const averageGrade = Math.floor((grade1 + grade2) / 2); // calculate the average grade
  return {
    name,
    finalGrade: `${averageGrade}%`,
    feedback: getFeedback(averageGrade),
    history: [
      {
        date: '2020-01-05',
        attempt: '1',
        grade: `${grade1}%`,
      },
      {
        date: '2020-01-02',
        attempt: '2',
        grade: `${grade2}%`,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        sx={{ '& > *': { borderBottom: 'unset' } }}
        onClick={() => setOpen(!open)}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.finalGrade}</TableCell>
        <TableCell>{row.feedback}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Attempt</TableCell>
                    <TableCell>Grade</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.attempt}</TableCell>
                      <TableCell>{historyRow.grade}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    finalGrade: PropTypes.string.isRequired,
    feedback: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        grade: PropTypes.string.isRequired,
        attempt: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData('🔢 Numbers Activity'),
  createData('🔤 Alphabet Activity'),
  createData('🔺 Shape Activity'),
  createData('🐒 Animal Sound Activity'),
  createData('🎨 Color Activity'),
];

export default function GradingTable() {
  return (
    <TableContainer sx={{ width: '80%' }} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ fontWeight: 'bold' }}>Activity</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Grade</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Feedback</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
