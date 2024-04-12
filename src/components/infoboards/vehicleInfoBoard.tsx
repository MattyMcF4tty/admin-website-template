'use client';

import { useState } from 'react';
import DamagesBoard from './DamagesBoard';
import DetailsBoard from './DetailsBoard';
import TaskBoard from './TaskBoard';
import TicketsBoard from './TicketsBoard';
import TripsBoard from './TripsBoard';

const VehicleInfoBoard = () => {
  const [currentBoard, setCurrentBoard] = useState('details');

  return (
    <div className="w-full h-full">
      <BoardNav
        currentBoard={currentBoard}
        setCurrentBoard={(selectedBoard) => setCurrentBoard(selectedBoard)}
      />
      <InfoBoard currentBoard={currentBoard} />
    </div>
  );
};

export default VehicleInfoBoard;

/* Supporting components */

const BoardNav = ({
  currentBoard,
  setCurrentBoard,
}: {
  currentBoard: string;
  setCurrentBoard: (selectedBoard: string) => void;
}) => {
  return (
    <nav className="w-full h-[1.75rem] flex flex-row">
      <button
        id="details"
        onClick={(e) => setCurrentBoard((e.target as HTMLButtonElement).id)}
        className={`px-2 border-b h-full w-24
      ${
        currentBoard === 'details'
          ? 'border-company-color-primary'
          : 'hover:border-company-color-primary'
      }`}
      >
        Details
      </button>
      <button
        id="trips"
        onClick={(e) => setCurrentBoard((e.target as HTMLButtonElement).id)}
        className={`px-2 border-b h-full w-24
      ${
        currentBoard === 'trips'
          ? 'border-company-color-primary'
          : 'hover:border-company-color-primary'
      }`}
      >
        Trips
      </button>
      <button
        id="logs"
        onClick={(e) => setCurrentBoard((e.target as HTMLButtonElement).id)}
        className={`px-2 border-b h-full w-24
      ${
        currentBoard === 'logs'
          ? 'border-company-color-primary'
          : 'hover:border-company-color-primary'
      }`}
      >
        Tasks
      </button>
      <button
        id="damages"
        onClick={(e) => setCurrentBoard((e.target as HTMLButtonElement).id)}
        className={`px-2 border-b h-full w-24
      ${
        currentBoard === 'damages'
          ? 'border-company-color-primary'
          : 'hover:border-company-color-primary'
      }`}
      >
        Damages
      </button>
      <button
        id="tickets"
        onClick={(e) => setCurrentBoard((e.target as HTMLButtonElement).id)}
        className={`px-2 border-b h-full w-24
      ${
        currentBoard === 'tickets'
          ? 'border-company-color-primary'
          : 'hover:border-company-color-primary'
      }`}
      >
        Tickets
      </button>
    </nav>
  );
};

export const InfoBoard = ({ currentBoard }: { currentBoard: string }) => {
  if (currentBoard === 'details') {
    return <DetailsBoard />;
  } else if (currentBoard === 'trips') {
    return <TripsBoard />;
  } else if (currentBoard === 'logs') {
    return <TaskBoard />;
  } else if (currentBoard === 'damages') {
    return <DamagesBoard />;
  } else if (currentBoard === 'tickets') {
    return <TicketsBoard />;
  } else {
    return <p>Please select the information you want displayed</p>;
  }
};
