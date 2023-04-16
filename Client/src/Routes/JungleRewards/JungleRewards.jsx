import React from 'react';
import RewardsPage from './RewardsPage';

function JungleRewards() {
  return (
    <>
      <h1 className="text-6xl text-center mt-10">
        Jungle Rewards
        {'\u{2B50}'}
      </h1>
      <div className="flex justify-center mt-12">
        <RewardsPage />
      </div>
    </>
  );
}

export default JungleRewards;
