import React from 'react';
import GradingTable from '../../components/GradingTable/GradingTable';

function GorillaGrades() {
  const storedFirstName = localStorage.getItem('firstName');
  return (
    <>
      <h1 className="text-6xl text-center mt-10">
        Gorilla Grades
        {'\u{1F98D}'}
      </h1>
      <h3 className="text-4xl text-center mt-10">
        User Report - {storedFirstName}
      </h3>
      <div className="flex justify-center mt-12">
        <GradingTable />
      </div>
    </>
  );
}

export default GorillaGrades;
