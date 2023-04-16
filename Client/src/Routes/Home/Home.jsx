import React, { useState } from 'react';
import styles from './style.module.css';
import { Card, Paper } from '@mui/material';
import BasicModal from '../../components/BasicModal/BasicModal.jsx';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const storedFirstName = localStorage.getItem('firstName');

  return (
    <div className={styles.background}>
      <div className="flex space-x-4 pb-7 h-full justify-center items-center">
        <div className="flex-col space-y-[25px]">
          <Paper
            sx={{
              backgroundColor: 'white',
              color: 'black',
              width: 500,
              borderRadius: '15px',
              border: '4px solid',
              borderColor: '#38a541',
              textAlign: 'center',
            }}
          >
            <h1 className="text-green">Hello {storedFirstName}</h1>
            <p>
              Welcome to the FunStack Zoo! Navigate to the top left to continue
              your homework and start learning with the FunStack Zoo!
            </p>
          </Paper>
          <Paper
            sx={{
              backgroundColor: 'white',
              color: 'black',
              width: 500,
              borderRadius: '15px',
              border: '4px solid',
              borderColor: '#dd5860',
              textAlign: 'center',
            }}
          >
            <h1>Next Assignment</h1>
            <h2>Due: March 15, 2025</h2>
          </Paper>
        </div>
        <button onClick={handleOpenModal}>
          <Card
            sx={{ height: 'fit-content', padding: 3, borderRadius: '20px' }}
          >
            <h2 className="text-center">Teacher</h2>
            <img
              src="https://partnershipla.org/wp-content/uploads/2019/07/Anavelen-Macias-245x300.png"
              alt="teacher"
            />
            <h3 className="font-bold text-center">Elna Macias</h3>
          </Card>
        </button>
        <BasicModal
          title="Teacher Contact Info"
          open={isModalOpen}
          onClose={handleCloseModal}
        >
          <h3 className="text-xl">Email: elnamacias@funstack.com</h3>
          <h3 className="text-xl">Phone: 514-555-8940</h3>
        </BasicModal>
      </div>
    </div>
  );
};

export default Home;
