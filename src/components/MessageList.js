import React from 'react';
import Message from './Message';

const fakeMessageList = [
    {
        date: '2020-04-04T10:35:24-08:00',
        content: 'Hello world',
    },
    {
        date: '2020-04-04T11:35:24-08:00',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        date: '2020-04-05T10:35:24-08:00',
        content: 'Hello world',
    },
    {
        date: '2020-04-06T10:35:24-08:00',
        content: 'Hello world',
    },
    {
        date: '2020-04-07T10:35:24-08:00',
        content: 'Hello world',
    },
    {
        date: '2020-04-08T10:35:24-08:00',
        content: 'Hello world',
    },
    {
        date: '2020-04-09T10:35:24-08:00',
        content: 'Hello world',
    },
]

const MessageList = () => {
  return fakeMessageList.map((message)=>{
      return <Message key={message.date} date={message.date} content={message.content} />;
    }
  );
}

export default MessageList;