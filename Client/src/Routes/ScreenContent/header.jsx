import React from 'react';
import {Menu} from '@mui/icons-material';
import {IconButton} from '@mui/material';

const Header = (props) => {
    return (
        <header className="relative bg-green-200  w-full  h-[4rem] flex align-center items-center">
            <IconButton onClick={props.onMenuClick} size="large">
          <Menu fontSize="large"/>
            </IconButton>
            <h1 className="text-5xl">FunStack</h1>
        </header>
    );
};

export default Header;