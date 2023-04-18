import { useState } from 'react';
import Button from '@mui/material/Button';
import bark from '../../../assets/Sounds/bark.mp3';
import moo from '../../../assets/Sounds/moo.mp3';
import chicken from '../../../assets/Sounds/chicken.mp3';
import meow from '../../../assets/Sounds/meow.mp3';
import CustomTooltip from '../../../components/ToolTip/CustomTooltip';
import { Card } from '@mui/material';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import StarIcon from '@mui/icons-material/Star';

const animals = [
  {
    name: 'Cat',
    img: 'https://img.freepik.com/premium-vector/cute-cat-cartoon-sitting_194935-99.jpg?w=2000',
    sound: meow,
    color: 'blue',
  },
  {
    name: 'Dog',
    img: 'https://img.freepik.com/premium-vector/cute-little-dog-cartoon-isolated-white_143596-3.jpg?w=2000',
    sound: bark,
    color: 'red',
  },
  {
    name: 'Cow',
    img: 'https://static.vecteezy.com/system/resources/previews/013/211/278/original/cartoon-of-cow-illustration-cow-in-format-image-illustration-of-cow-free-png.png',
    sound: moo,
    color: 'green',
  },
  {
    name: 'Chicken',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chicken_cartoon_04.svg/723px-Chicken_cartoon_04.svg.png',
    sound: chicken,
    color: 'yellow',
  },
];

const Animals = () => {
  const [animal, setAnimal] = useState(animals[0]);
  const [score, setScore] = useState(0);
  const [answerEntered, setAnswerEntered] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [animalIndex, setAnimalIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  const checkAnswer = (answer) => {
    if (answer === animal.name) {
      setScore(score + 1);
      setCorrectAnswer(true);
    } else {
      setCorrectAnswer(false);
    }
    setAnswerEntered(true);
    setModalOpen(true);
  };

  const onNextHandler = () => {
    //set to next animal
    if (animalIndex < animals.length - 1) {
      setAnimal(animals[animalIndex + 1]);
      setAnimalIndex(animalIndex + 1);
    } else {
      setDone(true);
    }
    setAnswerEntered(false);
    setCorrectAnswer(false);
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
          You got {score} out of {animals.length} correct!
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
      {/* Question Card */}
      {!done && (
        <div className="flex-col justify-center align-center items-center">
          <h1 className="text-center">What animal is this</h1>

          <div
            className="w-full mt-4 flex justify-center"
            onClick={() => playSound(animal.sound)}
          >
            <CustomTooltip title="Click here for a surprise!">
              <Card
                sx={{
                  borderRadius: '15px',
                  padding: '15px',
                  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                }}
              >
                <img src={animal.img} className="w-[200px] h-[200px]" />
              </Card>
            </CustomTooltip>
          </div>
          <div className="flex space-x-5 mt-[5rem]">
            {animals.map((animal, index) => {
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
                    borderColor: animal.color,
                  }}
                  onClick={() => {
                    checkAnswer(animal.name);
                  }}
                >
                  {animal.name}
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

export default Animals;
