import React, { useState, useRef, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CustomToolTip from '../../components/ToolTip/CustomToolTip';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=3',
      messages: [
        { id: 1, sender: 'me', text: 'Hi, how are you?' },
        { id: 2, sender: 'user', text: "I'm good, thanks. How about you?" },
        { id: 3, sender: 'me', text: 'Doing well, thanks for asking.' },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/150?img=8',
      messages: [
        { id: 1, sender: 'me', text: 'Hello there!' },
        { id: 2, sender: 'user', text: "Hi, how's it going?" },
      ],
    },
    {
      id: 3,
      name: 'Olivia Johnson',
      avatar: 'https://i.pravatar.cc/150?img=1',
      messages: [
        { id: 1, sender: 'user', text: 'Hello!' },
        { id: 2, sender: 'me', text: 'Hi, come study with me! ' },
      ],
    },
  ]);
  const [activeChatId, setActiveChatId] = useState(1);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat window whenever a new message is added
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [chats]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    const newMessage = {
      id: chats[activeChatId - 1].messages.length + 1,
      text: message,
    };
    const updatedChats = [...chats];
    updatedChats[activeChatId - 1].messages.push(newMessage);
    setChats(updatedChats);
    setMessage('');
  };

  const handleChatClick = (chatId) => {
    setActiveChatId(chatId);
  };

  const renderChatWindow = () => {
    const activeChat = chats[activeChatId - 1];
    // when i press enter i want the message to send
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleSendMessage();
      }
    };

    return (
      <div className="flex flex-col h-2/3 rounded-lg bg-white shadow-lg p-4">
        <div className="flex justify-center ">
          <Avatar alt="" src={activeChat.avatar} />
          <h3 className="text-md font-bold m-2">{activeChat.name}</h3>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto" ref={chatBoxRef}>
          {activeChat.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender !== 'me' ? 'justify-end' : 'justify-start'
              } mb-2`}
            >
              <Card
                className={`${
                  message.sender === 'me'
                    ? 'bg-primary-500'
                    : 'bg-secondary-100'
                } max-w-sm rounded-xl ${
                  message.sender === 'me' ? 'ml-8' : 'mr-8'
                } p-2 shadow-md`}
              >
                <CardContent className="text-black">{message.text}</CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex mt-4">
          <TextField
            fullWidth
            variant="outlined"
            label="Message"
            value={message}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <CustomToolTip title="Click here to send a message">
            <Button
              variant="contained"
              color="primary"
              sx={{ ml: 2, md: 1, mt: 1 }}
              onClick={handleSendMessage}
            >
              Send
            </Button>
          </CustomToolTip>
        </div>
      </div>
    );
  };

  const renderUserList = () => {
    return (
      <div className="flex flex-col bg-white rounded-lg shadow-md p-4">
        <h3 className="text-center text-md font-bold">Friends👨‍👩‍👧‍👦</h3>
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => handleChatClick(chat.id)}
            className={`flex mb-2 p-2 hover:bg-gray-100 rounded-lg ${
              chat.id === activeChatId ? 'bg-gray-100' : ''
            }`}
          >
            <Avatar alt={chat.name} src={chat.avatar} />
            <div className="flex flex-col ml-2">
              <span className="font-bold">{chat.name}</span>
              <span className="text-gray-400">
                {chat.messages[chat.messages.length - 1].text}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4">{renderUserList()}</div>
      <div className="w-2/4 ml-4">{renderChatWindow()}</div>
    </div>
  );
};

export default Chat;
