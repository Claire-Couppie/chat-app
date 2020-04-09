import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const MessageInput = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(value);
  }

  return (
      <form onSubmit={handleSubmit}>
        <TextField label="Type a message" onChange={e => setValue(e.target.value)} />
        <Button variant="outlined" type="submit">SEND</Button>
      </form>
  )
}

export default MessageInput;