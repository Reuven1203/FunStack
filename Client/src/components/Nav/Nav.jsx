import React from 'react';
import { Box, Drawer, IconButton, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

const Links = [
  {
    name: 'Zoo',
    icon: '\u{1F6D6}',
    color: '#ff5555',
    path: '/home',
  },
  {
    name: 'Learning Lions',
    icon: '\u{1F981}',
    color: '#ff9355',
    path: '/learning-lions',
  },
  {
    name: 'Safari Mates',
    icon: '\u{1F46B}',
    secondIcon: '\u{1F43E}',
    color: '#ffcc55',
    path: '/safari-mates',
  },
  {
    name: 'Gorilla Grades',
    icon: '\u{1F98D}',
    color: '#55ff55',
    path: '/gorilla-grades',
  },
  {
    name: 'Parrot Chat',
    icon: '\u{1F99C}',
    color: '#55ffff',
    path: '/parrot-chat',
  },
];

const Nav = (props) => {
  return (
    <Drawer
      hideBackdrop={true}
      variant="persistent"
      open={props.open}
      onClose={props.onClose}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: 1,
        }}
      >
        <div className="flex flex-col items-center space-y-4 w-full">
          {/*back icon to close drawer*/}
          <IconButton onClick={props.onClose} size="large">
            <ArrowBack fontSize="large" />
          </IconButton>
          {Links.map((link, index) => {
            return (
              <Link key={index} className="w-full" to={link.path}>
                <Paper
                  sx={{
                    backgroundColor: `${link.color}`,
                    fontSize: 45,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 120,
                  }}
                >
                  <span className="text-6xl">
                    {link.icon}
                    {link.secondIcon}
                  </span>
                  <span className="text-black"> {link.name}</span>
                </Paper>
              </Link>
            );
          })}
        </div>
      </Box>
    </Drawer>
  );
};

export default Nav;
