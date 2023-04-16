import React from 'react';
import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Header = (props) => {
  return (
    <header className="relative bg-white w-full border border-gray-300 h-[4rem] flex align-center items-center">
      <IconButton onClick={props.onMenuClick} size="large">
        <Menu fontSize="large" />
      </IconButton>
      <h1 className="text-5xl font-bold flex-grow flex-shrink-1 text-center">
        <span className="gradient-text-red">F</span>
        <span className="gradient-text-orange">u</span>
        <span className="gradient-text-yellow">n</span>
        <span className="gradient-text-green">S</span>
        <span className="gradient-text-blue">t</span>
        <span className="gradient-text-purple">a</span>
        <span className="gradient-text-pink">c</span>
        <span className="gradient-text-red">k</span>
      </h1>
    </header>
  );
};

export default Header;
