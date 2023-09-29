import { React, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Link } from 'react-router-dom';
import { QuizService } from '../../Services/Quiz.service';

const UsernameDialog = ({ open, setOpen, text }) => {
  const [username, setUsername] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const insertQuiz = () => {
    console.log(text);
    console.log(username);
    if (text === 'Enter username assignee for quiz.') {
      QuizService.insertQuiz(username);
    }
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <DialogContentText>
            {text}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Link to={`/assigned/${username}`} style={{ color: "primary" }}>
            <Button color="primary" onClick={insertQuiz}>
              Continue
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UsernameDialog;
