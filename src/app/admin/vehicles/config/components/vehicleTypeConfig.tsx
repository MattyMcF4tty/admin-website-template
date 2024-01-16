'use client';

import { VehicleTypeSchema } from '@/src/schemas/vehicleType'
import { updateRow } from '@/src/utils/database/database';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

const VehicleTypeConfig = ({type}: {type: VehicleTypeSchema}) => {
  const [showSettings, setShowSettings] = useState(false);
  const [allowSave, setAllowSave] = useState(false);

  const [fuelType, setFuelType] = useState(type.fuelType);
  const [range, setRange] = useState(String(type.range));
  const [description, setDescription] = useState(type.description);
  const [brand, setBrand] = useState(type.brand);
  const [model, setModel] = useState(type.model);

  useEffect(() => {
    console.log(allowSave)
    if (fuelType !== type.fuelType || range !== String(type.range) || description !== type.description || brand !== type.brand || model !== type.model) {
      setAllowSave(true)
    } else {
      setAllowSave(false)
    }
  }, [fuelType, range, description, brand, model])


  async function handleUpdateType() {
    await updateRow('fleetVehicleType', "1", {brand: brand, model: model, fuelType: fuelType, range: range, description: description})
  }

  return (
    <div className='rounded-lg bg-company-color-primary'>
      <button className='h-10 px-2 flex items-center justify-between w-full'
      disabled={allowSave}
      onClick={() => setShowSettings(!showSettings)}>
        <h1 className='text-white font-semibold mr-2'>{type.brand} {type.model}</h1>
        <FontAwesomeIcon icon={faChevronUp} className={`ml-2 duration-150 text-white ${showSettings ? 'rotate-180' : 'font-thin'}`} size='sm'/>
      </button>

      <div className={`bg-white duration-200 rounded-b-lg px-2 ${showSettings ? 'py-2 max-h-full' : 'h-0 overflow-hidden'}`}>
        {/* Description */}
        <div className='mb-2 w-full'>
          <h2 className='text-xs text-gray-500'>Description</h2>
          <textarea className="w-full overflow-hidden resize-none" 
          value={description} 
          onChange={(e) => {
            setDescription(e.target.value)
            e.target.style.height = 'inherit';
            e.target.style.height = `${e.target.scrollHeight}px`;
            }}/>
        </div>

        {/* Settings */}
        <div className='flex flex-row justify-between'>
          {/* Brand */}
          <div>
            <h2 className='text-xs text-gray-500'>Brand</h2>
            <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)}/>
          </div>

          {/* Model */}
          <div>
            <h2 className='text-xs text-gray-500'>Model</h2>
            <input type="text" value={model} onChange={(e) => setModel(e.target.value)}/>
          </div>

          {/* Fuel type */}
          <div>
            <h2 className='text-xs text-gray-500'>Fuel type</h2>
            <select name="fuelType" id="fuelType" value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}>
              <option value="Electric">Electric</option>
              <option value="95% unleaded gasoline">95% unleaded gasoline</option>
              <option value="Diesel">Diesel</option>
            </select>
          </div>

          {/* Range */}
          <div>
            <h2 className='text-xs text-gray-500'>Range [km]</h2>
            <input className=''
            type="number" value={range} 
            onChange={(e) => {
              let newRange = e.target.value;

              // Remove leading '0's
              while (newRange.startsWith('0')) {
                newRange = newRange.substring(1);
              }
            
              // Limit length to 4 characters
              if (newRange.length > 4) {
                newRange = newRange.substring(0, 4);
              }
            
              setRange(newRange);
            }}/>
          </div>
        </div>
      </div>
      {/* Save button */}
      {allowSave && (
        <button className={`bg-company-color-primary w-full text-white font-semibold rounded-b-lg`}
        onClick={() => handleUpdateType()}>
        Save
        </button>
      )}
    </div>
  )
}

export default VehicleTypeConfig