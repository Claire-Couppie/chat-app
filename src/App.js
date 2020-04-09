import React from 'react';
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    minHeight: '100vh',
    maxHeight: '100vh',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MessageList />
      <MessageInput />
    </div>
  );
}

export default App;
