import React from 'react';
import TableData from '../../components/TableData/TableData';

function SafariMates() {
  return (
    <>
      <h1 className="text-6xl text-center mt-10">
        {'\u{1F46B}'}
        Safari Mates
        {'\u{1F43E}'}
      </h1>
      <div className="flex justify-center mt-12">
        <TableData />
      </div>
    </>
  );
}

export default SafariMates;
