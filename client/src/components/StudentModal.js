// StudentModal.js
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function StudentModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          Student Details
        </Typography>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="school"
          label="School"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="standard"
          label="Standard"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="place"
          label="Place"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="reason"
          label="Reason"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
}
