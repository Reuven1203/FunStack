import React from 'react';
import Nav from '../../components/Nav/Nav.jsx';
import { Outlet } from 'react-router-dom';
import Header from './header.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScreenContent = () => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  useEffect(() => {
    handleDrawerClose();
  }, [location]);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Nav open={open} onClose={handleDrawerClose} />
      <div
        onClick={open && handleDrawerClose}
        className="w-screen h-screen bg-white text-black"
      >
        <Header onMenuClick={handleDrawerOpen} />
        <Outlet />
      </div>
    </>
  );
};

export default ScreenContent;
