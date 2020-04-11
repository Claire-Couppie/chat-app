import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Message from './Message';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    overflowY: 'scroll',
  },
});

const MessageList = ({fetchMessages, messages}) => {
  useEffect(() => {
    fetchMessages();
  }, []);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages]);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {messages.map((message)=>{
        return <Message key={message.date} date={message.date} content={message.content} />;
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};

MessageList.propTypes = {
  fetchMessages: PropTypes.func,
  messages: PropTypes.array,
};

MessageList.defaultProps = {
  fetchMessages: () => {},
  messages: [],
};

const mapStateToProps = state => ({
  messages: state.messages,
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => {dispatch({type: "SAGA/FETCH_MESSAGES", page: 0, perPage: 15})}
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
