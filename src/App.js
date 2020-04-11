import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { makeStyles } from '@material-ui/core/styles';
import rootReducer from './reducers';
import rootSaga from './sagas';
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,  applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

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
