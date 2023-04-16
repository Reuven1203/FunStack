import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { StarIcon } from '@heroicons/react/solid';
import tw from 'tailwind-styled-components';

const prizes = [
  { name: 'Small Prize', stars: 10, description: 'A small toy or treat' },
  {
    name: 'Medium Prize',
    stars: 20,
    description: 'A medium-sized toy or treat',
  },
  { name: 'Large Prize', stars: 30, description: 'A large toy or treat' },
];

const RewardsPage = () => {
  const [stars, setStars] = useState(Math.floor(Math.random() * 41));

  const handleStarClick = () => {
    window.location.href = '/learning-lions';
  };

  const handleRedeemClick = (prize) => {
    alert(`You have redeemed the ${prize.name} prize!`);
    setStars(stars - prize.stars);
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="text-center my-8">
        <Typography variant="h3" component="h1" gutterBottom>
          Rewards Page
        </Typography>
        <Typography variant="subtitle1" component="p">
          You have earned {stars} stars!
        </Typography>
        <Button onClick={handleStarClick} variant="contained">
          <StarIcon className="h-5 w-5 mr-2" />
          Want more stars?
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {prizes.map((prize) => (
          <StyledCard key={prize.name}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {prize.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {prize.description}
              </Typography>
              <div className="mt-4 flex items-center">
                <StarIcon className="h-5 w-5 mr-2" />
                <Typography variant="h6">{prize.stars}</Typography>
              </div>
              {stars >= prize.stars ? (
                <Button
                  className="mt-4"
                  variant="contained"
                  onClick={() => handleRedeemClick(prize)}
                >
                  Redeem
                </Button>
              ) : (
                <Typography className="mt-4" color="text.secondary">
                  You need {prize.stars - stars} more stars to redeem this
                  prize.
                </Typography>
              )}
            </CardContent>
          </StyledCard>
        ))}
      </div>
    </div>
  );
};

const StyledCard = tw(Card)`
  text-center
  flex
  flex-col
  justify-between
  bg-white
  rounded-xl
  shadow-md
`;

export default RewardsPage;
