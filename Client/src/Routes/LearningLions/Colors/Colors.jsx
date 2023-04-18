import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Grid, Modal, Paper, Typography } from '@mui/material';

const useStyles = makeStyles(() => ({
  canvas: {
    height: '400px',
    width: '100%',
    border: '1px solid black',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function Colors() {
  const classes = useStyles();
  const [selectedColors, setSelectedColors] = useState([]);
  const [targetColors, setTargetColors] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [colors, setColors] = useState([
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ]);

  const addColor = (color) => {
    setSelectedColors([...selectedColors, color]);
    setColors((prevColors) => prevColors.filter((c) => c !== color));
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 500,
    width: '100%',
    p: 4,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '15px',
  };

  const colorButton = {
    height: '50px',
    width: '50px',
    borderRadius: '100%',
    margin: '10px',
  };

  useEffect(() => {
    if (selectedColors.length === 4) {
      if (
        selectedColors[0] === targetColors[0] &&
        selectedColors[1] === targetColors[1] &&
        selectedColors[2] === targetColors[2] &&
        selectedColors[3] === targetColors[3]
      ) {
        setIsGameOver(true);
        setError(false);
        setModalOpen(true);
      } else {
        setSelectedColors([]);
        setError(true);
        setModalOpen(true);
      }
    }
  }, [selectedColors, targetColors]);

  useEffect(() => {
    if (!isGameOver) {
      const newTargetColors = [];
      while (newTargetColors.length < 4) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        if (!newTargetColors.includes(randomColor)) {
          newTargetColors.push(randomColor);
        }
      }
      setTargetColors(newTargetColors);
    }
  }, [isGameOver]);

  return (
    <div>
      <Typography variant="h4" gutterBottom className={classes.center}>
        Draw a rainbow with the following colors in order:
        {targetColors.map((color) => (
          <span className="m-1" key={color}>
            {color}{' '}
          </span>
        ))}
      </Typography>
      <Grid container justifyContent="center" alignItems="center">
        {colors.map((color) => (
          <Button
            key={color}
            sx={colorButton}
            style={{ backgroundColor: color }}
            onClick={() => addColor(color)}
            disabled={isGameOver}
          />
        ))}
      </Grid>
      <div className={classes.canvas}>
        {selectedColors.map((color, index) => (
          <div
            key={index}
            style={{
              height: `${100 / selectedColors.length}%`,
              width: '100%',
              backgroundColor: color,
            }}
          />
        ))}
      </div>
      {error && (
        <Modal
          open={modalOpen}
          onClick={() => window.location.reload()}
          onClose={() => {
            setModalOpen(false);
          }}
        >
          <Paper sx={modalStyle}>
            <Typography
              variant="h5"
              color="error"
              gutterBottom
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              Oops, that's incorrect! Try again.
            </Typography>
          </Paper>
        </Modal>
      )}
      {isGameOver && (
        <Modal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        >
          <Paper sx={modalStyle}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              Congratulations! You drew a rainbow.
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              5 ⭐ added to your bank!
            </Typography>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Button
                variant="contained"
                onClick={() => window.location.reload()}
                style={{ marginRight: '10px' }}
              >
                Try Again
              </Button>
              <Button
                variant="contained"
                onClick={() => (window.location.href = '/learning-lions')}
              >
                Back
              </Button>
            </div>
          </Paper>
        </Modal>
      )}
    </div>
  );
}

export default Colors;
