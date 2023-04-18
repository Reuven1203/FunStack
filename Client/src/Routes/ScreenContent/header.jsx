import React from 'react';
import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import CircularProgressWithLabel from '../../components/Progress/CircularProgressWithLabel';
import StarIcon from '@mui/icons-material/Star';
import CustomToolTip from '../../components/ToolTip/CustomToolTip';
import { Link } from 'react-router-dom';

function Header(props) {
  const stars = 20;

  const handleStarClick = () => {
    window.location.href = '/jungle-rewards';
  };

  return (
    <header className="relative bg-white w-full border border-gray-300 h-[4rem] flex align-center items-center">
      <IconButton onClick={props.onMenuClick} size="large">
        <Menu fontSize="large" />
      </IconButton>

      <h1 className="text-5xl font-bold flex-grow flex-shrink-1 text-center">
        <Link to="/home">
          <span className="gradient-text-red">F</span>
          <span className="gradient-text-orange">u</span>
          <span className="gradient-text-yellow">n</span>
          <span className="gradient-text-green">S</span>
          <span className="gradient-text-blue">t</span>
          <span className="gradient-text-purple">a</span>
          <span className="gradient-text-pink">c</span>
          <span className="gradient-text-red">k</span>
        </Link>
      </h1>

      <CustomToolTip title={`You have ${stars} stars!`}>
        <div className="mr-10 flex justify-center">
          <button onClick={handleStarClick}>
            <StarIcon fontSize="large" sx={{ margin: '2px', color: 'gold' }} />
          </button>

          <CircularProgressWithLabel value={props.value} />
        </div>
      </CustomToolTip>
    </header>
  );
}

export default Header;
