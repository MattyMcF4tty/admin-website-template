'use client';

import React, { useState } from "react";
import DetailsBoard from "./infoBoards/detailsBoard";
import TripsBoard from "./infoBoards/tripsBoard";
import DamagesBoard from "./infoBoards/damagesBoard";
import LogsBoard from "./infoBoards/logsBoard";
import TicketsBoard from "./infoBoards/ticketsBoard";


const VehicleInfoBoard = () => {
  const [currentBoard, setCurrentBoard] = useState('details');

  return (
    <div className="w-full h-full">
      <BoardNav currentBoard={currentBoard} setCurrentBoard={(selectedBoard) => setCurrentBoard(selectedBoard)}/>
      <InfoBoard currentBoard={currentBoard}/>
    </div>
  )
}

export default VehicleInfoBoard;


/* Supporting components */

const BoardNav = ({currentBoard, setCurrentBoard}: {currentBoard: string, setCurrentBoard: ((selectedBoard:string) => void)}) => {

  return (
    <nav className='w-full h-[1.75rem] flex flex-row'>
      <button id='details' onClick={(e) => setCurrentBoard((e.target as HTMLButtonElement).id)}
      className={`px-2 border-b h-full w-24
      ${currentBoard === 'details' ? 'border-company-color-primary' : 'hover:border-company-color-primary'}`}>
        Details
      </button>
      <button id='trips' onClick={(e) => setCurrentBoard((e.target as HTMLButtonElement).id)}
      className={`px-2 border-b h-full w-24
      ${currentBoard === 'trips' ? 'border-company-color-primary' : 'hover:border-company-color-primary'}`}>
        Trips
      </button>
      <button id='logs' onClick={(e) => setCurrentBoard((e.target as HTMLButtonElement).id)}
      className={`px-2 border-b h-full w-24
      ${currentBoard === 'logs' ? 'border-company-color-primary' : 'hover:border-company-color-primary'}`}>
        Logs
      </button>
      <button id='damages' onClick={(e) => setCurrentBoard((e.target as HTMLButtonElement).id)}
      className={`px-2 border-b h-full w-24
      ${currentBoard === 'damages' ? 'border-company-color-primary' : 'hover:border-company-color-primary'}`}>
        Damages
      </button>
      <button id='tickets' onClick={(e) => setCurrentBoard((e.target as HTMLButtonElement).id)}
      className={`px-2 border-b h-full w-24
      ${currentBoard === 'tickets' ? 'border-company-color-primary' : 'hover:border-company-color-primary'}`}>
        Tickets
      </button>
    </nav>
  )
}


export const InfoBoard = ({currentBoard}: {currentBoard:string}) => {
  if (currentBoard === 'details') {
    return <DetailsBoard/>
  } 
  else if (currentBoard === 'trips') {
    return <TripsBoard/>
  }
  else if (currentBoard === 'logs') {
    return <LogsBoard/>
  }
  else if (currentBoard === 'damages') {
    return <DamagesBoard/>
  }
  else if (currentBoard === 'tickets') {
    return <TicketsBoard/>
  }
  else {
    return <p>Please select the information you want displayed</p>
  }
}
