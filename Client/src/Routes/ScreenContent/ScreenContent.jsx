import React from 'react';
import Nav from '../../components/Nav/Nav.jsx';
import {Outlet} from 'react-router-dom';
import {Button} from '@mui/material';

const ScreenContent = () => {
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const handleDrawerClose = () => {
        setOpen(false);
    }
    return (
        <>
            <Nav open={open}/>
            <div onClick={open && handleDrawerClose} className="w-screen h-screen bg-white">
                <Button onClick={handleDrawerOpen}>Open</Button>
                <Outlet/>
            </div>

        </>
    );
};

export default ScreenContent;