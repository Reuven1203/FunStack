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
            <Button onClick={handleDrawerOpen} onClose={handleDrawerClose}>Click me</Button>
            <div onClick={handleDrawerClose}>
                <Outlet/>
            </div>

        </>
    );
};

export default ScreenContent;