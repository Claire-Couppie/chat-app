import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MessageList from './MessageList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    overflowY: 'scroll',
  },
});

const MessageListContainer = ({fetchMessages, messages}) => {
  const [loading, setLoading] = useState(false);
  const [bottomReached, setBottomReached] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);

    if (e.target.scrollTop===0) {
      setLoading(true);
    }
    if (e.target.scrollHeight - e.target.scrollTop >= e.target.clientHeight - 1 && e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 1) {
      setBottomReached(true);
    }
    else {
      setBottomReached(false);        
    }
  }

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
      const initializeData = async () => {
        await fetchMessages();
        scrollToBottom();
      }
      initializeData();
  }, []);

  useEffect(() => {
    if (bottomReached) {
      scrollToBottom();
    }
  }, [messages]);

  useEffect(() => {
    if (loading) {
      fetchMessages();
      setLoading(false);    
    }
  }, [loading]);

  const classes = useStyles();
  return (
    <div className={classes.root} onScroll={handleScroll}>
      <MessageList messages={messages} scrollTop={scrollTop} />
      <div ref={messagesEndRef} />
    </div>
  );
};

MessageListContainer.propTypes = {
  fetchMessages: PropTypes.func,
  messages: PropTypes.array,
};

MessageListContainer.defaultProps = {
  fetchMessages: () => {},
  messages: [],
};

const mapStateToProps = state => ({
  messages: state.messages,
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => {
    dispatch({type: "SAGA/FETCH_MESSAGES"});
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageListContainer);
