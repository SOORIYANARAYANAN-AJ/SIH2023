import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
// import StudentModal from './StudentModal';
import StudentModal from './StudentModal'; // Import the StudentModal component

export default function Teacher() {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
    };
  
  return (
    <div className='teacher-main'>
      <p className='teacher-title'>
        <i></i>
      </p>

      <div className="works-grid">
        <div className="w-grid" id="splitwise">
          <div className="initial">
            <div className="project-title">
              <h1>DROPOUT ANALYSIS</h1>
            </div>
            <div className="project-description">
              <i className='quote'> Education is the most powerful weapon which you can use to change the world.</i>
              <p className='record'>Record student details</p>
            </div>
          </div>
          <div className="secondary">
            <Button className='btn' variant="contained" color="success">Record</Button>
            {/* <StudentModal open={open} handleClose={handleClose} /> */}
          </div>
        </div>
      </div>
      <StudentModal open={openModal} handleClose={handleCloseModal} /> {/* Render the StudentModal */}
    </div>
  );
}
