import React from 'react';
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { createStore } from 'redux'
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';
import { makeStyles } from '@material-ui/core/styles';

const store = createStore(rootReducer)

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
    <Provider store={store}>
      <div className={classes.root}>
        <MessageList />
        <MessageInput />
      </div>
    </Provider>
  );
}

export default App;
