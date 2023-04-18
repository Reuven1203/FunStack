import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const shapes = [
  {
    name: 'Circle',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Pan_Blue_Circle.png/640px-Pan_Blue_Circle.png',
    color: 'red',
  },
  {
    name: 'Square',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAS1BMVEUAgAAAewB9vX2MxIybzJsAeQCr1Ku42rgAdwC527mBv4HZ7NkAcwB0uXR4unj8/vzz9/Pk8OTP5s/I4siy17KRx5GgzqCOxY6ezZ4n9oUoAAABg0lEQVR4nO3dS24CQQwA0Z4/zQx/BnL/k2aQyCLZBCEhKHe9E7jkrSWn3f4wHk+nPORzv2jv5uaX+mnr5l9z+4BL/4ghD3+M6TytFt2P6mN1T5k2qe9SZFVdQOElfGFbvXuIl7KQz0I+C/ks5LOQr4jCOXxhYyGbhXwW8lnIZyGfhXwW8lnIZyGfhXwW8lnIZyGfhXwW8lnIV0RhbSGbhXwW8lnIZyGfhXwW8lnIZyGfhXwW8lnIZyGfhXwW8lnIZyGfhXwW8hVRuA5fGP9iyEI4C/ks5LOQz0I+C/ks5LOQz0I+C/ks5LOQz0I+C/ks5LOQz0I+C/ks5Cui8Bq+MP6fGQvhLOSzkM9CPgv5LOSzkM9CPgv5LOSzkM9CPgv5LOSzkM9CPgv5iij8Cl/Yd+8e4qUs5LOQz0I+C/ks5LOQz0I+C/ks5LOQz0I+C/ks5LOQz0I+C/ks5LOQbykcwhfm8IXxd2ghnIV8FvJZyGchn4V8FvLdCqcqstU2jZs6sm3+Bjn6EUWa4rsaAAAAAElFTkSuQmCC',
    color: 'blue',
  },
  {
    name: 'Triangle',
    img: 'https://www.freeiconspng.com/thumbs/triangle-png/orange-triangle-png-4.png',
    color: 'green',
  },
  {
    name: 'Star',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLeCEsKmXkpvZLrBexmvEfYcHi8nlgwFV0Og&usqp=CAU',
    color: 'purple',
  },
];

const Shapes = () => {
  const [shape, setShape] = useState(shapes[0]);
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [shapeIndex, setShapeIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const checkAnswer = (answer) => {
    if (answer === shape.name) {
      setScore(score + 1);
      setCorrectAnswer(true);
    } else {
      setCorrectAnswer(false);
    }
    setModalOpen(true);
  };
  const onNextHandler = () => {
    //set to next shape
    if (shapeIndex < shapes.length - 1) {
      setShape(shapes[shapeIndex + 1]);
      setShapeIndex(shapeIndex + 1);
    } else {
      setDone(true);
    }
    setModalOpen(false);
  };

  const handleModalClose = () => {
    setModalOpen(false);
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

  const correctStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 350,
    width: '100%',
    p: 4,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '15px',
  };

  const body = (
    <Modal open={modalOpen} onClose={handleModalClose}>
      <Paper sx={correctStyle}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {correctAnswer ? 'Correct!' : 'Oops, that was incorrect'}
        </Typography>
        <div style={{ textAlign: 'center' }}>
          <Button variant="outlined" onClick={onNextHandler}>
            Continue
          </Button>
        </div>
      </Paper>
    </Modal>
  );

  const finalAnswer = (
    <Modal
      open={done}
      onClose={() => {
        handleModalClose;
      }}
    >
      <Paper sx={modalStyle}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          You got {score} out of {shapes.length} correct!
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {score} ⭐ added to your bank!
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
  );
  return (
    <div className="w-full h-full flex justify-center mt-7">
      {!done && (
        <div className="flex-col justify-center align-center items-center">
          <h1 className="text-center">What shape is this</h1>
          <div className="w-full flex justify-center">
            <img src={shape.img} className="w-[200px] h-[200px]" />
          </div>
          <div className="flex space-x-5 mt-[5rem]">
            {shapes.map((shape, index) => {
              return (
                <Button
                  key={index}
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    width: '200px',
                    height: '100px',
                    fontSize: '25px',
                    borderRadius: '15px',
                    border: '4px solid',
                    borderColor: shape.color,
                  }}
                  onClick={() => {
                    checkAnswer(shape.name);
                  }}
                >
                  {shape.name}
                </Button>
              );
            })}
          </div>
        </div>
      )}
      {!done && (
        <Modal
          open={modalOpen}
          onClose={() => {
            handleModalClose;
          }}
        >
          {body}
        </Modal>
      )}

      {done && (
        <Modal
          open={true}
          onClose={() => {
            handleModalClose;
          }}
        >
          {finalAnswer}
        </Modal>
      )}
    </div>
  );
};

export default Shapes;
