import { useState } from 'react';
import Button from '@mui/material/Button';
import CustomTooltip from '../../../components/ToolTip/CustomTooltip';
import { Card } from '@mui/material';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import onePlusOne from '../../../assets/Numbers/1plus1.png';
import threePlusTwo from '../../../assets/Numbers/3plus2.png';
import fourMinusOne from '../../../assets/Numbers/4-1.png';
import fourPlusThree from '../../../assets/Numbers/4plus3.png';

const numbers = [
  {
    answer: 2,
    img: onePlusOne,
    color: 'blue',
  },
  {
    answer: 5,
    img: threePlusTwo,
    color: 'red',
  },
  {
    answer: 3,
    img: fourMinusOne,
    color: 'green',
  },
  {
    answer: 7,
    img: fourPlusThree,
    color: 'yellow',
  },
];

const Numbers = () => {
  const [number, setNumber] = useState(numbers[0]);
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [numberIndex, setNumberIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const checkAnswer = (answer) => {
    if (answer === number.answer) {
      setScore(score + 1);
      setCorrectAnswer(true);
    } else {
      setCorrectAnswer(false);
    }
    setModalOpen(true);
  };

  const onNextHandler = () => {
    //set to next animal
    if (numberIndex < numbers.length - 1) {
      setNumber(numbers[numberIndex + 1]);
      setNumberIndex(numberIndex + 1);
    } else {
      setDone(true);
    }
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
          You got {score} out of {numbers.length} correct!
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
          <h1 className="text-center">What does this equal to?</h1>

          <div
            className="w-full mt-4 flex justify-center"
          >
            <CustomTooltip>
              <Card
                sx={{
                  borderRadius: '15px',
                  padding: '15px',
                  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                }}
              >
                <img src={number.img} className="w-[200px] h-[200px]" />
              </Card>
            </CustomTooltip>
          </div>
          <div className="flex space-x-5 mt-[5rem]">
            {numbers.map((number, index) => {
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
                    borderColor: number.color,
                  }}
                  onClick={() => {
                    checkAnswer(number.answer);
                  }}
                >
                  {number.answer}
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

export default Numbers;
