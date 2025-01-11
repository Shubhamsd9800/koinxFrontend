import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { memo } from 'react';


ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = memo(() => {
  const chartData = {
    labels: ['Crowdsale investors: 80%', 'Foundation: 20%'],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ['#0141CF', '#FFA500'],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 14
          }
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 mt-6">
      <h2 className="text-2xl font-semibold mb-4">Tokenomics</h2>
      <div className="flex flex-col gap-8">
        <h3 className="text-lg font-medium mb-2">Initial Distribution</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="h-[300px] w-[300px]">
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing.
            </p>
      </div>
    </div>
  );
});

export default Tokenomics;
