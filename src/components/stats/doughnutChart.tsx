'use client';

import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data: any; // Define a proper type based on your data structure
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data }) => {
  var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  var yValues = [55, 49, 44, 24, 15];
  var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
  ];
  
  const options = {
    animation: {
      animateRotate: true,
      animateScale: false,
      duration: 500,
    },
  };  
  

  return <Doughnut data={data} options={options}/>
};

export default DoughnutChart;
