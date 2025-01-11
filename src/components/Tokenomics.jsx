import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { memo, useRef, useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = memo(() => {
  const containerRef = useRef(null);
  const [chartSize, setChartSize] = useState({ width: 300, height: 300 });

  useEffect(() => {
    const updateChartSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const size = containerWidth < 400 ? Math.min(240, containerWidth - 40) : 300;
        setChartSize({ width: size, height: size });
      }
    };

    // Initial size
    updateChartSize();

    // Add resize listener
    const resizeObserver = new ResizeObserver(updateChartSize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Cleanup
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

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
          padding: window.innerWidth < 768 ? 10 : 15,
          font: {
            size: window.innerWidth < 768 ? 10 : 12,
            family: 'Inter, sans-serif',
          },
          boxWidth: window.innerWidth < 768 ? 10 : 15,
        }
      }
    },
    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-4 mt-4 sm:mt-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Tokenomics</h2>
      <div className="flex flex-col gap-4 sm:gap-8">
        <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">Initial Distribution</h3>
        <div 
          ref={containerRef} 
          className="flex justify-center sm:justify-start w-full"
        >
          <div style={{ 
            width: chartSize.width, 
            height: chartSize.height,
            maxWidth: '100%' 
          }}>
            <Doughnut 
              data={chartData} 
              options={chartOptions}
            />
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing.
        </p>
      </div>
    </div>
  );
});

export default Tokenomics;
