import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    margin: 8,
    justifyContent: 'space-between',
    height: 50,
  },
  input: {
    width: '100%',
    marginRight: 10,
  },
});

const MessageInput = () => {
  const [value, setValue] = useState('');
  const classes = useStyles();

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(value);
  }

  return (
      <form onSubmit={handleSubmit} className={classes.root}>
        <TextField label="Type a message" onChange={e => setValue(e.target.value)}  className={classes.input} />
        <Button variant="outlined" type="submit">SEND</Button>
      </form>
  )
}

export default MessageInput;