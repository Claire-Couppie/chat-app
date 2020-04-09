import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { addMessage } from '../actions';

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

const MessageInput = ({addMessage}) => {
  const [value, setValue] = useState('');
  const classes = useStyles();

  const handleSubmit = (event)=>{
    event.preventDefault();
    addMessage(value);
    setValue('');
  }

  return (
      <form onSubmit={handleSubmit} className={classes.root}>
        <TextField value={value} label="Type a message" onChange={e => setValue(e.target.value)}  className={classes.input} />
        <Button variant="outlined" type="submit">SEND</Button>
      </form>
  )
}

MessageInput.propTypes = {
  addMessage: PropTypes.func,
};

MessageInput.defaultProps = {
    addMessage: () => {},
};

const mapDispatchToProps = dispatch => ({
  addMessage: content => dispatch(addMessage({date: moment().format('YYYY-MM-DD HH:mm:ss.SSS'), content}))
})

export default connect(null, mapDispatchToProps)(MessageInput);