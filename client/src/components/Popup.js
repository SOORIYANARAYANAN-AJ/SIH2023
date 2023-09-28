import React, { useState } from 'react';
// import './Popup.css';

function Popup({ isOpen, togglePopup, children }) {
  return (
    <div>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
