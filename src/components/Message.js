import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  date: {
    margin: 4,
    minWidth: 150,
  },
  content: {
    margin: 4,
  },
});

const Message = ({date, content}) => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <div className={classes.date}>
          {moment(date).format('DD/MM/YYYY HH:mm')}
        </div>
        <div className={classes.content}>
          {content}
        </div>
      </div>
  )
}

Message.propTypes = {
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Message;