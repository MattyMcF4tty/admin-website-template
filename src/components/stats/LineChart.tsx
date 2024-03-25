'use client';

import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

interface LineChartProps {
  data: any; // Define a proper type based on your data structure
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  // Options can include interaction settings, aspect ratio, scales, plugins, etc.
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Line Chart',
      },
    },
    // Add other options as needed
  };
  
  return <Line data={data} options={options} />;
};

export default LineChart;
