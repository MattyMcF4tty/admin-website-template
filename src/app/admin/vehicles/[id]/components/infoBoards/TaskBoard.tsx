import { VehicleTaskSchema } from '@/src/schemas/vehicleTask'
import React, { FC } from 'react'

interface TaskBoardProps {
/*   tasks: VehicleTaskSchema[];
 */}

const TaskBoard: FC<TaskBoardProps> = ({}) => {
  return (
    <div className='mt-2'>
      <h1 className='w-1/3 border-b'>Ongoing</h1>
      TaskBoard
      <h1 className='w-1/3 border-b'>Completed</h1>
    </div>
  )
}

export default TaskBoard