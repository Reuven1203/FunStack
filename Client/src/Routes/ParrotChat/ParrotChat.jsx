import React from 'react';
import Chat from '../../components/Chat/Chat';

function ParrotChat() {
  return (
    <>
      <h1 className="text-6xl text-center mt-10">
        Parrot Chat
        {'\u{1F99C}'}
      </h1>
      <Chat />
    </>
  );
}

export default ParrotChat;
