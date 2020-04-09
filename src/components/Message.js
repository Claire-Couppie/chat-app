import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Message = ({date, content}) => {
  return (
      <div>
        {moment(date).format('DD/MM/YYYY hh:mm')}
        {content}
      </div>
  )
}

Message.propTypes = {
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Message;