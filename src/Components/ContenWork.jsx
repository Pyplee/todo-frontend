import React from 'react';
import Card from '../Components/Card';
import ControlPanel from '../Components/ControlPanel';

function ContentWork() {
  return (
    <>
      <ControlPanel />
      <div className="bg-container-work flex justify-center items-center overflow-y-auto overflow-x-hidden h-full w-full">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
    </>
  );
}

export default ContentWork;