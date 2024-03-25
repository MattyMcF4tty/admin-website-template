import DoughnutChart from '@/src/components/stats/DoughnutChart'
import PieChart from '@/src/components/stats/DoughnutChart'
import LineChart from '@/src/components/stats/LineChart'
import ContentBox from '@/src/components/ui/ContentBox'
import { faToolbox } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'


interface OverviewPageProps {
    
}



const OverviewPage: FC<OverviewPageProps> = ({}) => {
    const data = {
        labels: ["1", "2", "3", "4"],
        datasets: [
          {
            label: 'Dataset 1',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 1, 3, 8, 3],
            borderColor: "#7cccd7",
            backgroundColor: "rgba(0, 0, 0, 0)",
            fill: true,
          },
          // ...You can include more datasets here
        ],
      };
      


    return (
        <div className='w-[Calc(100vw-12rem)] grid grid-cols-5 gap-6 border-2'>
            {/* bg-[#7cd78a] */}
            <ContentBox className='col-start-1'>
                <FontAwesomeIcon icon={faToolbox} className='bg-[#7cccd7] p-2 m-[2px] hover:m-[0px] rounded-md hover:p-[10px] hover:cursor-pointer duration-200'/>
                <p className='text-xl'>23</p>
                <p className='text-sm'>Currently at workshop</p>
            </ContentBox>

            <ContentBox className='col-start-2'>
                <FontAwesomeIcon icon={faToolbox} className='bg-[#fff1b0] p-2 m-[2px] hover:m-[0px] rounded-md hover:p-[10px] hover:cursor-pointer duration-200'/>
                <p className='text-xl'>44</p>
                <p className='text-sm'>Minor damages</p>
            </ContentBox>

            <ContentBox className='col-start-3'>
                <FontAwesomeIcon icon={faToolbox} className='bg-[#fce0b6] p-2 m-[2px] hover:m-[0px] rounded-md hover:p-[10px] hover:cursor-pointer duration-200'/>
                <p className='text-xl'>13</p>
                <p className='text-sm'>Major damages</p>
            </ContentBox>

            <ContentBox className='col-start-4'>
                <FontAwesomeIcon icon={faToolbox} className='bg-[#ffc8c8] p-2 m-[2px] hover:m-[0px] rounded-md hover:p-[10px] hover:cursor-pointer duration-200'/>
                <p className='text-xl'>2</p>
                <p className='text-sm'>Totaled</p>
            </ContentBox>

            <ContentBox className='col-start-5 row-span-3'>
                <h1 className='w-full text-center text-xl'>Tasks</h1>

            </ContentBox>

            <ContentBox className='col-start-1 col-span-4 row-start-2 row-span-2 h-full'>
                <LineChart data={data}/>
            </ContentBox>
        </div>
    )
}

export default OverviewPage