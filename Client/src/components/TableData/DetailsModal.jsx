import { Avatar } from '@mui/material';
import React from 'react';
import { Card, CardContent, Modal } from '@mui/material';

export const DetailsModal = ({ open, handleClose, selectedData }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Card
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          height: 300,
          border: '2px solid #000',
        }}
      >
        <CardContent>
          <h1 className="text-4xl flex justify-center">
            {selectedData.firstName} {selectedData.lastName}
            <Avatar src={selectedData.avatar} sx={{ width: 50, height: 50 }} />
          </h1>
          <div className="text-lg text-center m-4 space-y-4">
            <p>Age: {selectedData.age}</p>
            <p>Email: {selectedData.email}</p>
            <p>Location: {selectedData.location}</p>
            <p>Phone: {selectedData.phoneNumber}</p>
          </div>
        </CardContent>
      </Card>
    </Modal>
  );
};
