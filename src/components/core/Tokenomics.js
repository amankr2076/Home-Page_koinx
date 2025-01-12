import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
  // Data for the doughnut chart

  const text=`Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel
          consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend
          lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida
          aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum.`
  const data = {
    labels: ['Crowdsale investors', 'Foundation'],
    datasets: [
      {
        data: [80, 20], // Percentages
        backgroundColor: ['#3b82f6', '#f59e0b'], // Blue and Orange
        hoverBackgroundColor: ['#2563eb', '#d97706'],
        borderWidth: 0, // Remove border
        cutout: '70%', // Creates the ring effect
      },
    ],
  };

  // Chart options without the legend above the chart
  const options = {
    plugins: {
      legend: {
        display: false, // Disables the legend above the chart
      },
    },
  };

  return (
    <div>
      <div className="bg-white shadow-lg rounded-md p-6">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-6">Tokenomics</h2>

        <h3 className='font-bold mb-6'>Initial Distribution</h3>

        {/* Doughnut Chart and Custom Legend */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Chart */}
          <div className="w-40 h-40 md:w-48 md:h-48"> {/* Adjusted size */} 
            <Doughnut data={data} options={options} />
          </div>

          {/* Legend */}
          <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-6">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full inline-block mr-2"></span>
                <span>Crowdsale investors: 80%</span>
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-orange-500 rounded-full inline-block mr-2"></span>
                <span>Foundation: 20%</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mt-6">{text}</p>
      </div>
    </div>
  );
};

export default Tokenomics;
