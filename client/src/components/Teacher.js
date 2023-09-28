import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Popup from './Popup';

export default function Teacher() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className='teacher-main'>
    

      <div className="works-grid">
        {!isPopupOpen && 
        <div className="w-grid" id="splitwise">
          <div className="initial">
            <div className="project-title">
              <h1>DROPOUT ANALYSIS</h1>
            </div>
            <div className="project-description">
              <i className='quote'>Education is the most powerful weapon which you can use to change the world.</i>
              <p className='record'>Record student details</p>
            </div>
          </div>
          <div className="secondary">
            <Button className='btn' variant="contained" color="success" onClick={togglePopup}>
              Record
            </Button>
           
          </div>
        </div>}
        <Popup isOpen={isPopupOpen} togglePopup={togglePopup}>
            <h2>Student Details</h2>
                  <div className="form-group">
                    <label htmlFor="studentName">Student Name:</label>
                    <input type="text" id="studentName" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="standard">Standard:</label>
                    <input type="text" id="standard" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="school">School:</label>
                    <input type="text" id="school" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="place">Place:</label>
                    <input type="text" id="place" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reason">Reason for Dropout:</label>
                    <input type="text" id="reason" />
                  </div>
                  <button onClick={togglePopup} className="save-button">Save</button>

            </Popup>
      </div>
      
    </div>
  );
}
