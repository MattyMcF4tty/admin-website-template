'use client';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

interface PrebookCounterProps {
  counterText: string;
  counter: number;
  description: string;
}

const PrebookCounter = ({counterText, counter, description}: PrebookCounterProps) => {
  const [showDescription, setShowDecription] = useState(false);

  return (
    <div className='bg-white rounded-md max-h-[4.25rem] w-40 shadow-default flex flex-col p-2 relative'>
      <label htmlFor="counter" className='text-sm text-slate-400 font-semibold'>{counterText}</label>
      <h4 id="counter" className='text-black font-semibold text-2xl'>{counter}</h4>
      <FontAwesomeIcon icon={faCircleInfo} className='text-sm text-slate-400 absolute right-2 z-10'
        onClick={() => setShowDecription(!showDescription)}/>
        {showDescription && (
          <div className='bg-white absolute'>
            <span className='break-words text-xs overflow-y-scroll'>{description}</span>
          </div>
        )}
    </div>
  )
}

export default PrebookCounter