import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const CHAR_NB_BY_WIDTH = 0.12;
const FONT_SIZE = 16;
const LINE_PADDING = 8;
const LINE_TO_LOAD = 15;

const estimateMessageHeight = (message) => {
    const nbCharByLine = CHAR_NB_BY_WIDTH * window.innerWidth;
    return (Math.floor(message.content.length / nbCharByLine) + 1) * FONT_SIZE + LINE_PADDING;
}

const estimateListHeight = (messages) => {
    return messages.reduce((height, message) => {
      return height + estimateMessageHeight(message);
   }, 0);
}  

const MessageList = ({messages, scrollTop}) => {
    const estimatedHeight = estimateListHeight(messages);
    const ratio = scrollTop / estimatedHeight;
    const firstMessageIndex = Math.min(Math.floor(messages.length*ratio), messages.length - LINE_TO_LOAD + 1);
    const displayedMessages = messages.slice(firstMessageIndex, firstMessageIndex + LINE_TO_LOAD);
    const fillerHeight = estimateListHeight(messages.slice(0, firstMessageIndex));

    const outerElementStyle = {
        height: estimatedHeight + 'px',
    };
    const fillerStyle = {
        height: fillerHeight + 'px',
    };

    return (
    <div style={outerElementStyle}>
        <div style={fillerStyle} />
        {displayedMessages.map((message)=>{
          return <Message key={message.date} date={message.date} content={message.content} />;
        })}
    </div>
  )
};

MessageList.propTypes = {
  messages: PropTypes.array,
  scrollTop: PropTypes.number,
};

MessageList.defaultProps = {
  messages: [],
  scrollTop: 0,
};

export default MessageList;
