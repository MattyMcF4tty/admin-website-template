'use client';

import { VehicleTypeSchema } from '@/src/schemas/vehicleType'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

const VehicleTypeConfig = ({type}: {type: VehicleTypeSchema}) => {
  const [showSettings, setShowSettings] = useState(false);
  const [allowSave, setAllowSave] = useState(false);

  const [typeData, setTypeData] = useState<VehicleTypeSchema>(type)

  useEffect(() => {
    if (
      typeData.fuelType !== type.fuelType || 
      String(typeData.range) !== String(type.range) || 
      typeData.description !== typeData.description || 
      typeData.brand !== type.brand || 
      typeData.model !== type.model) 
      {
      setAllowSave(true)
    } else {
      setAllowSave(false)
    }
  }, [typeData.fuelType, typeData.range, typeData.description, typeData.brand, typeData.model])

  function updateFields(key: keyof VehicleTypeSchema, value: string | number) {
    setTypeData(prev => ({ ...prev, [key]: value }));
  }
  

  async function handleUpdateType() {
    await fetch(`/api/vehicleType?id=${type.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(typeData)
    })

    setAllowSave(false)
  }

  return (
    <div className='rounded-lg bg-company-color-primary'>
      <div className='flex justify-evenly flex-row px-2 text-white'>
        <button className='h-10 flex items-center justify-between w-full'
        disabled={allowSave}
        onClick={() => setShowSettings(!showSettings)}>
          <h1 className='font-semibold mr-2'>{typeData.brand} {typeData.model}</h1>
          <FontAwesomeIcon icon={faChevronUp} className={`ml-2 duration-150 ${showSettings ? 'rotate-180' : 'font-thin'}`} size='sm'/>
        </button>
      </div>

      <div className={`bg-white duration-200 rounded-b-lg px-2 ${showSettings ? 'py-2 max-h-full' : 'h-0 overflow-hidden'}`}>
        {/* Description */}
        <div className='mb-2 w-full'>
          <h2 className='text-xs text-gray-500'>Description</h2>
          <textarea 
          className="w-full overflow-hidden resize-none" 
          value={typeData.description || ''} 
          onChange={(e) => {
            updateFields('description', e.target.value)
            e.target.style.height = 'inherit';
            e.target.style.height = `${e.target.scrollHeight}px`;
            }}/>
        </div>

        {/* Settings */}
        <div className='flex flex-row justify-between'>
          {/* Brand */}
          <div>
            <h2 className='text-xs text-gray-500'>Brand</h2>
            <input type="text" value={typeData.brand} onChange={(e) => updateFields('brand', e.target.value)}/>
          </div>

          {/* Model */}
          <div>
            <h2 className='text-xs text-gray-500'>Model</h2>
            <input type="text" value={typeData.model} onChange={(e) => updateFields('model', e.target.value)}/>
          </div>

          {/* Fuel type */}
          <div>
            <h2 className='text-xs text-gray-500'>Fuel type</h2>
            <select name="fuelType" id="fuelType" value={typeData.fuelType}
            onChange={(e) => updateFields('fuelType', e.target.value)}>
              <option value="Electric">Electric</option>
              <option value="95% unleaded gasoline">95% unleaded gasoline</option>
              <option value="Diesel">Diesel</option>
            </select>
          </div>

          {/* Range */}
          <div>
            <h2 className='text-xs text-gray-500'>Range [km]</h2>
            <input className=''
            type="number" value={typeData.range} 
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
            
              updateFields('range', Number(newRange));
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